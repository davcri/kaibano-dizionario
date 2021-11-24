let a = `
Abborfato: Rotto
accan&#249;izit: Accaniti
ai&#242;to: Aiuto
Al finale: Alla fine
&#224;lur: Allora
&#224;lveril: Alberi
Appare: Appare
A&#249;st&#242;z: Auto
Assahara: Assai
avviari: Cominciare
Bart&#224;iza: Partita
be&#236;coli: Veicoli
Bist&#242;la: Pistola
Bombola a mano: Granata a frammentazione
B&#242;rfi: Pugni
bordovalle: bordello
C&#224;lvecio: Calcio
Car&#224;ffa: Testa
Caraibi: Ciao
Catt&#224;izot: Comprato
Chiedere: chir&#232;der&#242;z
Cerebellule: Cervello
Comori&#224;user: Comodino
Complimenphis: Complimenti
Consolide: Console
Criptozoologia: Cript&#224;uzo&#249;log&#236;a
Definitivamemphis: Definitivamente
Degna: Piena
d&#233;ribel: Deve
Difficoltade: Difficolt&#224;
Div&#224;uzet: Divano
d&#242;rdi: droidi
Everal: erba, edera
f&#224;nzo: fan
Fapto: Fatto, avvenimento
F&#224;rgelit: Facile
F&#224;umet: fumetto
Felige: Felice
festeggi&#224;izot: Festeggiato
Fet&#249;izot: Putzy
Forc&#236;le: Fucile
Forc&#236;le a bombola: Fucile a pompa
Fr&#224;neu: Frana
Froge: f*ocio
Gar&#224;sce: Casse
Garnosc&#232;vo: Conoscevo
Garrafito: Capito
G&#232;mini: Uomini, persone
G&#232;rova: Giro
Giapanise: Giapponese
Gi&#242;rifard: Joystick
Gnapp&#224;ri: Cogliere
Gu&#224;gli: Ragazzi
Guglie: Palle
Karaffa: Kaiba
karaffiano: Kaibano
karaffiani: Kaibani
Lib&#232;llulo: Livello
Liepto: Letto
Malami&#232;nti: Malviventi
Manghi: Manga
Mars&#236;rtch: Massiccio, figo
Matt '92: Matt '92 ( XD )
Mense: Mese
Micr&#242;fonot: Microfono
Morimento: Momento
Mort&#224;l: mortale
M&#242;zega: Musica
&#242;get&#249; aerial non conosciut&#242;: Oggetto volante non identificato
Ona: Una
Onl&#236;nea: Online
Ottimo Falconi: Ottimo
P&#224;me: Viso (riferito ai lineamenti)
Par&#224;ccia: Faccia
par&#224;ule: Manzione/ Parole (da definire)
P&#224;ro di l&#232;mini a vott&#224;te di cal&#242;r: Visore termico
P&#224;ro di l&#232;mini per la nopte: Visore notturno
P&#232;rcio: Accendo
Perc&#232;ri: PC
perfezionari: Perfezionari
P&#232;jo: Peggio
Persepp&#232;ri: PSP
Personami: personaggi
personame: personaggio
Pesce: pesce, nel senso di brutto
pilot&#224;ri: pilotare
Pogn&#224;le: Pugnale
Poss&#224;ide: Possiede
Probl&#224;imi: Problemi
Quapto: Quattro
R&#224;izet: Risata/e
Ricapitolazi&#242;n: Ricapitolazione
Redazi&#224;user: redazione
Saracca: Casa
scagliabombole: Lancia granate
Scaribalca: scavalca
Scaturivo: Andavo
Schiapt&#224;re: Rompere
Schi&#224;riba: D&#224;, riempie
Seji: 6
Sens&#224;uri di movimentazi&#242;n: Sensore di movimento
S&#232;rge: Sedie
Serpe: Sempre
sezi&#224;user: sezione
Siage: Piace
Sic&#224;ri: Sigari
Sideosiuorghi: Videogiochi
Sirgua: Lingua
Siuorg&#224;rinat: Games Radar
Siuorgo: Gioco
Siuorni: Giorni
Soluzi&#242;n: Soluzione
Sorb&#236;to: Avuto
Sorfici&#224;lis: Ufficiale
Sorgiunto: Arrivato
S&#242;rinat: Sonar
Sostanzialmemphis: Sostanzialmente
Spetr&#249;: Fantasma
Splendidamenphis: splendidamente
Stan&#242;pte: Stanotte
StarB&#224;rzo: Star Wars
Steji Garf&#242;iton: Colei
St&#232;veriol: Stereo
Stot&#224;izat: Spenta
St&#242;izot: Spengo
Stuji Garf&#242;iton: Colui
Suggerivano: Suggerivano, dicevano, consigliavano
Sulottimo: solamente ottimo
Suorgato: Sognato
Su&#242;rgo: Sogno
Suorgo: Sonno
Tab&#232;llo: Tavolo
T&#224;nmt&#242;: Tanto
Telev&#236;sio: Televisore
Traduzi&#242;n: Traduzione
trapta: Tratta
Trecibel: tre
V&#224;gis: Vai
Vibrat&#249;ri di prossimitade: Sensore di prossimit&#224;
Viedo: Video
Vocabolame: Vocabolario`;

const accented = {
  "&#249;": "ù",
  "&#242;": "ò",
  "&#224;": "à",
  "&#236;": "ì",
  "&#232;": "è",
  "&#233;": "é",
};

Object.keys(accented).forEach((asciiCode) => {
  const vowel = accented[asciiCode];
  let re = new RegExp(`${asciiCode}`, `ig`);
  a = a.replace(re, vowel);
});

let s = "";
a.split("\n").forEach((line) => {
  const tm = line.split(":");
  const o = {
    it: tm[1],
    k: tm[0],
  };
  s += o.it + "\n";
});
console.log(s);
