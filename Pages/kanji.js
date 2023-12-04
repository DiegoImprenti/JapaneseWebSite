var kanji = ['安', '一', '飲', '右', '雨', '駅', '円', '火', '花', '下', '何', '会', '外', '学', '間', '気', '九', '休', '魚', '金', '空', '月', '見', '言', '古', '五', '後', '午', '語', '校', '口', '行', '高', '国', '今', '左', '三', '山', '四', '子', '耳', '時', '七', '車', '社', '手', '週', '十', '出', '書', '女', '小', '少', '上', '食', '新', '人', '水', '生', '西', '川', '千', '先', '前', '足', '多', '大', '男', '中', '長', '天', '店', '電', '土', '東', '道', '読', '南', '二', '日', '入', '年', '買', '白', '八', '半', '百', '父', '分', '聞', '母', '北', '木', '本', '毎', '万', '名', '目', '友', '来', '立', '六', '話']; //Tutti i 103 Kanji del JLPT N5
var significati = ['Peace, Cheap, Safe','One','Drink','Right','Rain','Station','Circle, Yen, Round','Fire','Flower, Bloom','Below, Under','What, How Many, Which','Meet, Come Together, Society','Outside, Other, Disconnect','School, Science, Teaching','Time, Timeframe','Soul, Spirit','Nine','Rest','Fish','Gold, Metal, Money','Sky, Free, Empty','Month, Moon','Look, Be Visible, Show','Word, Speak','Old, Used','Five','After, Behind, Stay Behind','Noon','Language','School','Mouth','Walk, Go, Do, Perform','High, Expensive, Quantity','Country, Nation','Now','Left','Three','Mountain','Four','Child','Ear','Time, Hour','Seven','Car, Wheel','Shinto Shrine, Society','Hand','Week','Ten','Leave, Go Out, Conclude','Write','Woman, Female','Small','Little, Small','Above, Over','Eat','New','Person','Water','Live, Grow, Be Born, Raw','West','River','Thousands','First, In the Future','Previous','Foot, Leg, Be Enough, Add','Many','Big, Many','Man','Inside, Center, Among','Long, Leader','Heaven, Sky, Imperial','Shop','Electricity','Earth, Soil','East','Road, Path','Read','South','Two','Day, Sun','Enter, Insert','Year','Buy','White','Eight','Half, Middle, Semi-','Hundreds','Father','Part, Minute, Divide, Understand','Listen, Ask','Mom, Mother','North','Tree, Wood','Book, Source, Main','Every','Ten Thousand, All, Many','Name, Reputation','Eye','Friends','Come, Next, Cause','Stand Up, Establish','Six','Speak, History, Conversation']; //significati dei vari kanji
var i = 0; //indice dell'array 


kanji.forEach(element =>{ //per qualunque elemento nell'array 'kanji'

    var table = document.createElement('table'); //creo una variabile con l'elemento HTML <table>
    var space = document.createElement('br'); //creo una variabile con l'elemento HTML <br>

    var h1Element = document.createElement('h1'); //creo una variabile con l'elemento HTML <h1>
    h1Element.id = 'Kanji'; //l'ID dell'elemento e 'Kanji'
    h1Element.textContent = kanji[i]; //il text content e il kanji puntato dall'indirizzo i

    var h2Element = document.createElement('h2'); //creo una variabile con l'elemento HTML <h2>
    h2Element.id = 'Text'; //l'ID dell'elemento e 'Text'
    h2Element.textContent = significati[i]; //il text content e il significato del kanji puntato dall'indirizzo i

    var pElement = document.createElement('p'); //creo una variabile con l'elemento HTML <p>
    pElement.id = 'Paragraph'; //l'ID e 'Paragraph'
    pElement.textContent = 'Questo è un esempio di testo nel paragrafo.'; //il text content e il paragrafo puntato dall'indirizzo i (ancora da fare)
        
    var row1 = table.insertRow(); //creo la prima riga della tabella

    var KanjiTabella = row1.insertCell(); //creo il kanji
    KanjiTabella.id = h1Element.id; //gli assegno l'ID di h1 (h1 = kanji)
    KanjiTabella.textContent = h1Element.textContent; //gi assegno il textContent di h1 

    var ParagrafoTabella = row1.insertCell(); //creo il paragrafo
    ParagrafoTabella.id = pElement.id; //gli assegno l'ID di p (descrizione)
    ParagrafoTabella.textContent = pElement.textContent; //gli assegno il textContent di p

    var row2 = table.insertRow(); //creo la seconda riga della tabella

    var SignificatoTabella = row2.insertCell(); //creo il significato
    SignificatoTabella.textContent = h2Element.textContent; //gli assegno il textContent di h2 (significato)
    SignificatoTabella.id = h2Element.id; //gli assegno l'ID di h2

    document.body.appendChild(table); //aggiungo la tabella al DOM
    document.body.appendChild(space); //aggiungo lo spazio vuoto al DOM

    i++;
});



document.addEventListener('DOMContentLoaded', function () {});
