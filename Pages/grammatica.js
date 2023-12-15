//
//Struttura grammaticale
//


var testoStruttura = "The grammatical structure of sentences in Japanese is different from that in English:";
var esempioStruttura = ["Subject + Particles + Name/Adjective/Place + Verb (Affermative)", "Subject + Particles + Name/Adjective/Place + Verb (Negative)", "Subject + Particles + Name/Adjective/Place + Verb (か form)"];
var provaStruttura = ["私はエマです", "私はマリオじゃありません", "これは何ですか"];
var provaStrutturaInglese = ["I'm Emma", "I'm not Mario", "What is this?"];
var testoSpiegazione = ["This is the usual construction of an affermative japanese sentence", "This is the usual construction of a negative japanese sentence", "This is the usual construction of a question in japanese"];
var k = 0;

var particelleParagrafo = document.createElement('h1'); //creo un nuovo elemento h1
particelleParagrafo.textContent = 'Grammatical Structure'; //imposto il testo del paragrafo
particelleParagrafo.id = 'TitoloParagrafoStruttura'; //imposto l'id

var paragrafoStruttura = document.createElement('p');
paragrafoStruttura.textContent = testoStruttura;
paragrafoStruttura.id = 'ParagrafoStruttura'

var linea = document.createElement('div'); //creo una linea :)
linea.class = 'line'; //imposto la classe della linea
linea.style = 'background-color: #fe7a8f; height: 3px;'; //imposto il colore della linea
linea.id = 'linea'; //imposto l'id sulla linea

var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>

var linea2 = document.createElement('div'); //creo una linea :)
linea2.class = 'line'; //imposto la classe della linea
linea2.style = 'background-color: white; height: 3px;'; //imposto il colore della linea
linea2.id = 'linea2'; //imposto l'id sulla linea

document.body.appendChild(particelleParagrafo); //aggiungo il paragrafo al documento
document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea
document.body.appendChild(linea); //linea UwU
document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea

document.body.appendChild(paragrafoStruttura); //aggiungo il testo al documento 
document.body.appendChild(space); //spazio
document.body.appendChild(linea); //linea
document.body.appendChild(space); //spazio

esempioStruttura.forEach(element => {

    var grammaticaSpiegazione = document.createElement('p');
    grammaticaSpiegazione.textContent = esempioStruttura[k];
    grammaticaSpiegazione.id = 'GrammaticaSpiegazione';

    var fraseEsempio = document.createElement('p');
    fraseEsempio.textContent = provaStruttura[k];
    fraseEsempio.id = "Esempio";

    var fraseEsempioTradotta = document.createElement('p');
    fraseEsempioTradotta.textContent = provaStrutturaInglese[k];
    fraseEsempioTradotta.id = 'Esempio';

    var grammaticaSpiegazioneTesto = document.createElement('p');
    grammaticaSpiegazioneTesto.textContent = testoSpiegazione[k];
    grammaticaSpiegazioneTesto.id = 'GrammaticaSpiegazione';

    var linea2 = document.createElement('div'); //creo una linea :)
    linea2.class = 'line'; //imposto la classe della linea
    linea2.style = 'background-color: white; height: 3px;'; //imposto il colore della linea
    linea2.id = 'linea2'; //imposto l'id sulla linea

    var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>


    document.body.appendChild(grammaticaSpiegazione);
    document.body.appendChild(space);
    document.body.appendChild(fraseEsempio);
    document.body.appendChild(space);
    document.body.appendChild(fraseEsempioTradotta);
    document.body.appendChild(space);
    document.body.appendChild(grammaticaSpiegazioneTesto);
    document.body.appendChild(space);
    //document.body.appendChild(linea2)
    //document.body.appendChild(space);

    k++;
});





//-------------
//Particelle
//-------------


