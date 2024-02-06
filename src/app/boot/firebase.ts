import { boot } from 'quasar/wrappers'
import { VueFire, VueFireAuth } from 'vuefire'
import { initializeApp } from 'firebase/app'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

// here we can export reusable database references

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  const firebaseApp = initializeApp({
    apiKey: 'AIzaSyA8eLU0yfM0PXOuqyDhfeCSnawxDzl8cUg',
    authDomain: 'metricalo-test-task.firebaseapp.com',
    projectId: 'metricalo-test-task',
    storageBucket: 'metricalo-test-task.appspot.com',
    messagingSenderId: '228783772249',
    appId: '1:228783772249:web:d5b2d9680e2a6acc611748',
  })

  app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })
})
