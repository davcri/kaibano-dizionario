<template>
  <svg
    v-if="asc"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path fill="none" d="M0 0H24V24H0z" />
    <path
      d="M20 4v12h3l-4 5-4-5h3V4h2zm-8 14v2H3v-2h9zm2-7v2H3v-2h11zm0-7v2H3V4h11z"
    />
  </svg>

  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path fill="none" d="M0 0H24V24H0z" />
    <path
      d="M19 3l4 5h-3v12h-2V8h-3l4-5zm-5 15v2H3v-2h11zm0-7v2H3v-2h11zm-2-7v2H3V4h9z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    asc: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
svg {
  fill: var(--muted);
  vertical-align: middle;
}
</style>