var particelle = ['は', 'が', 'か', 'へ', 'に', 'と', 'を', 'で', 'の', 'も', 'よ', 'ね']; //Particelle Fondamentali
var pronuncia = ['wa', 'ga', 'ka', 'e', 'ni', 'to', 'o', 'de', 'no', 'mo', 'yo', 'ne']; //Pronuncia delle particelle in ローマ字
var significato = ['Topic marker, it introduces the topic of the sentence, often coincide with the subject', 'Subject marker, it declares the subject of a sentence', 'Question marker, goes at the end of a sentence and is used to ask a question', 'Destination marker, it introduces the destination the subject is heading to', 'Place marker, it introduce the place where the subject is', 'Companion marker / "and", it can both mark a companion or the "and" conjunction', 'Direct object, indicate something or someone who is the recipient of the action', 'Tool marker, it explains how the action is carried out', 'Information marker / Possessive marker, it either add more information or introduce the possession of the subject', 'Also, can be just used with the subject', 'Emphasis on the sentence, placed at the end it gives a confident vibe to the sentence', 'Support Request, placed at the end is used to search for the support of other people in what was just said']; //significato delle particelle
var esempi = ['私はエマです', 'あの猫がかわいい', 'どうぶつの森は楽しいですか', 'スーパーへ行きます', '私は地下鉄のえきにあります', '私とカミラすし食べる', '私は日本語をべんきょうします', '手で食べる', 'これはカミラのけいたい', '私も', 'すごいですよ', 'むずかしいですね']; //esempi in giapponese 
var significatiEsempi = ["I'm Emma", "That cat is cute", "Is 'Animal Crossing' fun?", 'I go to the supermarket', 'I am at the subway station', 'Me and Camilla eat sushi', "I'm learning japanese", 'Eating with the hands', "That's Camilla's phone", 'Me too', "It's amazing!!", "It's difficult, isn't it?"]; //traduzione degli esempi
var i = 0; //indice dell'array 

var particelleParagrafo = document.createElement('h1'); //creo un nuovo elemento h1
particelleParagrafo.textContent = 'Particles'; //imposto il testo del paragrafo
particelleParagrafo.id = 'TitoloParagrafoParticelle'; //imposto l'id

var linea = document.createElement('div'); //creo una linea :)
linea.class = 'line'; //imposto la classe della linea
linea.style = 'background-color: #fe7a8f; height: 3px;'; //imposto il colore della linea
linea.id = 'linea'; //imposto l'id sulla linea

var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>

document.body.appendChild(particelleParagrafo); //aggiungo il paragrafo al documento
document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea
document.body.appendChild(linea) //linea UwU
document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea

particelle.forEach(element => { //per qualunque elemento nell'array 'particelle'

    var table = document.createElement('table'); //creo una variabile con l'elemento HTML <table>
    var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>
    var divBella = document.createElement('div'); //creo una div per inserire i paragrafi
    var p1 = document.createElement('p'); //creo il primo paragrafo
    var p2 = document.createElement('p'); //creo il secondo paragrafo
    var p3 = document.createElement('p');
    var p4 = document.createElement('p');
    var linea = document.createElement('div'); //creo una linea :)

    var h1Element = document.createElement('h1'); //creo una variabile con l'elemento HTML <h1>
    h1Element.id = 'Particella'; //l'ID dell'elemento e 'Particella'
    h1Element.textContent = particelle[i]; //il text content e il particelle puntato dall'indirizzo i

    var textNode1 = document.createTextNode(`Pronunciation: ${pronuncia[i].toUpperCase()}`); //creo il textNode1 che contiene la pronuncia pronuncia indicata dall'indice i
    var textNode2 = document.createTextNode(`${significato[i]}`); //creo il textNode2 che contiene la pronuncia significato indicata dall'indice i
    var textNode3 = document.createTextNode(`Example: "${esempi[i]}"`);
    var textNode4 = document.createTextNode(`Translation: "${significatiEsempi[i]}"`);

    p1.appendChild(textNode1); //aggiungo a p1 il textNode1
    p2.appendChild(textNode2); //aggiungo a p2 il textNode2
    p3.appendChild(textNode3); //aggiungo a p3 il textNode3
    p4.appendChild(textNode4); //aggiungo a p4 il textNode4

    divBella.appendChild(p1); //aggiungo p1 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div
    divBella.appendChild(p2); //aggiungo p2 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div
    divBella.appendChild(p3); //aggiungo p3 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div
    divBella.appendChild(p4); //aggiungo p4 alla div


    var row1 = table.insertRow(); //creo la prima riga della tabella

    var particelleTabella = row1.insertCell(); //creo il particelle
    particelleTabella.id = h1Element.id; //gli assegno l'ID di h1 (h1 = particelle)
    particelleTabella.textContent = h1Element.textContent; //gi assegno il textContent di h1 

    var ParagrafoTabella = row1.insertCell(); //creo il paragrafo
    ParagrafoTabella.id = 'Paragraph'; //gli assegno l'ID di p (descrizione)
    ParagrafoTabella.appendChild(divBella) //aggiungo la div alla tabella

    var row2 = table.insertRow(); //creo la seconda riga della tabella


    linea.class = 'line'; //imposto la classe della linea
    linea.style = 'background-color: #ffffff; height: 3px;'; //imposto il colore della linea
    linea.id = 'linea';

    document.body.appendChild(table); //aggiungo la tabella al DOM
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM
    document.body.appendChild(linea); //una bellissima linea UwU
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea

    i++; //incremento il puntatore di 1
});





