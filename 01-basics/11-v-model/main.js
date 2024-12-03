const { createApp, ref, reactive } = Vue

const app = createApp({
  setup() {
    const userFormInitialState = {
      name: '',
      email: '',
    }

    const userForm = reactive({ ...userFormInitialState })

    const form = ref(null)

    // function changeName($event) {
    //   name.value = $event.target.value
    // }

    function handleSubmit() {
      // trick to reset the form
      console.log(userForm)

      // reset form values, but not reset the form state
      // form.value.reset()
      // userForm.name = ''
      // userForm.email = ''
      Object.assign(userForm, userFormInitialState)
      console.log(userForm)
      // console.log(userForm)
    }

    return {
      // name,
      // email,
      form,
      userForm,
      handleSubmit,
      // changeName,
    }
  },
})

app.mount('#app')
