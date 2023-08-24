<script setup lang="ts">
import A from '@/components/A'
const a = ref(0)
</script>

<template>
  <div text="red">123</div>
  <A />
  {{ a }}
</template>

<style scoped></style>