//--------
//Verbi
//--------


var particelleParagrafo = document.createElement('h1'); //creo un nuovo elemento h1
particelleParagrafo.textContent = 'Verbs'; //imposto il testo del paragrafo
particelleParagrafo.id = 'TitoloParagrafoVerbi'; //imposto l'id

var linea = document.createElement('div'); //creo una linea :)
linea.class = 'line'; //imposto la classe della linea
linea.style = 'background-color: #fe7a8f; height: 3px;'; //imposto il colore della linea
linea.id = 'linea'; //imposto l'id sulla linea

var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>

document.body.appendChild(particelleParagrafo); //aggiungo il paragrafo al documento
document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea
document.body.appendChild(linea) //linea UwU
document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea

var testoVerbi1 = "In japanese, verbs are divided in 3 different categories: 一段 (いちだん), 五段 (ごだん), 不規則動詞 (ふきそくどうし)";
var testoVerbiH2 = document.createElement('h2');
testoVerbiH2.textContent = testoVerbi1;
testoVerbiH2.id = 'testoVerbiH2';

document.body.appendChild(testoVerbiH2);

var titoloIchidan = "一段";
var testoIchidan = "verbs which ends in -える / -いる. The last kana can be anyone but it must include the -え / -い sound (け, し, て, に...)";
var cogniugazioniIchidan = "一段 verbs can use the following forms: う, え, お, without る, た, て"
var ichidanVebro = '着る';
var traduzioneIchidan = "To wear";
var ichidanU = "着る, Dictionary form / う form";
var ichidanE = "きれ(ば), え form | possibility or condition";
var ichidanO = "きろ, お form | obbligation";
var ichidanSenzaRu = 'き, without る form | used for conjugate';

var titoloIchidanH3 = document.createElement('h2');
titoloIchidanH3.textContent = titoloIchidan;

var testoIchidanP = document.createElement('p');
testoIchidanP.textContent = testoIchidan;
testoIchidanP.id = 'ichidan';

var cogniugazioniIchidanP = document.createElement('p');
cogniugazioniIchidanP.textContent = cogniugazioniIchidan;

var ichidanVebroH3 = document.createElement('h2');
ichidanVebroH3.textContent = ichidanVebro;

var traduzioneIchidanP = document.createElement('p');
traduzioneIchidanP.textContent = traduzioneIchidan;

var ichidanUP = document.createElement('p');
ichidanUP.textContent = ichidanU;

var ichidanEP = document.createElement('p');
ichidanEP.textContent = ichidanE;

var ichidanOP = document.createElement('p');
ichidanOP.textContent = ichidanO;

var ichidanSenzaRuP = document.createElement('p');
ichidanSenzaRuP.textContent = ichidanSenzaRu;


document.body.appendChild(titoloIchidanH3);
document.body.appendChild(space)
document.body.appendChild(testoIchidanP);
document.body.appendChild(space);
document.body.appendChild(cogniugazioniIchidanP);
document.body.appendChild(ichidanVebroH3);
document.body.appendChild(traduzioneIchidanP);
document.body.appendChild(ichidanUP);
document.body.appendChild(ichidanEP);
document.body.appendChild(ichidanOP);
document.body.appendChild(ichidanSenzaRuP);
document.body.appendChild(space);

