<template>
  <div :class="['spacer', size]"></div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  }
})</script>

<style scoped>
div.sm {
  height: 8px;
}
div.md {
  height: 16px;
}
div.lg {
  height: 24px;
}
</style>