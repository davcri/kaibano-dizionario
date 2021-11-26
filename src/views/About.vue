<template>
  <!-- <img
    src="../assets/logo400x400.jpg"
    width="70"
    height="70"
  /> -->
  Il <b>dizionario Kaibano - Italiano</b> è un'applicazione web nata per la
  preservazione e diffusione della lingua Kaibana. <br />

  <h2>Cos'è il Kaibano?</h2>
  <p>
    Una lingua inventata da Gianluca Loggia, più comunemente conosciuto come
    <b>Ualone</b>. Potete seguire Ualone principalmente su
    <a href="https://www.twitch.tv/ualone">twitch.tv/ualone</a>.
  </p>

  <h2>IL DIZIONARIO È UFFICIALE?</h2>
  <p>
    Il dizionario è curato dalla community e non è attualmente riconosciuto come
    un'opera ufficiale.
  </p>

  <h2>Esistono copie cartacee?</h2>
  <p>
    Questo dizionario è disponibile esclusivamente in formato digitale. Siete
    comunque liberi di scaricarne il contenuto e riprodurlo su qualsiasi medium
    desiderato.
  </p>

  <h2>Voglio contribuire, come faccio?</h2>
  <p>
    Fantastico! Puoi modificare
    <a
      href="https://docs.google.com/spreadsheets/d/16MXvgyvb-NFViSVvF7ZsNnkjDRzIvdi94DkZYuyWj9Y/edit?usp=sharing"
      >questo documento</a
    >
    e poi richiedere un aggiornamento sul
    <a href="https://t.me/joinchat/C_SyURQCsXCw5U8dBZB2Uw"
      >gruppo Telegram di Ualone</a
    >
    (puoi taggare @davcri) oppure inviando una mail
    <a href="mailto:davcri91@gmail.com">qui</a>. Si accettano volentieri anche
    bug report o idee per miglioramenti!
  </p>

  <h2>Aggiornamenti</h2>
  <Post1 />

  <!-- <h2>RINGRAZIAMENTI</h2>
  <p>
  </p> -->
  <!-- <h2 style="margin-top: 1em">Crediti</h2>
  <p>
      <ul>
          <li>Frontend development: Davide Cristini</li>
      </ul>
  </p> -->
</template>

<script>
import Post1 from "./about/Post1.vue";
export default {
  components: { Post1 },
};
</script>

<style scoped>
h2 {
  line-height: 1.2em;
  margin-bottom: 0.2em;
}
</style>
