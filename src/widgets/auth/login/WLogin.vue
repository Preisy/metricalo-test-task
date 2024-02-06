<script setup lang="ts">
import { useRouter } from 'vue-router';
import { FirebaseError } from 'firebase/app';
import { ELoginFields } from 'entities/auth';
import { Login } from 'shared/api/auth'
import { ROUTES } from 'shared/config/routes';
import { SBtn } from 'shared/ui/btns';
import { useAuthStore } from 'src/shared/api/auth'
import { useForm } from 'src/shared/lib/form'

const store = useAuthStore()
const router = useRouter()

const { handleSubmit } = useForm({
  validationSchema: Login.shape,
})
const onSubmit = handleSubmit(async (values) => {
  const res = await store.login(values)
  if (res instanceof FirebaseError) return
  router.push({ name: ROUTES.DASHBOARD.EVENTS })
})

</script>

<template>
  <form @submit="onSubmit" class="flex flex-col items-center [&>.s-input]:w-full">
    <e-login-fields/>
    <s-btn type="submit" label="login" :loading="store.isAuth.state === 'loading'"/>
  </form>
</template>

<style scoped lang="scss">

</style>
