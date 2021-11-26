<template>
  <p class="muted" style="margin-top: 2em">Made by Crystal Bit (aka davcri)</p>
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
  GitHub dove rilascerò il codice sorgente: https://github.com/davcri
  
  Se vuoi sapere di più su di me: https://davcri.github.io/about/
  
Grazie per aver visitato il sito, a presto!`,
    "font-family: sans-serif; font-size: 1.25em"
  );
  console.groupEnd();
}
</script>

<style>
.muted {
  font-size: 0.8em;
  color: var(--muted);
}

p.muted a {
  color: #9c7f91;
}

p.muted a:hover {
  color: var(--link-muted);
}
</style>
