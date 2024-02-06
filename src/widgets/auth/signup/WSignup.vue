<script setup lang="ts">
import { useRouter } from 'vue-router';
import { FirebaseError } from 'firebase/app';
import { ESignupFields } from 'entities/auth';
import { Signup } from 'shared/api/auth';
import { ROUTES } from 'shared/config/routes';
import { SBtn } from 'shared/ui/btns';
import { useAuthStore } from 'src/shared/api/auth';
import { useForm } from 'src/shared/lib/form';

const store = useAuthStore()
const router = useRouter()

const { handleSubmit } = useForm({
  validationSchema: Signup.shape,
})
const onSubmit = handleSubmit(async (values) => {
  const res = await store.signup(values)
  if (res instanceof FirebaseError) return
  await store.login(values)
  router.push({ name: ROUTES.DASHBOARD.EVENTS })
})

</script>

<template>
  <form @submit="onSubmit" class="flex flex-col items-center [&>.s-input]:w-full">
    <e-signup-fields/>

    <s-btn type="submit" label="Sign Up" :loading="store.isAuth.state === 'loading'"/>
  </form>
</template>

<style scoped lang="scss">

</style>
