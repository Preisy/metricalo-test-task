import type { CollectionReference } from 'firebase/firestore';
import { collection } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import type { TableEvent } from 'shared/api/event'
import type { User } from 'shared/api/user';


export const getUsersCollectionRef = () => {
  const db = useFirestore()
  return collection(db, 'users') as CollectionReference<User.Entity>
}

export const getEventsCollectionRef = () => {
  const db = useFirestore()
  return collection(db, 'events') as CollectionReference<TableEvent.Entity>
}