var titoloGodan = "五段";
var testoGodan = "All the other verbs who don't end with -える / -いる and are not irregular";
var cogniugazioniGodan = "五段 verbs can use the following forms: あ, い, う, え, お, た, て"
var godanVebro = '買う';
var traduzioneGodan = "To buy";
var godanA = "かわ(ない), あ form | simple negation / intention to not do something"
var godanI = "買い, い form | used for conjugate"
var godanU = "かう, Dictionary form / う form";
var godanE = "かえ(ば), え form | possibility or condition";
var godanO = "かお, お form | obbligation";


var titoloGodanH3 = document.createElement('h2');
titoloGodanH3.textContent = titoloGodan;

var testoGodanP = document.createElement('p');
testoGodanP.textContent = testoGodan;
testoGodanP.id = 'Godan';

var cogniugazioniGodanP = document.createElement('p');
cogniugazioniGodanP.textContent = cogniugazioniGodan;

var GodanVebroH3 = document.createElement('h2');
GodanVebroH3.textContent = godanVebro;

var traduzioneGodanP = document.createElement('p');
traduzioneGodanP.textContent = traduzioneGodan;

var GodanAP = document.createElement('p');
GodanAP.textContent = godanA;

var GodanIP = document.createElement('p');
GodanIP.textContent = godanI;

var GodanUP = document.createElement('p');
GodanUP.textContent = godanU;

var GodanEP = document.createElement('p');
GodanEP.textContent = godanE;

var GodanOP = document.createElement('p');
GodanOP.textContent = godanO;


document.body.appendChild(titoloGodanH3);
document.body.appendChild(space)
document.body.appendChild(testoGodanP);
document.body.appendChild(space);
document.body.appendChild(cogniugazioniGodanP);
document.body.appendChild(GodanVebroH3);
document.body.appendChild(traduzioneGodanP);
document.body.appendChild(GodanAP);
document.body.appendChild(GodanIP);
document.body.appendChild(GodanUP);
document.body.appendChild(GodanEP);
document.body.appendChild(GodanOP);


var verbalTense = "Those are the verbal tense that you're going to use in japanese";
var verbalTensePresente = 'Present Positive: -ます, Present Negative: -ません';
var verbalTensePassato = 'Past Positive: -ました, Past Negative: -ませんでした';
var verbalTenseSpiegazione = "一段 and 五段 verbs conjugate differently, here how it's done";

var verbalTenseP = document.createElement('h2');
verbalTenseP.textContent = verbalTense;
verbalTenseP.id = 'testoVerbiH2';

var verbalTensePresenteP = document.createElement('p');
verbalTensePresenteP.textContent = verbalTensePresente;

var verbalTensePassatoP = document.createElement('p');
verbalTensePassatoP.textContent = verbalTensePassato;

var verbalTenseSpiegazioneP = document.createElement('p');
verbalTenseSpiegazioneP.textContent = verbalTenseSpiegazione;

document.body.appendChild(verbalTenseP);
document.body.appendChild(verbalTensePresenteP);
document.body.appendChild(verbalTensePassatoP);
document.body.appendChild(verbalTenseSpiegazioneP);


var howToConjugateIchidan = "To conjugate 一段 verbs, use the 'without る form' and then add the verbal tense you need";
var ichidanVebroConiugare = "寝る";
var ichidanVebroConiugareTradotto = "To sleep";
var ichidanPresente = "ねます, ねません";
var ichidanPresenteTradotto = "Sleep, Not sleep";
var ichidanPassato = "ねました, ねませんでした";
var ichidanPassatoTradotto = "Slept, Not slept";

var howToConjugateIchidanP = document.createElement('h2');
howToConjugateIchidanP.textContent = howToConjugateIchidan;
howToConjugateIchidanP.id = 'testoVerbiH2';

