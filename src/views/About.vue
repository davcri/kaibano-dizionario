<template>
  <!-- <img
    src="../assets/logo400x400.jpg"
    width="70"
    height="70"
  /> -->
  <div class="info">
    <p>
      Il <b>dizionario Kaibano - Italiano</b> è un'applicazione web nata per la
      preservazione e diffusione della lingua Kaibana. <br />
    </p>

    <h2>Cos'è il Kaibano?</h2>
    <p>
      Una lingua inventata da Gianluca Loggia, più comunemente conosciuto come
      <b>Ualone</b>. Potete seguire Ualone principalmente su
      <a href="https://www.twitch.tv/ualone">twitch.tv/ualone</a>.
    </p>

    <h2>IL DIZIONARIO È UFFICIALE?</h2>
    <p>
      Il dizionario è curato dalla community e non è attualmente riconosciuto
      come un'opera ufficiale.
    </p>

    <h2>Esistono copie cartacee?</h2>
    <p>
      Questo dizionario è disponibile esclusivamente in formato digitale. Siete
      comunque liberi di scaricarne il contenuto e riprodurlo su qualsiasi
      medium desiderato.
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
      <a href="mailto:davcri91@gmail.com">qui</a>. <br />
      <br />
      Si accettano volentieri anche bug report o idee per miglioramenti! <br />
      Il codice di questo sito è rilasciato con licenza open source e
      consultabile <a :href="repository">qui</a>.
    </p>

    <h2>Aggiornamenti</h2>
    <Post1 />

    <h2>RINGRAZIAMENTI</h2>
    <ul>
      <li>
        <b> <a href="https://iamgabronicolosi.carrd.co/">Gabro Nicolosi</a></b
        >: per aver concesso di prendere ispirazione dalle sue fantastiche
        grafiche.
      </li>
    </ul>
  </div>
</template>

<script>
import Post1 from "./about/Post1.vue";

export default {
  components: { Post1 },
  data() {
    return {
      repository: REPOSITORY,
    };
  },
};
</script>

<style scoped>
h2 {
  line-height: 1.2em;
  margin-bottom: 0.2em;
}

div.info {
  max-width: 75ch;
}
</style>
