var kanji = ['安', '一', '飲', '右', '雨', '駅', '円', '火', '花', '下', '何', '会', '外', '学', '間', '気', '九', '休', '魚', '金', '空', '月', '見', '言', '古', '五', '後', '午', '語', '校', '口', '行', '高', '国', '今', '左', '三', '山', '四', '子', '耳', '時', '七', '車', '社', '手', '週', '十', '出', '書', '女', '小', '少', '上', '食', '新', '人', '水', '生', '西', '川', '千', '先', '前', '足', '多', '大', '男', '中', '長', '天', '店', '電', '土', '東', '道', '読', '南', '二', '日', '入', '年', '買', '白', '八', '半', '百', '父', '分', '聞', '母', '北', '木', '本', '毎', '万', '名', '目', '友', '来', '立', '六', '話', '心']; //Tutti i 104 Kanji del JLPT N5
var significati = ['Peace, Cheap, Safe','One','Drink','Right','Rain','Station','Circle, Yen, Round','Fire','Flower, Bloom','Below, Under','What, How Many, Which','Meet, Come Together, Society','Outside, Other, Disconnect','School, Science, Teaching','Time, Timeframe','Soul, Spirit','Nine','Rest','Fish','Gold, Metal, Money','Sky, Free, Empty','Month, Moon','Look, Be Visible, Show','Word, Speak','Old, Used','Five','After, Behind, Stay Behind','Noon','Language','School','Mouth','Walk, Go, Do, Perform','High, Expensive, Quantity','Country, Nation','Now','Left','Three','Mountain','Four','Child','Ear','Time, Hour','Seven','Car, Wheel','Shinto Shrine, Society','Hand','Week','Ten','Leave, Go Out, Conclude','Write','Woman, Female','Small','Little, Small','Above, Over','Eat','New','Person','Water','Live, Grow, Be Born, Raw','West','River','Thousands','First, In the Future','Previous','Foot, Leg, Be Enough, Add','Many','Big, Many','Man','Inside, Center, Among','Long, Leader','Heaven, Sky, Imperial','Shop','Electricity','Earth, Soil','East','Road, Path','Read','South','Two','Day, Sun','Enter, Insert','Year','Buy','White','Eight','Half, Middle, Semi-','Hundreds','Father','Part, Minute, Divide, Understand','Listen, Ask','Mom, Mother','North','Tree, Wood','Book, Source, Main','Every','Ten Thousand, All, Many','Name, Reputation','Eye','Friends','Come, Next, Cause','Stand Up, Establish','Six','Speak, History, Conversation', 'Heart, Spirit']; //significati dei vari kanji
var onyomi = ['アン', 'イチ / イツ', 'イン', 'ウ / ユウ', 'ウ', 'エキ', 'エン', 'カ', 'カ', 'カ / ゲ', 'カ', 'カイ / エ', 'ガイ / ゲ', 'ガク', 'カン / ケン', 'キ / ケ', 'キュウ / ク', 'キュウ', 'ギョ', 'キン / コン', 'クウ', 'ゲツ / ガツ', 'ケン', 'ゲン / ゴン', 'コ', 'ゴ', 'ゴ / コウ', 'ゴ', 'ゴ', 'コウ', 'コウ / ク', 'コウ', 'コウ', 'コク', 'コン / キン', 'サ', 'サン', 'サン', 'シ', 'シ / ス', 'ジ', 'ジ', 'シチ', 'シャ', 'シャ', 'シュ', 'シュウ', 'ジュウ / ジ', 'シュツ', 'ショ', 'ジョ / ニョ', 'ショウ', 'ショウ', 'ショウ / ジョウ', 'ショク', 'シン', 'ジン / ニン', 'スイ', 'セイ / ショウ', 'セイ / サイ', 'セン', 'セン', 'セン', 'ゼン', 'ソク', 'タ', 'ダイ / タイ', 'ダン / ナン', 'チュウ', 'チョウ', 'テン', 'テン', 'デン', 'ド / ト', 'トウ', 'ドウ', 'ドク', 'ナン', 'ニ', 'ニチ / ジツ', 'ニュウ', 'ネン', 'バイ', 'ハク / ビャク', 'ハチ', 'ハン', 'ヒャク', 'フ', 'ブン / ブ / フン', 'ブン / モン', 'ボ', 'ホク', 'ボク / モク', 'ホン', 'マイ', 'マン / バン', 'メイ / ミョウ', 'モク', 'ユウ', 'ライ', 'リツ', 'ロク', 'ワ', 'シン']; //pronuncia Onyomi (音読み) dei caratteri, quella derivata dal cinese
var kunyomi = ['やす (い)', 'ひと (つ)/ ひと-', 'の (む)', 'みぎ', 'あめ', '–', 'まる (い)', 'ひ', 'はな', 'しも / さ (げる) / お (ろす) / く (だる)', 'なに', 'あ (う)', 'そと / ほか / はず (れる) / はず (す)', 'まな (ぶ)', 'あいだ', '–', 'ここの (つ) / ここの-', 'やす (む)', 'さかな / うお', 'かね', 'そら / あ (ける) / から', 'つき', 'み (る) / み (える) / み (せる)', 'い (う)', 'ふる (い)', 'いつ (つ) / いつ-', 'あと / おく (れる) / のち', '–', 'かた (る) / かた (らう)', '–', 'くち', 'い (く) / ゆ (く) / おこな (う)', 'たか (い) / たか (まる) / たか (める)', 'くに', 'いま', 'ひだり', 'みっ (つ) / み-', 'やま', 'よっ (つ) / ゆっ (つ) / よ- / よん-', 'こ', 'みみ', 'とき', 'なな (つ) / なな- / なの-', 'くるま', 'やしろ', 'て', '–', 'とお / と-', 'だ (す) / で (る)', 'か (く)', 'おんな / め', 'ちい (さい) / こ- / お-', 'すこ (し) / すく (ない)', 'うえ / かみ / あ (げる) / あ (がる)', 'た (べる) / く (る) / く (らう)', 'あたら (しい) / あら (た) / にい-', 'ひと', 'みず', 'い (きる) / う (む) / は (やす) / なま / き', 'にし', 'かわ', 'ち', 'さき', 'まえ', 'あし / た (りる) / た (す)', 'おお (い)', 'おう (きい) / おお (い)', 'おとこ', 'なか', 'なが (い)', 'あめ / あま', 'みせ', '–', 'つち', 'ひがし', 'みち', 'よむ', 'みなみ', 'ふた (つ) / ふた-', 'ひ / -か', 'はい (る) / い (る) / い (れる)', 'とし', 'か (う)', 'しろ (い) / しろ', 'やっ (つ) / や (つ) / や- / よう-', 'なか (ば)', '–', 'ちち', 'わ (ける) / わ (かれる) / わ (かる)', 'き (く) / き (こえる)', 'はは', 'きた', 'き / こ', 'もと', '–', '–', 'な', 'め', 'とも', 'く (る) / きた (る) / きた (す)', 'た (つ) / た (てる)', 'むっ (つ) / む (つ) / む / むい', 'はなし / はな (す)', 'こころ']; //pronuncia Kunyomi (訓読み) dei caratteri, quella giapponese
var testoKanji = "Kanji, the intricate characters originating from Chinese script, form an integral part of the Japanese writing system. Representing words, concepts, and names, Kanji carries rich meanings and diverse pronunciations. Learning Kanji is a significant undertaking for those aiming to deepen their understanding of Japanese, as it provides access to a vast repository of expressions and cultural nuances. Mastery of Kanji enhances one's ability to read, write, and appreciate the richness of the Japanese language.";

