import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const Cantico = () => {
  const [cantico, setCantico] = useState(null);
  const { id } = useParams(); // Otteniamo l'ID dalla URL

  // Dati di esempio per i cantici
  const canticiData = [
    {
      id: 1,
      autore: "900",
      titolo: "Leone della tribu' di Giuda",
      testo:
        "Leone della tribù di Giuda\nHai aperto una porta per me\nE nessuno potrà chiuderla\nPerché tu sei il Re dei Re\n\nLeone della tribù di Giuda\nHai aperto una porta per me\nE nessuno potrà più chiuderla\nPerché tu sei il Re dei Re\n\nEd entrerò\nE la tua gloria vedrò\nEd entrerò\nEd un risveglio avrò\nLa mia vita si incendierà per te\nE brucerò di un amore intenso per te\n(Oh sì per te Gesù)\n\nTu sei un fuoco consumante\nL'unico Dio eterno\nAi tuoi piedi mi prostro tremante\nGridando che sei il mio Re\n\nTu sei un fuoco consumante\nL'unico Dio eterno\nAi tuoi piedi mi prostro tremante\nGridando che sei il mio Re\n\nProclamerò che solo tu sei il Signor\nAdorerò baciando i piedi tuoi\nLa mia vita si incendierà per te\nE brucerò di un amore intenso per te\n(Halleluia)\n\nLeone della tribù di Giuda\nHai aperto una porta per me\nE nessuno potrà più chiuderla\nPerché tu sei il Re dei Re\n\nEd entrerò\nE la tua gloria vedrò\nEd entrerò\nEd un risveglio avrò\nLa mia vita si incendierà per te (ooh)\nLa mia vita si incendierà per te\nLa mia vita si incendierà per te\nE brucerò, e brucerò, e brucerò\nE brucerò, e brucerò, e brucerò\nE brucerò di un amore intenso per te\n\nOoh brucerò, brucerò\nBrucerò da te Gesù\nHalleluia, halleluia\nLeone della tribù di Giuda",
    },
    {
      id: 2,
      autore: "901",
      titolo: "Era Lì",
      testo:
        "Era lì, per pagare il prezzo dei miei peccati\nMentre tutti ridevan di Lui\n\nEra lì, quando il sangue scendeva\nDalla Sua fronte\nEra lì, mentre il sangue di Abele\nGridava vendetta\nIl Suo sangue grida amore\n\nGesù era lì, che soffriva con amore\nEra lì, non pensava al Suo dolore\nGesù era lì, con lo sguardo verso il cielo\nPadre mio\n\nEra lì, sofferente in croce\nCon amore pregava, era lì\nPadre mio perdona loro\nPerché non sanno quel che essi fanno\n\nUna sola espressione uscì dal Suo cuore\nPadre mio tutto è compiuto\n\nGesù era lì, che soffriva con amore\nEra lì, non pensava al Suo dolore\nGesù era lì, con lo sguardo verso il cielo\nPadre mio\n\nGesù era lì, che soffriva con amore\nEra lì, non pensava al Suo dolore\nGesù era lì, con lo sguardo verso il cielo\nPadre mio",
    },
    {
      id: 3,
      autore: "250",
      titolo: "In Gesu' trovai l'amico",
      testo:
        "In Gesu' trovai l'amico\nChe è tutto fedeltà,\nLa sorgente di bellezza\nE dell'amor:\nEgli porta la bandiera\nDi grazia e di beltà,\nIl compiuto desiderio del mio cuor.\nIn tutte quelle prove\nChe incontro sul cammin\nLa Sua mano\nMi sostiene con virtu':\n(Alleluia) Il bel Giglio della Valle,\nLa Stella del mattin\nE' Colui dal Nome dolce di Gesu'.\n\nHa portato i miei dolori,\nL pena del mio mal.\nIl Suo dorso lacerato fu per me;\nCinto di crudeli spine,\nFu il capo Suo regal\nE salvezza ottenni\nPer la Sua merce'.\nAnche se son tentato\nProseguo fino al fin,\nChè con Cristo\nGiungero' un dì lassù\n(Alleluia) Il bel Giglio della Valle,\nLa Stella del mattin\nE' Colui dal Nome dolce di Gesu'.\n\nCon me la Sua presenza\nNon farà mai mancar\nMi protegge d'ogni lato notte e dì.\nSotto l'ombra del Suo amore\nMi fa ricoverar\nE gioir per la grand'opera ch'Ei compi'.\nPoi quando sù nel cielo,\nDavanti al Tron Divin,\nVò goderLo nei diletti della Valle,\n(Alleluia) Il bel Giglio della Valle,\nLa Stella del mattin\nE' Colui dal Nome dolce di Gesu'.",
    },
    {
      id: 4,
      autore: "559",
      titolo: "Camminando sul sentiero",
      testo:
        "Camminando sul sentiero\nChe han percorso i Tuoi fedel\nTutti ci ritroveremo\nDove eterno slende il sol\n\nCoro I:\nE quando il ciel dei Santi Tuoi\nLa grande schiera arriverà\nO Signore, son sicuro\nChe c'è un posto anche per me!\n\nC'è chi dice che la vita\nSia tristezza, sol dolor\nMa io so che viene il giorno\nQuando tutto cambierà.\n\nCoro II:\nE quando il sol si spegnerà\nE quando il sol si spegnerà\nO Signore, son sicuro\nD'esser sempre insieme a Te.\nE quando in ciel risuonerà\nLa tromba che ci chiamerà\nO Signore, son sicuro\nChe c'è un posto anche per me!",
    },
    {
      id: 5,
      autore: "628",
      titolo: "Qual Letizia",
      testo:
        "Qual letizia, se con noi Gesu'\nS'accompagna nel cammin quaggiù\nEi ci guida per la man\nSulle vette, giù nel pian,\nQual letizia, camminar con Lui!",
    },
    {
      id: 6,
      autore: "90",
      titolo: "A Pentecoste",
      testo:
        "A Pentecoste scese sui fedel\nIl Santo Spirito divin,\nCon la pienezza e virtu' del ciel\nDi Dio annunciarono l'amor.\nAndarono nel mondo a predicar,\nLa verità compunse i cuor.\nMigliaia accettaron l'Evangel,\nProvati, vinsero i dolor.\n\nCoro:\nSpirito Santo, oscura è l'or,\nRisveglia tutti\nRiempi, infiamma i cuor!\nOpra tra noi e l'Evangel,\nNella pienezza,\nPotremo proclamar.\n\nIl giusto per la sua fé vivrà\nFu il motto che fugò l'error\nE come fuoco allor la verità,\nSi sparse ovunque, divampò.\nPoi Dio la Pentecoste rinnovò\nE gran risvegli mandò ancor,\nQuesta potenza, oggi, noi bramiam,\nScendi su noi, Consolator!\n\nCoro:\nSpirito Santo, oscura è l'or...,",
    },
    {
      id: 7,
      autore: "502",
      titolo: "Gesu' dolce musica",
      testo:
        "Gesu', dolce musica al mio cuor;\nGesu', solo Tu non cambi mai;\nGesu', colt Tuo sangue hai lavato\nil peccato che era dentro me.\n\nGesù, così bello è amare Te;\nGesù, odi sempre il mio pregar;\nGesù, quando cado Tu se lì,\nDolcemente, mi rialzi Tu.\n\nGesù, Tu dal cielo tornerai;\nGesù, la Tua chiesa rapirai;\nGesù, che gran festa allor sarà,\nSempre insieme per l'eternità. (bis)",
    },
    {
      id: 8,
      autore: "902",
      titolo: "Dio dell'Impossibile",
      testo:
        "Quando tutto dice: No\nLa Tua voce mi incoraggia a proseguire\nQuando tutto dice: No\nSembra che il mare non si possa aprire\n\nSo che non sono solo\nE quel che dici su di me\nNon potrà mai cambiar\nRestami accanto oh Dio\nE compi in me la Tua volontà\n\nIl Dio dell'impossibile\nLui non rinuncia a me\nLa Sua destra mi sostiene\nE mi fa vincere\n\nIl Dio dell'impossibile\nLui non rinuncia a me\nLa Sua destra mi sostiene\nE mi fa vincere\nIl Dio dell'impossibile\n\nQuando tutto dice: No\nLa Tua voce mi incoraggia a proseguire\nQuando tutto dice: No\nSembra che il mare non si possa aprire\n\nSo che non sono solo\nE quel che dici su di me\nNon potrà mai cambiar\nRestami accanto oh Dio\nE compi in me la Tua volontà\n\nIl Dio dell'impossibile\nLui non rinuncia a me\nLa Sua destra mi sostiene\nE mi fa vincere\n\nIl Dio dell'impossibile\nLui non rinuncia a me\nLa Sua destra mi sostiene\nE mi fa vincere\n\nIl Dio dell'impossibile\nLui non rinuncia a me\nLa Sua destra mi sostiene\nE mi fa vincere\n\nIl Dio dell'impossibile\nLui non rinuncia a me\nLa Sua destra mi sostiene\nE mi fa vincere\n\nIl Dio dell'impossibile\nIl Dio dell'impossibile",
    },
    {
      id: 9,
      autore: "508",
      titolo: "Per Adorarti",
      testo: `Quando vedo la tua santitá
Quando ammiro la Tua beltà
Quel ch'è intorno a me diventa ombra
Nella luce Tua

Quando ho trovato la via al Tuo cuore
Tu mi hai dato gioia vero, amore
Ed io scopro la vera ragione
Per cui io vivo

Per adorarti Signore
Per adorarti Signore
La ragione perché io vivo
Per adorarti Signore

È adorarTí Signor. (bis)`,
    },
    {
      id: 10,
      autore: "145",
      titolo: "Grande sei Tu",
      testo: `O mio Signor!
Allor che con rispetto
Io miro il ciel
Che fece il Tuo voler,
E lo splendor di stelle
O sento il tuono.
E il mondo inter
Che narra il Tuo poter.

Un canto il cuor
Innalza a Te, Signor:
Grande sei Tu!
Grande sei Tu!
Un canto il cuor
Innalza a Te, Signor:
Grande sei Tu!
Grande sei Tu!

Allor che vo'
Vagando su pei monti
E degli uccel
Io sento il cinguettar,
E vedo giù
Gl'immensi prati verdi,
E d'un ruscel
Ascolto il mormorar.

un canto il cuor...

E nel pensar
Che il Salvator qui in terra
Venne a soffrir
Per l'uomo peccator.
Ch'Egli portò
Sul Golgota i miei mali
E che morì
Per darmi pace e amor.

un canto il cuor...

Quando Gesù
Ritornerà dal cielo
E gioia appieno
Mi darà lassù;
Mi prostrerò
Davanti al Suo bel trono
Per proclamar:
Signor, grande sei Tu!

un canto il cuor...`,
    },
    {
      id: 11,
      autore: "903",
      titolo: "Maestà",
      testo: `Sono qui
Umilmente vengo a Te
Coprimi con la grazia Tua
Sono qui
Ero schiavo senza Te
Tu mi hai dato la libertà

Troverò
Il vero amore solo in Te
Perché per primo Tu
Hai amato me

Maestà, maestà
Ti dono tutto quello che ho
Dalle Tue mani vita riceverò

Sono qui
Il perdono ho avuto in Te
Perdono anch'io chi mi ferirà
Resto qui
So che sei vicino a me
Il Tuo fuoco mi santificherà

Troverò
Il vero amore solo in Te
Perché per primo Tu
Hai amato me

Maestà, maestà
Ti dono tutto quello che ho
Dalle Tue mani vita riceverò

Maestà, maestà
Per sempre canterò del Tuo amor
In presenza della Tua Maestà
Maestà`,
    },
    {
      id: 12,
      autore: "779",
      titolo: "Il suo nome è Gesu'",
      testo: `Se tu cerchi un amico vero
Il Suo nome è Gesù
Che stia sempre al tuo fianco davvero
Non ti lasci mai più
Se ti senti afflitto e sei rimasto da solo
E non trovi la forza per andare avanti
Non aver più paura è il tuo amico Gesù

Se hai bisogno di pace vera
Puoi trovarla in Gesù
Apri il cuore e la senti ora
E non temerai più
Anche se stai passando per travagli e problemi
E non vedi ancora una via d'uscita
Lascia a Lui ogni peso è il tuo amico Gesù

Il suo nome è Gesù
Solo Lui ti può dare cosa cerca il tuo cuore
Il Suo nome è Gesù
Solo in Lui puoi trovare la speranza e l'amore
È vicino a te
Egli ti sta parlando credi alle Sue parole
Il Suo nome è Gesù 
Puoi invocarLo anche tu 

Puoi amarLo anche tu
Puoi vederLo anche tu
Puoi sentirLo anche tu
Il Suo nome è Gesù`,
    },
    {
      id: 13,
      autore: "904",
      titolo: "Usami",
      testo: `Eccomi, Signor, tu mi conosci
Cambia questo cuore mio
Trasformami conforme alla parola
E riempimi finché si trovi solo te in me
E poi usami Signor, usami

Come un faro nella notte
Come ponte sopra l'acqua
Come ombra nel deserto
Freccia che va a segno
Voglio essere usato
Come piace a te signore
E in ogni tempo dove andrò
Io dono a te la vita mia
Usami Signor, usami

Eccomi, rinnovami
Trasformami, riempimi 
E usami.`,
    },
    {
      id: 14,
      autore: "1 Raccolta",
      titolo: "Dio vengo a Te",
      testo: `Dio vengo a te 
Mi presento al tuo trono così
Tutto ciò che mi agita lo lascio qui

Dio vengo a Te
il mio cuore lo spando ai tuoi piè
Togli tutto ciò che mi separa da Te

Coro: Le mie ansie non ti son nascoste
Tu hai cura di Me
Fiducioso lo sguardo a te volgo
e mi infondo su Te

Dammi un nuovo cuor 
Tutto per Te
Metti un nuovo canto dentro Me

Riempimi col tuo Spirito
Sei Tu
La Lode del mio cuor`,
    },
    {
      id: 15,
      autore: "2 Raccolta",
      titolo: "Mori' per me",
      testo: `Morì per me, morì per me
Gesù, Gesù, morì per me.

Risuscitò, risuscitò
Gesù, Gesù, risuscitò.

Ei vive in me, Ei vive in me
Gesù, Gesù, Ei vive in me.

Ritornerà, ritornerà
Gesù, Gesù, ritornerà.

Alleluia, Alleluia
Gesù, Gesù, Alleluia.`,
    },
    {
      id: 16,
      autore: "3 Raccolta",
      titolo: "Davanti Al tuo Trono",
      testo: `Davanti al Tuo trono
Mi presento Signor
Nonostante i miei limiti
E la pena del mio cuor

La Tua mano è stesa su di me
E del bene mi farà
E per questo che Ti chiedo
Accarezza il mio cuor

Davanti al Tuo trono
Mi presento Signor
Nonostante i miei limiti
E la pena del mio cuor

La Tua mano è stesa su di me
E del bene mi farà
E per questo che Ti chiedo
Accarezza il mio cuor

Davanti al Tuo trono
Mi presento Signor
Nonostante i miei limiti
E la pena del mio cuor

La Tua mano è stesa su di me
E del bene mi farà
E per questo che Ti chiedo
Accarezza il mio cuor

E per questo che Ti chiedo
Accarezza il mio cuor

E per questo che Ti chiedo
Accarezza il mio cuor`,
    },
    {
      id: 17,
      autore: "4 Raccolta",
      titolo: "Salmo 92",
      testo: `E' buono celebrare il nostro Re
Salmeggiare all’ Altissimo
Proclamare la mattina la Tua benignità
E la sera la Tua fedeltà.

Al suono del saltéro e dell’arpa
Io canto giubilando in Te
Perché Tu oh Signor mi rallegri il cuor
Per le opere grandi che Tu fai.`,
    },
    {
      id: 18,
      autore: "5 Raccolta",
      titolo: "Degno sei D'onore",
      testo: `Degno sei d’onore,
T’adoriam, Gesù,
Noi alziam le nostre mani,
Noi innalziamo il nome Tuo.
Degno sei d’onore,
T’adoriam, Gesù,
Noi alziam le nostre mani,
Noi innalziamo il nome Tuo.

Grande sei Tu, grandi miracoli Tu fai,
Nessun altro è come Te,
Nessun altro è come Te.
Grande sei Tu, grandi miracoli Tu fai,
Nessun altro è come Te,
Nessun altro è come Te.

Finale:
Grande sei TU`,
    },
    {
      id: 19,
      autore: "6 Raccolta",
      titolo: "Lodino gli Angeli",
      testo: `Lodino gli angeli, lodino il ciel,
Ogni creatura celeste lassù,
Tutto lodi Dio.

Lodino gli angeli, lodino il ciel,
Ogni creatura celeste lassù,
Tutto lodi Dio.

Grande in forza, grande in gloria
Grande in grazia, Re del cielo...
In battaglia, in prodigi
Grande in Sion
È della terra il Re...

Lodino gli astri lucenti del ciel,
Lodino il mare e la terra quaggiù,
Tutto lodi Dio.

Grande in forza, grande in gloria
Grande in grazia, Re del cielo...
In battaglia, in prodigi
Grande in Sion

È della terra il Re...
Grande in forza, grande in gloria
Grande in grazia, Re del cielo...
In battaglia, in prodigi
Grande in Sion
È della terra il Re...`,
    },
    {
      id: 20,
      autore: "7 Raccolta",
      titolo: "Sei Signor prezioso",
      testo: `Sei Signor, prezioso per me
Sei Signor, prezioso per me
 

E ti amo, si ti amo,
Perchè tu primo amasti me!
 

Sei Signor, benigno per me
Sei Signor, benigno per me
 

E ti amo, si ti amo,
Perchè tu primo amasti me!
 

Sei Signor, fedele per me
Sei Signor, fedele per me


E ti amo, si ti amo,
Perchè tu primo amasti me!`,
    },
    {
      id: 21,
      autore: "8 Raccolta",
      titolo: "Solo per la Grazia",
      testo: `Solo per grazia possiamo
Venire al tuo trono, Signor
Non è per quel che facciamo
E' per il tuo sangue Gesù.
Alla tua dolce presenza
Ci chiami, Signor
Per la tua grazia ora entriamo
Veniamo davanti a te
Veniamo davanti a te.

Se i miei peccati guardassi Tu, Signor
Non potrei mai presentarmi davanti al tuo tron
Soltanto per la tua grazia io vengo a te
Tu mi hai lavato col sangue dell'Agnel.

Solo per grazia possiamo
Venire al tuo trono, Signor
Non è per quel che facciamo
E' per il tuo sangue Gesù.
Alla tua dolce presenza
Ci chiami, Signor
Per la tua grazia ora entriamo
Veniamo davanti a te
Veniamo davanti a te.

Se i miei peccati guardassi Tu, Signor
Non potrei mai presentarmi davanti al tuo tron
Soltanto per la tua grazia io vengo a te
Tu mi hai lavato col sangue dell'Agnel.

Solo per grazia possiamo
Venire al tuo trono, Signor
Non è per quel che facciamo
E' per il tuo sangue Gesù.
Alla tua dolce presenza
Ci chiami, Signor
Per la tua grazia ora entriamo
Veniamo davanti a te
Veniamo davanti a te.
Veniamo davanti a te.
Veniamo davanti a te.`,
    },
    {
      id: 22,
      autore: "9 Raccolta",
      titolo: "Tua Maestà",
      testo: `Re dei re, Maestà,
Dio del ciel, vivente in me
Caro Salvator, amico ver
Mio liberator, tutto Tu sei
Tutto di me si prostra al Tuo tron

Tua Maestà, noi adoriam
Noi ci prostriam davanti a Te
Vesti reali non meritiam
Viviamo per servirTi, o Re!

La terra e il ciel adoran Te
Eterno amor, Tu sei il fedel
Ci hai fatti sacerdoti e re
Portando peccatori al trono Tuo
Tutto di me grida lode a Te

Tua Maestà, noi adoriam
Noi ci prostriam davanti a Te
Vesti reali non meritiam
Viviamo per servirTi, o Re!

Tua Maestà, noi adoriam
Noi ci prostriam davanti a Te
Vesti reali non meritiam
Viviamo per servirTi, o Re!

Tua Maestà, noi adoriam
Noi ci prostriam davanti a Te
Vesti reali non meritiam
Viviamo per servirTi, o Re!

Tua Maestà, noi adoriam
Noi ci prostriam davanti a Te
Vesti reali non meritiam
Viviamo per servirTi, o Re!
Viviamo per servirTi, o Re!
Viviamo per servirTi, o Re!`,
    },
  ];

  useEffect(() => {
    // Troviamo il cantico corrispondente all'ID
    const canticoTrovato = canticiData.find((c) => c.id === parseInt(id));
    setCantico(canticoTrovato);
  }, [id]);

  if (!cantico) {
    return <div>Caricamento...</div>;
  }

  const formatTesto = (testo) => {
    const strofe = testo.split("\n\n");
    return strofe.map((strofa, index) => (
      <div key={index}>
        {strofa.split("\n").map((riga, rigaIndex) => (
          <p key={rigaIndex}>{riga}</p>
        ))}
        {index < strofe.length - 1 && (
          <p className="text-left text-neutral-300">-</p>
        )}
      </div>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="p-6 text-left max-w-4xl w-full mx-auto">
        <h2 className="text-2xl font-extrabold text-neutral-700 mb-4">
          {cantico.titolo}
        </h2>
        <div className="mt-6">
          <div className="p-4 bg-lime-950/25 bg-opacity-80 shadow-lg rounded-xl">
            {formatTesto(cantico.testo)}
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Cantico;
