import { defineStore } from 'pinia';
import { reactive, toRef, watchEffect } from 'vue';
import { useCurrentUser } from 'vuefire';
import { useState } from 'shared/lib/store';
import { useAuthStore } from '../auth';
import type { User } from '../user';
import { ProfileService } from './service';


export const useProfileStore = defineStore('profile', () => {
  const currentUser = useCurrentUser()
  const authStore = useAuthStore()
  const profileService = new ProfileService()

  const me = reactive(useState<User.Entity>('unset'))
  const isAuth = toRef(authStore, 'isAuth')

  watchEffect(async () => {
    if (currentUser.value?.email && isAuth.value.data) {
      me.loading()
      me.data = await profileService.getMeByEmail(currentUser.value.email);
      me.success()
      return;
    }

    me.success()
    me.data = null
  })

  return {
    me,
  }
})