var ichidanVerboConiugareP = document.createElement('h3');
ichidanVerboConiugareP.textContent = `Ichidan verb: ${ichidanVebroConiugare} (${ichidanVebroConiugareTradotto})`;

var ichidanPresenteP = document.createElement('p');
ichidanPresenteP.textContent = `Present: ${ichidanPresente} (${ichidanPresenteTradotto})`;

var ichidanPassatoP = document.createElement('p');
ichidanPassatoP.textContent = `Past: ${ichidanPassato} (${ichidanPassatoTradotto})`;

document.body.appendChild(howToConjugateIchidanP);
document.body.appendChild(ichidanVerboConiugareP);
document.body.appendChild(ichidanPresenteP);
document.body.appendChild(ichidanPassatoP);

var howToConjugateGodan = "To conjugate 一段 verbs you have to use with 'い form' and then add the verbal tense you need";
var godanVerboConiugare = "行く";
var godanVerboConiugareTradotto = "To go";
var godanPresente = "いきます, いきません";
var godanPresenteTradotto = 'Go, Not go';
var godanPassato = 'いきました, いきませんでした';
var godanPassatoTradotto = "Went, Not went";

var howToConjugateGodanP = document.createElement('h2');
howToConjugateGodanP.textContent = howToConjugateGodan;
howToConjugateGodanP.id = 'testoVerbiH2';

var godanVerboConiugareP = document.createElement('h3');
godanVerboConiugareP.textContent = `Godan verb: ${godanVerboConiugare} (${godanVerboConiugareTradotto})`;

var godanPresenteP = document.createElement('p');
godanPresenteP.textContent = `Present: ${godanPresente} (${godanPresenteTradotto})`;

var godanPassatoP = document.createElement('p');
godanPassatoP.textContent = `Past: ${godanPassato} (${godanPassatoTradotto})`;

document.body.appendChild(howToConjugateGodanP);
document.body.appendChild(godanVerboConiugareP);
document.body.appendChild(godanPresenteP);
document.body.appendChild(godanPassatoP);


var titoloIrregolari = "為る (する) & 来る (くる)";
var testoIrregolai = "Those verbs are the only 2 irregular verbs in japanese, they conjugate differently than other verbs. 為る means 'to do' and 来る means 'to come'";
var suruPresente = "します, しません";
var suruPresenteTradotto = "Do, Do not";
var suruPassato = "しました, しませんでした";
var suruPassatoTradotto = "Did, Did not"
var kuruPresente = "きます, きません";
var kuruPresenteTradotto = "Come, Come not";
var kuruPassato = 'きました, きませんでした';
var kuruPassatoTradotto = "Came, Came not"

var titoloIrregolariH3 = document.createElement('h2');
titoloIrregolariH3.textContent = titoloIrregolari;

var testoIrregolariP = document.createElement('p');
testoIrregolariP.textContent = testoIrregolai;

var suruPresenteP = document.createElement('p');
suruPresenteP.textContent = `Present for 為る (する): ${suruPresente} (${suruPresenteTradotto})`;

var suruPassatoP = document.createElement('p');
suruPassatoP.textContent = `Past for 為る (する): ${suruPassato} (${suruPassatoTradotto})`;

var kuruPresenteP = document.createElement('p');
kuruPresenteP.textContent = `Present for 来る (くる): ${kuruPresente} (${kuruPresenteTradotto})`;

var kuruPassatoP = document.createElement('p');
kuruPassatoP.textContent = `Past for 来る (くる): ${kuruPassato} (${kuruPassatoTradotto})`;

document.body.appendChild(titoloIrregolariH3);
document.body.appendChild(testoIrregolariP);
document.body.appendChild(suruPresenteP);
document.body.appendChild(suruPassatoP);
document.body.appendChild(kuruPresenteP);
document.body.appendChild(kuruPassatoP);

document.body.appendChild(linea2);

document.body.appendChild(space);





//--------------------
//Questo, Quello...
//--------------------


var particelleParagrafo = document.createElement('h1'); //creo un nuovo elemento h1
particelleParagrafo.textContent = 'This, That...'; //imposto il testo del paragrafo
particelleParagrafo.id = 'TitoloParagrafoQuestoQuello'; //imposto l'id

