<script setup>
const props = defineProps({
  navTitle: {
    type: String,
    required: false,
    default: 'Default title',
  },
})

function alertTitle() {
  alert(props.navTitle)
}
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a class="nav__link" href="/" @click="alertTitle">
          {{ navTitle }}
        </a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="https://www.training360.com/">Training360</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="https://www.lenovo.com/hu/hu/">Lenovo</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  background: lightgray;
}

.nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__item {
  display: inline-block;
}

.nav__link {
  color: black;
  display: inline-block;
  font-size: 1.15rem;
  padding: 1rem;
  text-decoration: none;
}

.nav__link:hover {
  color: white;
  text-shadow: 1px 0px 1px black;
}
</style>
