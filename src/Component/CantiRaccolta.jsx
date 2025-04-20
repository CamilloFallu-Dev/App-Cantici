import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const CantiRaccolta = () => {
  const [cantico, setCantico] = useState(null);
  const { id } = useParams(); // Otteniamo l'ID dalla URL

  // Dati di esempio per i cantici
  const raccolta = [
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
    {
      id: 23,
      autore: "10 Raccolta",
      titolo: "In un mondo oscuro",
      testo: `In un mondo oscuro e buio,
Una "Luce" venne un dì,
Con parole d'amore e perdono
Venne l'uomo a salvar.

Il Suo aspetto, il Suo volto,
Non abbiamo conosciuto,
Ma le Sue parole
Ruppero le tenebre,
Toccando il cuor degli uomini!

È Gesù il Suo nome tra le genti,
In Lui si incontrano l'età!
È Gesù il Divino Redentore,
E il Suo amor può salvar!

La Sua luce splende ancora,
Può risplendere su te,
Dal peccato ti vuol liberare,
E darti vita eterna.

È Gesù il Suo nome tra le genti,
In Lui si incontrano l'età!
È Gesù il Divino Redentore,
E il Suo amor può salvar!

Il Suo amor può Salvar!
Il Suo amor può Salvar!
Il Suo amor può Salvar!
Il Suo amor può Salvar!`,
    },
    {
      id: 24,
      autore: "11 Raccolta",
      titolo: "Gesu' ti ama",
      testo: `Noi abbiamo conosciuto
l'amore di Cristo
Da quando Lui vive in noi.
Noi abbiamo conosciuto
l'amore di Cristo,
Di Cristo Gesù, il Signor

Gesù ti ama
e vuole la tua felicità
Gesù ti chiama
per vivere nel Suo amor.

Non rifiutare la grande salvezza
Che viene da Cristo Gesù
Lui può riempire il tuo cuore
Di pace di gioia e di carità

Gesù ti ama
e vuole la tua felicità
Gesù ti chiama
per vivere nel Suo amor.`,
    },
    {
      id: 25,
      autore: "12 Raccolta",
      titolo: "Dio è vivente",
      testo: `Dio è vivente, no, non è morto!
Dio è vivente, no, non è morto!
Dio è vivente, no, non è morto!
Lo sento dentro me,
Son certo ch'Egli è qui,
Lo sento tutto intorno a me.

Io canterò, io griderò
Io canterò, io griderò: alleluia!
Quando i cieli si apriranno,
Oh, che gioia allor sarà:
Canterò, griderò: alleluia!`,
    },
    {
      id: 26,
      autore: "13 Raccolta",
      titolo: "Non mi dispiace...",
      testo: `Non mi dispiace
E non me n’è pento
Ho dato la mia vita a Gesù;
Senza il Suo amore
E la Sua potenza
Non potrei vivere più.

E dico:
Addio alla morte,
Addio al peccato,
Addio a quelle cose
Che mi tenevano giu.

E dico:
Benvenuta la vita,
Benvenuta alla gioia,
Benvenuta alla Sua presenza
Ora vivo assieme a Gesù`,
    },
    {
      id: 27,
      autore: "14 Raccolta",
      titolo: "Un giorno di festa",
      testo: `Ho trovato la vita in Gesù
Cosa posso volere di più,
Ho trovato l'amore di Dio,
La Sua luce m'illumina ognor

E fu un giorno di festa
E fu un giorno di festa
Il giorno che incontrammo Gesù
È sempre un giorno di festa
È sempre un giorno di festa
Anche oggi noi siamo con Lui.

Quanta pace ora sento nel cuor,
Che era stanco nel mondo crudel,
Quanta gioia il Signore mi dà
Nella Sua infinita bontà.

E fu un giorno di festa
E fu un giorno di festa
Il giorno che incontrammo Gesù
È sempre un giorno di festa
È sempre un giorno di festa
Anche oggi noi siamo con Lui.

Ci sostiene e ci aiuta il Signor
E ci guida dal cielo ogni dì
Su, fratelli, cantiamo di più,
Lode e gloria al Signore Gesù.

E fu un giorno di festa
E fu un giorno di festa
Il giorno che incontrammo Gesù
È sempre un giorno di festa
È sempre un giorno di festa
Anche oggi noi siamo con Lui.`,
    },
    {
      id: 28,
      autore: "15 Raccolta",
      titolo: "Noi venuiam davanti a te",
      testo: `Noi veniam davanti a Te,
cercando il volto Tuo.
Non per quello che Tu fai,
ma per ciò che Tu sei.

Allora mostraTi, mostraTi, Signor,
Nella Tua gloria
e con tutto il Tuo splendor!
Noi siamo quimdavanti a Te,
Signor.

Alleluia, Alleluia,
Alleluia, gloria a Te

Tutto (x2)`,
    },
    {
      id: 29,
      autore: "16 Raccolta",
      titolo: "Tutto ciò",
      testo: `Ho conosciuto pianto e duolo,
Nel mio domani incerto e solo,
A volte circondato dall’error,
Ma in ogni situazione,
Ho avuto una benedizione
E le prove mi hanno reso forte in Lui.

Ho visto tanti tanti luoghi,
Conosco tanti tanti volti,
Ma quante volte solo devo star,
In quella solitudine, preziosa solitudine,
comprendo che appartengo al Salvator.

Tutto ciò, tutto ciò,
Mi insegna a confidare
Soltanto nel Signore,
Tutto ciò, tutto ciò,
Mi insegna che dipendo
dal Suo amor.

Io Lo ringrazio nella valle,
Io Lo ringrazio sopra il monte,
Nelle difficoltà lodo il Signor,
Perché senza problemi,
Non saprei ch’Egli interviene,
Non saprei quel che la fede in Dio può far.

Tutto ciò, tutto ciò,
Mi insegna a confidare
Soltanto nel Signore,
Tutto ciò, tutto ciò,
Mi insegna che dipendo
dal Suo amor.

Io Lo ringrazio nella valle,
Io Lo ringrazio sopra il monte,
Nelle difficoltà lodo il Signor,
Perché senza problemi,
Non saprei ch’Egli interviene,
Non saprei quel che la fede in Dio può far.

Tutto ciò, tutto ciò,
Mi insegna a confidare
Soltanto nel Signore,
Tutto ciò, tutto ciò,
Mi insegna che dipendo
dal Suo amor.
`,
    },
    {
      id: 30,
      autore: "17 Raccolta",
      titolo: "Vieni, spirito vieni",
      testo: `Vien, Spirito vien,
      Riempici Signor
      Con la tua benedizion.
      Vien, Spirito vien,
      Riempici Signor
      Con la Tua preziosa unzion
      (x2)
      
      Tu purificami, lavami
      Rinnovami, ristorami, Signor,
      Col Tuo poter
      Rinnovami, risotrami Signor
      Voglio conoscer Te
      
      Signore, voglio conoscere Te! (x2)`,
    },
    {
      id: 31,
      autore: "18 Raccolta",
      titolo: "Osanna all'altissimo",
      testo: `Osanna, Osanna, Osanna all'Altissimo
Osanna, Osanna, Osanna all'Altissimo

Innalziamo il tuo nom
Con le lodi nel cuor
Ti esaltiamo Signore Iddio
Osanna all'Altissimo

Gloria, gloria, gloria al re dei re
Gloria, gloria, gloria al re dei re

Innalziamo il tuo nom
Con le lodi nel cuor
Ti esaltiamo Signore Iddio
Gloria al Re dei re

Osanna, Osanna, Osanna all'Altissimo
Osanna, Osanna, Osanna all'Altissimo

Innalziamo il tuo nom
Con le lodi nel cuor
Ti esaltiamo Signore Iddio
Osanna all'Altissimo

Osanna, Osanna, Osanna all'Altissimo
Osanna, Osanna, Osanna all'Altissimo

Innalziamo il tuo nom
Con le lodi nel cuor
Ti esaltiamo Signore Iddio
Osanna all'Altissimo

Innalziamo il tuo nom
Con le lodi nel cuor
Ti esaltiamo Signore Iddio
Osanna all'Altissimo

Ti esaltiamo Signore Iddio
Osanna all'Altissimo`,
    },
    {
      id: 32,
      autore: "19 Raccolta",
      titolo: "Ineffabile",
      testo: `Dalle altezze dal cielo agli abissi del mar
Il creato rivela la Tua maestà
Tra i profumi e i colori di ogni stagion
Ogni cosa creata che musica fa
Tutto esclama

Ineffabile, ammirabile
Poni le stelle nel cielo ed un nome gli dai
Infinito sei Dio
Potente, eterno
Con riverenza e umiltà
Proclamiamo chi sei
Infinito sei Dio

Chi comanda ai fulmini dove cader
E chi forma la neve nel cuore del ciel
Chi rigenera il caldo e la luce del sol
E chi manda la luna a nasconderlo un po'
Solo Tu puoi

Ineffabile, ammirabile
Poni le stelle nel cielo ed un nome gli dai
Infinito sei Dio
Potente, eterno
Con riverenza e umiltà
Proclamiamo chi sei
Infinito sei Dio
Infinito sei Dio
Infinito sei Dio

Ineffabile, ammirabile
Poni le stelle nel cielo ed un nome gli dai
Infinito sei Dio (infinito sei, infinito sei)
Potente, eterno
Con riverenza e umiltà
Proclamiamo chi sei
Infinito sei Dio

Ineffabile, ammirabile
Poni le stelle nel cielo ed un nome gli dai
Infinito sei Dio
Immutabile, incomparabile
Guardi nel fondo del cuore
E la grazia gli dai
Infinito sei Dio`,
    },
    {
      id: 33,
      autore: "20 Raccolta",
      titolo: "Dalla nascita del sol",
      testo: `Dalla nascita del sol
Fino al suo tramonto vorrò
Lodare il Signor, con tutto il cuor (x2)

Loda il Signor, lodatelo voi servitori suoi
Glorificate il creator
Benedetto è il nome Suo
Da ora in poi, e per l’eternità.`,
    },
    {
      id: 34,
      autore: "21 Raccolta",
      titolo: "Il sacrificio della Lode",
      testo: `Il sacrificio della lode
noi portiamo al Signor (x2)

Ed offriamo a te Signor
Sacrifici di grazie
Ed offriamo a te Signor
La gioia dei nostri cuor (x2)

La gioia del Signore
è la mia forza si (x3)
La gioia del Signore è con me

Mi ha dato l'acqua viva
è sete più non ho (x3)
Mi ha dato l'acqua viva
il mio Signore`,
    },
    {
      id: 35,
      autore: "22 Raccolta",
      titolo: "Apri i miei occhi",
      testo: `Apri i miei occhi
E fammi vedere
Le meraviglie
Della grazia Tua,
Per contemplare
Il Tuo splendore
Mentre adoro Te (x2)

Mentre adoro Te.

Oh Signore, noi crediam
Nel Tuo grande immenso amor,
Nei momenti più difficili,
Quando non sappiamo cosa far.

Noi veniam davanti a Te,
Al trono della grazia Tua
E con gli occhi della fede noi
La Tua gloria contempliam.

Apri i miei occhi
E fammi vedere
Le meraviglie
Della grazia Tua,
Per contemplare
Il Tuo splendore
Mentre adoro Te (x2)

Mentre adoro Te.`,
    },
    {
      id: 36,
      autore: "23 Raccolta",
      titolo: "Tu non sei un Dio creato",
      testo: `Tu non sei un Dio creato
      D'argento e d'or;
      Tu non sei un Dio che vive
      Per volontà dell'uom;
      Tu non sei un Dio che brama
      Cio' che possiamo dar,
      Nel tuo pian nel Tuo Voler (x2)
       

      Tu sei il Dio sovran
      Nella gloria del ciel
      Dall'Eternità, unico Signor
      Ein quest'ora,
      Nella gioia e nel duol
      Siedi sul Tuo tron
      Tu sei il Dio e Signor
      

      Tu non sei un Dio creato
      D'argento e d'or;
      Tu non sei un Dio che vive
      Per volontà dell'uom;
      Tu non sei un Dio che brama
      Cio' che possiamo dar,
      Nel tuo pian nel Tuo Voler
      

      Tu sei il Dio sovran
      Nella gloria del ciel
      Dall'Eternità, unico Signor
      Ein quest'ora,
      Nella gioia e nel duol
      Siedi sul Tuo tron
      Tu sei il Dio e Signor
      
       

Sei fedele, sei Potente,sei
Eterno, questo Tu sei (x3)`,
    },
    {
      id: 37,
      autore: "24 Raccolta",
      titolo: "Io so che Tu sei qui",
      testo: `Io so che Tu sei qui,
sento il Tuo camminar.
Ti muovi tra il Tuo popolo,
portando libertà. (x2)

Con la fede arriverò,
con la fede Ti toccherò.
La tua unzione ricevo or
e so che trasformato io sarò. (x2)

Io so che Tu sei qui,
sento il Tuo camminar.
Ti muovi tra il Tuo popolo,
portando libertà.

Con la fede arriverò,
con la fede Ti toccherò.
La tua unzione ricevo or
e so che trasformato io sarò. (x2)

E so che trasformato io sarò,
e so che trasformato io sarò,
e so che trasformato io sarò.`,
    },
    {
      id: 38,
      autore: "25 Raccolta",
      titolo: "Se mi trovassi nella tempesta",
      testo: `Se mi trovassi nella tempesta,
Alcun male io non temerei,
Perché Gesù vive dentro me
Ed è Lui che mi guida.
La mia casa è fondata sulla roccia
E mai potrà essere smossa,
Perché la roccia e Cristo Gesù, il Re,
Il Signore dei signori.

E allor di chi Io temerò
Se in Dio confiderò (x2)`,
    },
    {
      id: 39,
      autore: "26 Raccolta",
      titolo: "Amare Te",
      testo: `La ragione della vita è amare Te
Adorarti e servirti e lodarti, oh Dio
Una cosa ho chiesto a Te, Signor
E quella cercherò
Che io dimori nella casa Tua per sempre

Certo beni mi darai e benignità
Poi davanti a me la mensa, Tu preparerai
E con l'olio Tuo mi ungerai
Ed io traboccherò
E per lunghi giorni nella casa Tua vivrò

Amare Te, servire Te
Signore
Alzar le mani e lodare
Il nome Tuo
Questo è il tutto della vita mia
Altro bene io non troverò
Che amare Te, servire Te

La ragione della vita è amare Te
Adorarti e servirti e lodarti, oh Dio
Una cosa ho chiesto a Te, Signor
E quella cercherò
Che dimori nella casa Tua per sempre

Certo beni mi darai e benignità
Poi davanti a me la mensa, Tu preparerai
E con l'olio Tuo mi ungerai
Ed io traboccherò
E per lunghi giorni nella casa Tua vivrò

Amare Te, servire Te
Signore
Alzar le mani e lodare
Il nome Tuo
Questo è il tutto della vita mia
Altro bene io non troverò
Che amare Te, servire Te

Amare Te, servire Te
Signore
Alzar le mani e lodare
Il nome Tuo
Questo è il tutto della vita mia
Altro bene io non troverò
Che amare Te, servire Te

Questo è il tutto della vita mia
Altro bene io non troverò
Che amare Te, servire Te`,
    },
    {
      id: 40,
      autore: "27 Raccolta",
      titolo: "C'è un Dio Molto Grande",
      testo: `C’è un Dio molto grande qui,
Vive dentro di me. (x2)

Io lo so, io lo so, vive dentro di me.
Io lo so, io lo so, vive dentro di me.

C’è un Dio pien d’amore qui,
Vive dentro di me.

Io lo so, io lo so, vive dentro di me.
Io lo so, io lo so, vive dentro di me.

C’è un Dio pien di pace qui,
Regna dentro di me.

Io lo so, io lo so, vive dentro di me.
Io lo so, io lo so, vive dentro di me.`,
    },
    {
      id: 41,
      autore: "28 Raccolta",
      titolo: "Un Miracolo",
      testo: `Un miracolo ha fatto in me,
Il mio Salvator.
Un miracolo ha fatto in me
Quando venne nel mio cuor.

La Sua grazia è giunta a me,
Trasformandomi, dandomi fede.
Un miracolo, un miracolo
Ha fatto Gesù in me.

Un miracolo ha fatto in me,
Il mio Salvator.
Un miracolo ha fatto in me
Quando venne nel mio cuor.

La Sua grazia è giunta a me,
Trasformandomi, dandomi fede.
Un miracolo, un miracolo
Ha fatto Gesù in me.

Un miracolo ha fatto in me,
Il mio Salvator.
Un miracolo ha fatto in me
Quando venne nel mio cuor.

La Sua grazia è giunta a me,
Trasformandomi, dandomi fede.
Un miracolo, un miracolo
Ha fatto Gesù in me.`,
    },
    {
      id: 42,
      autore: "29 Raccolta",
      titolo: "Non c'è altro trono",
      testo: `Anima mia, se soffri, corri
      Lascia ogni peso ai piedi di Gesu'
      Oh cuore mio, non disperare
      Dio potrebbe mai
      Dimenticarsi di Te?
      

      Mi prostrero' davanti al Re dei re
      Egli è vivente,
      La tua preghiera ascolterà
      E sperero' soltanto in Lui
      Perchè non c'è altro trono, (x3)
      Non c'è altro Dio
      Al di fuori di Gesu'
      

      Oh, dove l'uomo non puo' nulla
      L'Onnipotente resta il solo Re
      Non guardero' intorno a me
      La mia fede sarà risposta
      Solo nel Suo amore
      


      Mi prostrero' davanti al Re dei re
      Egli è vivente,
      La tua preghiera ascolterà
      E sperero' soltanto in Lui
      Perchè non c'è altro trono, (x3)
      Non c'è altro Dio
      Al di fuori di Gesu'`,
    },
    {
      id: 43,
      autore: "30 Raccolta",
      titolo: "C'è una sola via",
      testo: `C’è una sola via, c’è una sola via
C’è una sola via: è Gesù
C’è una sola via per andare in ciel
C’è una sola via: è Gesù
Si sacrificò e il sangue Suo donò
Ma risuscitò e vive nel mio cuor.

Cerca questa via, cerca questa via
Cerca questa via: è Gesù.
Cerca questa via per andare in ciel
Cerca questa via: è Gesù.`,
    },
    {
      id: 44,
      autore: "31 Raccolta",
      titolo: "La tua Benedizione",
      testo: `La nostra generazione vedrà
il compimento dell'opera Tua
Come Giacobbe vogliamo lottar
Per realizzare la potenza Tua

No, non Ti lasciamo andar
Finchè la benedizione Tua
Dal cielo su noi scenderà

Scenda il tuo fuoco
Su ognuno di noi
Vieni ed infiammaci
Con il tuo amor
Che il mondo veda
La Tua luce in noi
E che si pieghi
Al tuo nome Gesu'

No, non Ti lasciamo andar
Finchè la benedizione Tua
Dal cielo su noi scenderà`,
    },
  ];

  useEffect(() => {
    // Troviamo il cantico corrispondente all'ID
    const canticoTrovato = raccolta.find((c) => c.id === parseInt(id)); // Converto l'ID in intero
    // console.log("Cantico trovato:", canticoTrovato); // Debugging: stampiamo il cantico trovato

    if (canticoTrovato) {
      setCantico(canticoTrovato); // Impostiamo lo stato con il cantico trovato
    } else {
      setCantico(null); // Se non troviamo il cantico, possiamo impostare null o gestire l'errore
    }
  }, [id]); // Ricarica quando l'ID cambia

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
      <div className="p-6 text-left max-w-4xl w-full mx-auto mb-50">
        <h2 className="text-2xl font-extrabold text-neutral-700 mb-4 text-center">
          {cantico.titolo}
        </h2>
        <div className="mt-6">
          <div className="p-4 bg-lime-950/25 bg-opacity-80 shadow-lg rounded-xl">
            {formatTesto(cantico.testo)}
          </div>
        </div>
      </div>
      {/* <div className="w-full">
        <Footer />
      </div> */}
    </div>
  );
};

export default CantiRaccolta;
