<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
const acc = ref();
onMounted(() => {
  Object.assign(window, { acc });
});
</script>

<template>
  <div class="router">
    <RouterView :ref="acc"></RouterView>
    <RouterLink to="/a"></RouterLink>
  </div>
</template>

<style scoped></style>
