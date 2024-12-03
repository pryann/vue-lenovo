const { createApp, ref, reactive, toRef, toRefs } = Vue

const app = createApp({
  setup() {
    const userForm = ref({
      firstName: '',
      lastName: '',
      email: '',
    })

    const form = ref(null)

    function handleSubmit() {
      console.log(userForm.value)
      userForm.value = {
        firstName: '',
        lastName: '',
        email: '',
      }
      console.log(userForm.value)
    }

    // NOT REACTIVE
    // const firstName = userForm.value.firstName

    // REACTIVE, BUT MEH....
    // const firstName = toRef(userForm, 'firstName')
    // const lastName = toRef(userForm, 'lastName')
    // const email = toRef(userForm, 'email')

    // NOT REACTIVE
    // const { firstName, lastName, email } = userForm.value

    // REACTIVE
    // const { firstName, lastName, email } = toRefs(userForm.value)

    return {
      form,
      userForm,
      handleSubmit,
    }
  },
})

app.mount('#app')