var linea = document.createElement('div'); //creo una linea :)
linea.class = 'line'; //imposto la classe della linea
linea.style = 'background-color: #fe7a8f; height: 3px;'; //imposto il colore della linea
linea.id = 'linea'; //imposto l'id sulla linea

var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>

document.body.appendChild(particelleParagrafo); //aggiungo il paragrafo al documento
document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea
document.body.appendChild(linea) //linea UwU
document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea

var i = 0;

var re = ['これ', 'それ', 'あれ', 'どれ'];
var reSpiegazioni = ['This', "That (Near the person who we're talking to)", 'That over there (Far away from everyone in the conversation)', 'Which'];
var reEsempi = ['これは私の本', 'それそれは500円', 'あれは君の車ですか', 'どれがお好きですか'];
var reInglese = ['This is my book', 'That costs 500 yen', 'Is that car over there yours?', 'Which one do you like the most?'];

var no = ['この', 'その', 'あの', 'どの'];
var noSpiegazioni = ['This (Specific, requires a subject)', 'That (Near the person who we are talkin to, requires a subject)', 'That over there (Far away from everyone in the conversation, requires a subject)', 'Which (Requires a subject)'];
var noEsempi = ['この家は小', 'その本は楽しいですね', 'あの人はナヒダの母', 'どの本が好きですか'];
var noInglese = ['This house is small', 'That book is funny', "That person over there is Nahida's father", 'Which book do you like the most?'];

var ko = ['ここ', 'そこ', 'あそこ', 'どこ'];
var koSpiegazioni = ['Here', 'There', 'Over there (Far away from everyone in the conversation)', 'Where'];
var koEsempi = ['ここは何ですか', 'そこにあります', 'あそこに猫がいます', 'どこにドゥオーモの駅か'];
var koInglese = ['Where is here? (Literally, What is here?)', 'They are there', "There's a cat over there", 'Where is the Duomo station?'];

re.forEach(element => {
    var table = document.createElement('table'); //creo una variabile con l'elemento HTML <table>
    var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>
    var divBella = document.createElement('div'); //creo una div per inserire i paragrafi
    var p1 = document.createElement('p'); //creo il primo paragrafo
    var p2 = document.createElement('p'); //creo il secondo paragrafo
    var p3 = document.createElement('p');
    var linea = document.createElement('div'); //creo una linea :)

    var h1Element = document.createElement('h1'); //creo una variabile con l'elemento HTML <h1>
    h1Element.id = 'Pointers'; //l'ID dell'elemento e 'Pointers'
    h1Element.textContent = re[i]; //il text content e il particelle puntato dall'indirizzo i

    var textNode1 = document.createTextNode(`${reSpiegazioni[i]}`); //creo il textNode1 che contiene la pronuncia pronuncia indicata dall'indice i
    var textNode2 = document.createTextNode(`Example: "${reEsempi[i]}"`); //creo il textNode2 che contiene la pronuncia significato indicata dall'indice i
    var textNode3 = document.createTextNode(`Translation: "${reInglese[i]}"`);

    p1.appendChild(textNode1); //aggiungo a p1 il textNode1
    p2.appendChild(textNode2); //aggiungo a p2 il textNode2
    p3.appendChild(textNode3); //aggiungo a p3 il textNode3

    divBella.appendChild(p1); //aggiungo p1 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div
    divBella.appendChild(p2); //aggiungo p2 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div
    divBella.appendChild(p3); //aggiungo p3 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div


    var row1 = table.insertRow(); //creo la prima riga della tabella

    var particelleTabella = row1.insertCell(); //creo il particelle
    particelleTabella.id = h1Element.id; //gli assegno l'ID di h1 (h1 = particelle)
    particelleTabella.textContent = h1Element.textContent; //gi assegno il textContent di h1 

    var ParagrafoTabella = row1.insertCell(); //creo il paragrafo
    ParagrafoTabella.id = 'Paragraph'; //gli assegno l'ID di p (descrizione)
    ParagrafoTabella.appendChild(divBella) //aggiungo la div alla tabella

    var row2 = table.insertRow(); //creo la seconda riga della tabella


    linea.class = 'line'; //imposto la classe della linea
    linea.style = 'background-color: #ffffff; height: 3px;'; //imposto il colore della linea
    linea.id = 'linea';

    document.body.appendChild(table); //aggiungo la tabella al DOM
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM
    document.body.appendChild(linea); //una bellissima linea    UwU
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea

    i++; //incremento il puntatore di 1
});

