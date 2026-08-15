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
      <br />
    </p>

    <p>
      Qui una clip dove Ualone parla delle origini del Kaibano.
    </p>

    <Spacer size="lg" />
    
    <iframe
      :src="twitchUrl"
      frameborder="0" 
      allowfullscreen="true" 
      scrolling="no" 
      height="378"
      width="620"></iframe> 

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

    <h2>Il dizionario è ufficiale?</h2>
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

<script setup>
import { computed } from 'vue';

const twitchUrl = computed(() => {
  const parent = import.meta.env.VITE_TWITCH_PARENT;
  return `https://player.twitch.tv/?video=2832786569&time=1h35m15s&parent=${parent}`; 
});
// For Vue CLI (uncomment below and comment above if using CLI):
// const parent = process.env.VUE_APP_TWITCH_PARENT;
</script>

<script>
import Post1 from "./about/Post1.vue";
import Spacer from "../components/Spacer.vue";

export default {
  components: { Post1, Spacer },
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

/* Post styles */
p.written-by {
  font-size: 0.8em;
  color: hsla(0, 0%, 83%, 0.9);
  font-weight: 100;
}
div.post {
  border-left: solid var(--violet-highlight-semitransparent) 0.1rem;
  padding-left: 1.25rem;
  margin-left: 0.1rem;
  padding-right: 1rem;
}
@media screen and (min-width: 480px) {
  div.post {
    padding-left: 1.5rem;
    margin-left: 0.1rem;
    padding-right: 1.5rem;
  }
}
</style>
