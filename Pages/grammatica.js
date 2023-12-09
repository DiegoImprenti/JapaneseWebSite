var particelle = ['は', 'が', 'か', 'へ', 'に', 'と', 'を', 'で', 'の', 'も', 'よ', 'ね']; //Particelle Fondamentali
var pronuncia = ['wa', 'ga', 'ka', 'e', 'ni', 'to', 'o', 'de', 'no', 'mo', 'yo', 'ne']; //Pronuncia delle particelle in ローマ字
var significato = ['Topic marker, it introduces the topic of the sentence, often coincide with the subject', 'Subject marker, it declares the subject of a sentence', 'Question marker, goes at the end of a sentence and is used to ask a question', 'Destination marker, it introduces the destination the subject is heading to', 'Place marker, it introduce the place where the subject is', 'Companion marker / "and", it can both mark a companion or the "and" conjunction', 'Direct object, indicate something or someone who is the recipient of the action','Tool marker, it explains how the action is carried out', 'Information marker / Possessive marker, it either add more information or introduce the possession of the subject', 'Also, can be just used with the subject', 'Emphasis on the sentence, placed at the end it gives a confident vibe to the sentence', 'Support Request, placed at the end is used to search for the support of other people in what was just said']; //significato delle particelle
var esempi = ['私はエマです', 'あの猫がかわいい', 'どうぶつの森は楽しいですか', 'スーパーへ行きます', '私は地下鉄のえきにあります', '私とカミラすし食べる', '私は日本語をべんきょうします', '手で食べる', 'これはカミラのけいたい', '私も', 'すごいですよ', 'むずかしいですね']; //esempi in giapponese 
var significatiEsempi = ["I'm Emma", "That cat is cute", "Is 'Animal Crossing' fun?", 'I go to the supermarket', 'I am at the subway station', 'Me and Camilla eat sushi', "I'm learning japanese", 'Eating with the hands', "That's Camilla's phone", 'Me too', "It's amazing!!", "It's difficult, isn't it?"]; //traduzione degli esempi
var i = 0; //indice dell'array 


var particelleParagrafo = document.createElement('h1'); //creo un nuovo elemento h2
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
    linea.style = 'background-color: #fe7a8f; height: 3px;'; //imposto il colore della linea
    linea.id = 'linea';

    document.body.appendChild(table); //aggiungo la tabella al DOM
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM
    document.body.appendChild(linea); //una bellissima linea UwU
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea

    i++; //incremento il puntatore di 1
});


var particelleParagrafo = document.createElement('h1'); //creo un nuovo elemento h2
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