i = 0;

no.forEach(element => {
    var table = document.createElement('table'); //creo una variabile con l'elemento HTML <table>
    var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>
    var divBella = document.createElement('div'); //creo una div per inserire i paragrafi
    var p1 = document.createElement('p'); //creo il primo paragrafo
    var p2 = document.createElement('p'); //creo il secondo paragrafo
    var p3 = document.createElement('p');
    var linea = document.createElement('div'); //creo una linea :)

    var h1Element = document.createElement('h1'); //creo una variabile con l'elemento HTML <h1>
    h1Element.id = 'Pointers'; //l'ID dell'elemento e 'Pointers'
    h1Element.textContent = no[i]; //il text content e il particelle puntato dall'indirizzo i

    var textNode1 = document.createTextNode(`${noSpiegazioni[i]}`); //creo il textNode1 che contiene la pronuncia pronuncia indicata dall'indice i
    var textNode2 = document.createTextNode(`Example: "${noEsempi[i]}"`); //creo il textNode2 che contiene la pronuncia significato indicata dall'indice i
    var textNode3 = document.createTextNode(`Translation: "${noInglese[i]}"`);

    p1.appendChild(textNode1); //aggiungo a p1 il textNode1
    p2.appendChild(textNode2); //aggiungo a p2 il textNode2
    p3.appendChild(textNode3); //aggiungo a p3 il textNode3

    divBella.appendChild(p1); //aggiungo p1 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div
    divBella.appendChild(p2); //aggiungo p2 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div
    divBella.appendChild(p3); //aggiungo p3 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div


    var row1 = table.insertRow(); //creo la prima riga della tabella

    var particelleTabella = row1.insertCell(); //creo il particelle
    particelleTabella.id = h1Element.id; //gli assegno l'ID di h1 (h1 = particelle)
    particelleTabella.textContent = h1Element.textContent; //gi assegno il textContent di h1 

    var ParagrafoTabella = row1.insertCell(); //creo il paragrafo
    ParagrafoTabella.id = 'Paragraph'; //gli assegno l'ID di p (descrizione)
    ParagrafoTabella.appendChild(divBella) //aggiungo la div alla tabella

    var row2 = table.insertRow(); //creo la seconda riga della tabella


    linea.class = 'line'; //imposto la classe della linea
    linea.style = 'background-color: #ffffff; height: 3px;'; //imposto il colore della linea
    linea.id = 'linea';

    document.body.appendChild(table); //aggiungo la tabella al DOM
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM
    document.body.appendChild(linea); //una bellissima linea    UwU
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea

    i++; //incremento il puntatore di 1
});

i = 0;

