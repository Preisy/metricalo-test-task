import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, doc } from 'firebase/firestore';
import { useFirebaseAuth, useFirestore } from 'vuefire';
import { getUsersCollectionRef } from 'shared/config/collections';
import type { Login, Signup } from './types';

export class AuthService {
  private db = useFirestore()
  private auth = useFirebaseAuth()!

  async signup(req: Signup.Entity) {
    await createUserWithEmailAndPassword(this.auth!, req.email, req.password)
    const docRef = await addDoc(getUsersCollectionRef(), {
      ...req,
      ...this.getEmptyPassword(),
    })
    return doc(this.db, docRef.path)
  }
  private getEmptyPassword() {
    return {
      password: null,
      passwordRepeat: null,
    } as any
  }

  async login(req: Login.Entity) {
    return signInWithEmailAndPassword(this.auth!, req.email, req.password)
  }

  async logout() {
    return signOut(this.auth)
  }
}
