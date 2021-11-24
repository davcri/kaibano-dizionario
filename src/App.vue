<script setup></script>

<template>
  <header>
    <div class="wrapper">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </header>

  <router-view />
</template>

<style>
@import "./assets/base.css";

html,
body {
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(18, 0, 60, 1) 23%,
    rgba(42, 6, 95, 1) 100%
  );
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