ko.forEach(element => {
    var table = document.createElement('table'); //creo una variabile con l'elemento HTML <table>
    var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>
    var divBella = document.createElement('div'); //creo una div per inserire i paragrafi
    var p1 = document.createElement('p'); //creo il primo paragrafo
    var p2 = document.createElement('p'); //creo il secondo paragrafo
    var p3 = document.createElement('p');
    var linea = document.createElement('div'); //creo una linea :)

    var h1Element = document.createElement('h1'); //creo una variabile con l'elemento HTML <h1>
    h1Element.id = 'Pointers'; //l'ID dell'elemento e 'Pointers'
    h1Element.textContent = ko[i]; //il text content e il particelle puntato dall'indirizzo i

    var textNode1 = document.createTextNode(`${koSpiegazioni[i]}`); //creo il textNode1 che contiene la pronuncia pronuncia indicata dall'indice i
    var textNode2 = document.createTextNode(`Example: "${koEsempi[i]}"`); //creo il textNode2 che contiene la pronuncia significato indicata dall'indice i
    var textNode3 = document.createTextNode(`Translation: "${koInglese[i]}"`);

    p1.appendChild(textNode1); //aggiungo a p1 il textNode1
    p2.appendChild(textNode2); //aggiungo a p2 il textNode2
    p3.appendChild(textNode3); //aggiungo a p3 il textNode3

    divBella.appendChild(p1); //aggiungo p1 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div
    divBella.appendChild(p2); //aggiungo p2 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div
    divBella.appendChild(p3); //aggiungo p3 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div


    var row1 = table.insertRow(); //creo la prima riga della tabella

    var particelleTabella = row1.insertCell(); //creo il particelle
    particelleTabella.id = h1Element.id; //gli assegno l'ID di h1 (h1 = particelle)
    particelleTabella.textContent = h1Element.textContent; //gi assegno il textContent di h1 

    var ParagrafoTabella = row1.insertCell(); //creo il paragrafo
    ParagrafoTabella.id = 'Paragraph'; //gli assegno l'ID di p (descrizione)
    ParagrafoTabella.appendChild(divBella) //aggiungo la div alla tabella

    var row2 = table.insertRow(); //creo la seconda riga della tabella


    linea.class = 'line'; //imposto la classe della linea
    linea.style = 'background-color: #ffffff; height: 3px;'; //imposto il colore della linea
    linea.id = 'linea';

    document.body.appendChild(table); //aggiungo la tabella al DOM
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM
    document.body.appendChild(linea); //una bellissima linea    UwU
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea

    i++; //incremento il puntatore di 1
});

i = 0;

var table = document.createElement('table'); //creo una variabile con l'elemento HTML <table>
var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>
var divBella = document.createElement('div'); //creo una div per inserire i paragrafi
var p1 = document.createElement('p'); //creo il primo paragrafo
var p2 = document.createElement('p'); //creo il secondo paragrafo
var p3 = document.createElement('p');
var linea = document.createElement('div'); //creo una linea :)

var h1Element = document.createElement('h1'); //creo una variabile con l'elemento HTML <h1>
h1Element.id = 'Pointers'; //l'ID dell'elemento e 'Pointers'
h1Element.textContent = 'だれ'; //il text content e il particelle puntato dall'indirizzo i

var textNode1 = document.createTextNode(`Who`); //creo il textNode1 che contiene la pronuncia pronuncia indicata dall'indice i
var textNode2 = document.createTextNode(`Example: "これはだれのかばんですか"`); //creo il textNode2 che contiene la pronuncia significato indicata dall'indice i
var textNode3 = document.createTextNode(`Translation: "Whose bag is this?"`);

p1.appendChild(textNode1); //aggiungo a p1 il textNode1
p2.appendChild(textNode2); //aggiungo a p2 il textNode2
p3.appendChild(textNode3); //aggiungo a p3 il textNode3

divBella.appendChild(p1); //aggiungo p1 alla div
divBella.appendChild(space); //aggiungo uno spazio alla div
divBella.appendChild(p2); //aggiungo p2 alla div
divBella.appendChild(space); //aggiungo uno spazio alla div
divBella.appendChild(p3); //aggiungo p3 alla div
divBella.appendChild(space); //aggiungo uno spazio alla div


var row1 = table.insertRow(); //creo la prima riga della tabella

var particelleTabella = row1.insertCell(); //creo il particelle
particelleTabella.id = h1Element.id; //gli assegno l'ID di h1 (h1 = particelle)
particelleTabella.textContent = h1Element.textContent; //gi assegno il textContent di h1 

var ParagrafoTabella = row1.insertCell(); //creo il paragrafo
ParagrafoTabella.id = 'Paragraph'; //gli assegno l'ID di p (descrizione)
ParagrafoTabella.appendChild(divBella) //aggiungo la div alla tabella

var row2 = table.insertRow(); //creo la seconda riga della tabella


linea.class = 'line'; //imposto la classe della linea
linea.style = 'background-color: #ffffff; height: 3px;'; //imposto il colore della linea
linea.id = 'linea';

document.body.appendChild(table); //aggiungo la tabella al DOM
document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM
document.body.appendChild(linea); //una bellissima linea    UwU
document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea

i++; //incremento il puntatore di 1