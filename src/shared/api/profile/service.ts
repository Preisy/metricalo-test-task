import { getDocs, query, where } from 'firebase/firestore';
import { getUsersCollectionRef } from 'shared/config/collections';
import type { User } from '../user';


export class ProfileService {
  async getMeByEmail(email: string) {
    const q = query(getUsersCollectionRef(), where('email', '==', email))
    const querySnapshot = await getDocs(q)
    const userDoc = querySnapshot.docs[0]?.data() ?? null
    return userDoc as User.Entity | null
  }
}
