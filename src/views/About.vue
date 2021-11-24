<template>
  <!-- <img
    src="../assets/logo400x400.jpg"
    width="70"
    height="70"
  /> -->
  Il <b>dizionario Kaibano - Italiano</b> è un'applicazione web nata per la preservazione e diffusione
  della lingua Kaibana. <br /> 

  <h2>Cos'è il Kaibano?</h2>
  <p>
    Una lingua inventata da Gianluca Loggia, più comunemente conosciuto come <b>Ualone</b>.
  </p>

  <h2>IL DIZIONARIO È UFFICIALE?</h2>
  <p>
    Non si tratta di un'opera ufficiale. Cerchiamo comunque di verificare che le informazioni riportate siano corrette. 
  </p>

  <h2>Esistono copie cartacee?</h2>
  <p>
    Questo dizionario è disponibile esclusivamente in formato digitale. 
    Siete comunque liberi di scaricarne il contenuto e riprodurlo
    su qualsiasi medium desiderato.
  </p>

  <h2>Voglio contribuire, come faccio?</h2>
  <p>Fantastico! Puoi modificare
    <a href="https://docs.google.com/spreadsheets/d/16MXvgyvb-NFViSVvF7ZsNnkjDRzIvdi94DkZYuyWj9Y/edit?usp=sharing">questo documento</a> 
    e poi richiedere un aggiornamento sul <a href="https://t.me/joinchat/C_SyURQCsXCw5U8dBZB2Uw">gruppo Telegram di Ualone</a> 
    (puoi taggare @davcri) 
    oppure inviando una mail <a href="mailto:davcri91@gmail.com">qui</a>. 
    Si accettano volentieri anche bug report o idee per miglioramenti!
  </p>
  
  <h2>Aggiornamenti</h2>
  <Post1 />
  
  <h2>INFO TECNICHE</h2>
  <p>
    <ul>
      <li><b>Ultimo aggiornamento</b>: {{ dictionaryLastUpdate }}</li>
      <li><b>Versione webapp</b>: v{{appVersion}}</li>
      <li><b>Librerie</b>: Vue3, Vite, Pinia, Papa-parse</li>
      <li><b>Codice sorgente</b>: in arrivo</li>
    </ul>
  </p>

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
import { dictionaryStore } from "../stores/dictionary";
import Post1 from "./about/Post1.vue";

export default {
  data() {
    return {
      dictionaryLastUpdate: new Date(BUILD_TIMESTAMP).toUTCString(),
      appVersion: APP_VERSION,
    };
  },
  setup() {
    return {
      dictionary: dictionaryStore()
    };
  },
  components: { Post1 }
}
</script>