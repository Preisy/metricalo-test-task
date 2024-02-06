import { addDoc, deleteDoc, doc, getCountFromServer, getDocs, limit, orderBy, query, startAt, updateDoc, where, writeBatch } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import { FirebaseError } from 'firebase/app';
import { getEventsCollectionRef } from 'shared/config/collections';
import type { TableEvent } from './types';

export class EventService {
  private db = useFirestore()
  private collectionRef = getEventsCollectionRef();

  async create(req: TableEvent.Req) {
    const qEventName = query(this.collectionRef, where('eventName', '==', req.eventName))
    const querySnapshotEventName = await getCountFromServer(qEventName)
    if (querySnapshotEventName.data().count > 0) {
      throw new FirebaseError('INVALID DATA', `Event name ${req.eventName} is already taken`)
    }

    const q = query(this.collectionRef, orderBy('position', 'desc'), limit(1))
    const querySnapshot = await getDocs(q)
    const greaterPositionEventDoc = querySnapshot.docs[0]?.data() as TableEvent.Entity | null
    const greaterPosition = greaterPositionEventDoc?.position ?? 0

    const docRef = await addDoc(this.collectionRef, {
      firstName: req.firstName,
      lastName: req.lastName,
      email: req.email,
      organization: req.organization,
      phone: req.phone,
      country: req.country,
      eventName: req.eventName,
      date: typeof req.date === 'string' ? new Date(req.date) : req.date,
      position: greaterPosition + 1,
      text: req.text ?? null,
    })
    return doc(this.db, docRef.path)
  }

  private async fetchListData(req: TableEvent.List.Req) {
    const q = query(
      this.collectionRef,
      orderBy('position', 'asc'),
      startAt((req.page - 1) * req.rowsPerPage + 1),
      limit(req.rowsPerPage),
    )

    const querySnapshot = await getDocs(q)
    const events = querySnapshot.docs.map(it => it.data())

    return events
  }
  private async fetchListTotal() {
    const qTotal = query(this.collectionRef)
    const total = await getCountFromServer(qTotal)
    return total.data().count
  }

  async fetchList(req: TableEvent.List.Req): Promise<TableEvent.List.Res> {
    const a = await Promise.all([this.fetchListData(req), this.fetchListTotal()])
    return {
      data: a[0],
      total: a[1],
    }
  }

  async delete(eventName: TableEvent.Entity['eventName']) {
    const event = await this.findOneByEventName(eventName);
    await deleteDoc(doc(this.collectionRef, event.id))
    return event
  }

  async findOneByEventName(eventName: TableEvent.Entity['eventName']) {
    const qEventName = query(this.collectionRef, where('eventName', '==', eventName))
    const querySnapshotEventName = await getDocs(qEventName)
    const docShapshot = querySnapshotEventName.docs[0];
    const event: TableEvent.Entity | null = querySnapshotEventName.docs[0]?.data() ?? null;

    if (!event) {
      throw new FirebaseError('NOT FOUND', `Event with name ${eventName} not found`)
    }
    return {
      ...event, id: docShapshot.id,
    }
  }

  async patchOneByEventName(eventName: TableEvent.Entity['eventName'], payload: Partial<TableEvent.Entity>) {
    const eventWithId = await this.findOneByEventName(eventName);
    await updateDoc(doc(this.collectionRef, eventWithId.id), payload)
    return this.findOneByEventName(eventName)
  }

  async reoder(oldPosition: number, newPosition: number) {
    if (newPosition === oldPosition) return;
    const min = Math.min(newPosition, oldPosition)
    const max = Math.max(newPosition, oldPosition)

    const q = query(
      this.collectionRef,
      where('position', '>=', min),
      where('position', '<=', max),
    )
    const querySnapshotEventName = await getDocs(q)
    const docsShapshot = querySnapshotEventName.docs;

    const docs = docsShapshot.map((it) => ({ id: it.id, position: it.data().position, e: it.data().eventName }))
    docs.sort((a, b) => a.position - b.position);

    const oldIndex = oldPosition - docs[0].position
    const newIndex = newPosition - docs[0].position

    const movedEntity = docs[oldIndex];

    docs.splice(oldIndex, 1);
    docs.splice(newIndex, 0, movedEntity);


    docs.forEach((it, i) => {
      it.position = i + min
    })

    const batch = writeBatch(this.db);
    docs.forEach(it => {
      const docRef = doc(this.collectionRef, it.id)
      batch.update(docRef, {
        position: it.position,
      })
    })
    await batch.commit()
  }
}
