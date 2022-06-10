<template>
  <div class="row footer flex f-wrap">
    <span class="muted">Made by Crystal Bit (aka davcri)</span>
    <span class="muted">
      <a href="https://github.com/davcri/kaibano-dizionario">Source code</a></span>
  </div>
</template>

<script setup>
if (import.meta.env.MODE !== "development") {
  console.group(
    "\n %cCaraibi!",
    "background: #28855F; color: #83D5E6; font-family: sans-serif; font-size: 2em"
  );
  console.info(
    `%cNon so perché tu stia leggendo qui, ma non c'è molto di interessante.

  Se vuoi sapere di più su questo sito web guarda su questo profilo
  GitHub dove ho rilasciato il codice sorgente: https://github.com/davcri/kaibano-dizionario

  Se vuoi sapere di più su di me: https://davcri.github.io/about/

Grazie per aver visitato il sito, a presto!`,
    "font-family: sans-serif; font-size: 1.25em"
  );
  console.groupEnd();
}
</script>

<style scoped>
.muted {
  font-size: 0.8em;
  color: var(--muted);
}

.footer {
  gap: 1.2em;
  margin-top: 1.5em;
}

.muted a {
  color: var(--muted)
}

.muted a:hover {
  color: var(--link-muted);
}
</style>
