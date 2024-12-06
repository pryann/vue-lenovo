<script setup>
import { useCartStore } from '../stores/cart'

const { totalCount } = useCartStore()
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list-item">
        <!--link to name -->
        <RouterLink class="nav__link" :to="{ name: 'products' }">
          Products
        </RouterLink>
      </li>
      <li class="nav__list-item">
        <!--link to path -->
        <RouterLink class="nav__link" to="/cart">
          Cart ({{ totalCount }})
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  background: var(--black);
}

.nav__list {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  list-style: none;
  padding: 1rem 0;
  margin: 0;
}

.nav__list-item {
  padding: 0 1rem;
}

.nav__link {
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