var i = 0; //indice dell'array 

document.addEventListener("DOMContentLoaded", function() {
    // Trova gli elementi nel DOM
    var kanjiParagrafo = document.getElementById("KanjiText")

    // Aggiorna il testo nei paragrafi
    kanjiParagrafo.textContent = testoKanji;
});



kanji.forEach(element =>{ //per qualunque elemento nell'array 'kanji'

    var table = document.createElement('table'); //creo una variabile con l'elemento HTML <table>
    var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>
    var divBella = document.createElement('div'); //creo una div per inserire i paragrafi
    var p1 = document.createElement('p'); //creo il primo paragrafo
    var p2 = document.createElement('p'); //creo il secondo paragrafo
    var linea = document.createElement('hr'); //creo una linea :)

    var h1Element = document.createElement('h1'); //creo una variabile con l'elemento HTML <h1>
    h1Element.id = 'Kanji'; //l'ID dell'elemento e 'Kanji'
    h1Element.textContent = kanji[i]; //il text content e il kanji puntato dall'indirizzo i

    var h2Element = document.createElement('h2'); //creo una variabile con l'elemento HTML <h2>
    h2Element.id = 'Text'; //l'ID dell'elemento e 'Text'
    h2Element.textContent = significati[i]; //il text content e il significato del kanji puntato dall'indirizzo i

    var textNode1 = document.createTextNode(`Onyomi pronunciation: ${onyomi[i]}`); //creo il textNode1 che contiene la pronuncia Onyomi indicata dall'indice i
    var textNode2 = document.createTextNode(`Kunyomi pronunciation: ${kunyomi[i]}`); //creo il textNode2 che contiene la pronuncia Kunyomi indicata dall'indice i

    p1.appendChild(textNode1); //aggiungo a p1 il textNode1
    p2.appendChild(textNode2); //aggiungo a p2 il textNode2

    divBella.appendChild(p1); //aggiungo p1 alla div
    divBella.appendChild(space); //aggiungo uno spazio alla div
    divBella.appendChild(p2); //aggiungo p2 alla div

    
    var row1 = table.insertRow(); //creo la prima riga della tabella

    var KanjiTabella = row1.insertCell(); //creo il kanji
    KanjiTabella.id = h1Element.id; //gli assegno l'ID di h1 (h1 = kanji)
    KanjiTabella.textContent = h1Element.textContent; //gi assegno il textContent di h1 

    var ParagrafoTabella = row1.insertCell(); //creo il paragrafo
    ParagrafoTabella.id = 'Paragraph'; //gli assegno l'ID di p (descrizione)
    ParagrafoTabella.appendChild(divBella) //aggiungo la div alla tabella

    var row2 = table.insertRow(); //creo la seconda riga della tabella

    var SignificatoTabella = row2.insertCell(); //creo il significato
    SignificatoTabella.textContent = h2Element.textContent; //gli assegno il textContent di h2 (significato)
    SignificatoTabella.id = h2Element.id; //gli assegno l'ID di h2

    linea.size = '5px'; //imposto lo spessore della linea
    linea.color = '#fe7a8f'; //imposto il colore della linea
    //perche sono tagliati???

    document.body.appendChild(table); //aggiungo la tabella al DOM
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM
    document.body.appendChild(linea); //una bellissima linea UwU
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM sotto la linea

    i++; //incremento il puntatore di 1
});



document.addEventListener('DOMContentLoaded', function () {});
