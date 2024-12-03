const { createApp, ref, reactive, toRef, toRefs } = Vue

const app = createApp({
  setup() {
    const userForm = reactive({
      firstName: '',
      lastName: '',
      email: '',
    })

    const form = ref(null)

    function handleSubmit() {
      // no .value needed
      console.log(userForm)
      // NOT VALID
      userForm = {
        firstName: '',
        lastName: '',
        email: '',
      }
      console.log(userForm)
    }

    // NOT VALID
    userForm = { firstName: 'fName', lastName: 'lName', email: 'email' }

    // VALID
    Object.assign(userForm, { firstName: 'fName', lastName: 'lName', email: 'email' })

    // NOT REACTIVE
    // const firstName = userForm.firstName

    // REACTIVE, BUT MEH....
    // const firstName = toRef(userForm, 'firstName')
    // const lastName = toRef(userForm, 'lastName')
    // const email = toRef(userForm, 'email')

    // NOT REACTIVE
    // const { firstName, lastName, email } = userForm

    // REACTIVE
    // const { firstName, lastName, email } = toRefs(userForm)

    return {
      form,
      userForm,
      handleSubmit,
    }
  },
})

app.mount('#app')
