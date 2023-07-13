<template>
  <div>
    <header>
      <!-- Your header content goes here -->
      <navigation />
    </header>
    <div>
      <!-- The content of each page will be rendered here -->
      <nuxt />
    </div>
    <footer>
      <!-- Your footer content goes here -->
    </footer>
  </div>
</template>

<script>
import navigation from '../components/navigation.vue'
export default {
  components: { navigation },
  // Optional script code for the layout component
}
</script>

<style>
/* Optional CSS styles for the layout component */
</style>
