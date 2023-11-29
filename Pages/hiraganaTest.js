//var kana = ['a', 'i', 'u', 'e', 'o'];

var kana = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo', 'ga', 'gi', 'gu', 'ge', 'go', 'za', 'ji', 'zu', 'ze', 'zo', 'da', 'de', 'do', 'ba', 'bi', 'bu', 'be', 'bo', 'pa', 'pi', 'pu', 'pe', 'po',];
var kanaLetti = []; //kana che sono gia stati "utilizzati"
var kanaCorretti = []; //array dei kana che erano corretti
var kanaSbagliati = []; //array dei kana che sono stati sbagliati


function kanaCasuale() 
{
    return Math.floor(Math.random() * kana.length);; //creo un random che sceglie un indice dell'array kana
}

function primoKana() 
{
    var immagine = document.getElementById("HiraganaPicture"); //creo l'elemento immagine
    var kanaRisultato = kana[kanaCasuale()]; //utilizzo il metodo kanaCasuale per avere un kana random
    var risultato = `../Images/Hiragana/${kanaRisultato}.png`; //ho l'indirizzo dell'immagine del kana random che ho generato prima
    console.log(risultato); //debug
    
    if(!kanaLetti.includes(kanaRisultato)) //se kanaLetti non contiene il kana generato randomicamente
    {
        kanaLetti.push(kanaRisultato); //aggiungo il kana all'array di quelli letti
        immagine.src = risultato; //applico il risultato ad immagine, cambiandola
    }
    else //altrimenti
    {
        if(kana.length !== kanaLetti.length) //se la lunghezza di kanaLetti non e uguale a quella di kana
        {
            primoKana(); //riutilizzo la funzione (in maniera ricorsiva)
        }
        else //altrimenti
        {
            immagine.src = '../Images/test2.png'; //imposta l'immagine a test2 (debug)
        }
    }
    
}

function tagliaStringa(testo)
{
    var parti = testo.split('/'); //creo un array diviso ogni '/'
    var parteFinale = parti.pop(); //prendo l'ultima parte dell'array (dopo l'ultima barra obliqua)
    var kanaFinale = parteFinale.split('.')[0]; //rimuovo l'estensione del file (ad esempio, ".png")
    console.log(kanaFinale); //debug
    return kanaFinale; //invio kanaFinale come risultato dell'operazione
}


function controllaTesto() {
    var testoInserito = document.getElementById("TextBox").value; //valore inserito nella textBox
    var kanaIndirizzo = document.getElementById("HiraganaPicture").src; //ottengo l'indirizzo dell'immagine attualmente utilizzata
    var kanaImmagine = tagliaStringa(kanaIndirizzo); //funzione tagliaStringa applicata a tutto l'indirizzo dell'immagine per ottenere la lettera attuale
    var immagine = document.getElementById("HiraganaPicture"); //copio l'immagine per modificarla con canva

    var immagineNormale = new Image();
    immagineNormale.src = `../Images/Hiragana/${kanaImmagine}.png`; //creo una copia della vecchia immagine per poterla riapplicare dopo

    var canvas = document.createElement("canvas"); //creo l'elemento canvas
    canvas.width = immagineNormale.width; //ottengo le dimensioni dell'immagine originale (altezza e larghezza)
    canvas.height = immagineNormale.height;

    var context = canvas.getContext("2d"); //ottengo un rendering 2D dell'immagine

    context.drawImage(immagineNormale, 0, 0); //disegno l'immagine sul canva

    if (testoInserito.toLowerCase() === kanaImmagine.toLowerCase()) { //controllo che il testo iserito (dopo averlo trasformato in lowercase per comodita) sia uguale al kana rappresentato (sempre in lowercase per sicurezza)
        console.log("Il testo è corretto!"); //debug

        if(!kanaCorretti.includes(kanaImmagine) && !kanaSbagliati.includes(kanaImmagine)) //se kanaCorretti non contiene kanaImmagine e kanaSbagliati non contiene kanaImmagine
        {
            kanaCorretti.push(kanaImmagine);
            context.globalCompositeOperation = "source-in"; //le modifice al canva avverranno sui pixel "gia disegnati"
            context.fillStyle = "#00d624"; //imposta il colore per le modifiche successive a verde 
            context.fillRect(0, 0, canvas.width, canvas.height); //colora tutto il canva
            context.globalCompositeOperation = "source-over"; //cambio le modifiche per applicarle sui pixel esterni
        
            immagine.src = canvas.toDataURL(); //carico il canva al posto dell'immagine

            setTimeout(function () { //dopo 1 secondo, verra ripristinata l'immagine con quella normale e successivamente invocato il metodo 'primoKana'
                immagine.src = immagineNormale.src; //ripristino l'immagine con l'originale 
                primoKana(); //chiamo il metodo
            }, 1000);

            document.getElementById("TextBox").value = ""; //svuoto il contenuto della textBox
        }
        else //altrimenti
        {
            context.globalCompositeOperation = "source-in"; //le modifice al canva avverranno sui pixel "gia disegnati"
            context.fillStyle = "#00d624"; //imposta il colore per le modifiche successive a verde 
            context.fillRect(0, 0, canvas.width, canvas.height); //colora tutto il canva
            context.globalCompositeOperation = "source-over"; //cambio le modifiche per applicarle sui pixel esterni
        
            immagine.src = canvas.toDataURL(); //carico il canva al posto dell'immagine

            setTimeout(function () { //dopo 1 secondo, verra ripristinata l'immagine con quella normale e successivamente invocato il metodo 'primoKana'
                immagine.src = immagineNormale.src; //ripristino l'immagine con l'originale 
                primoKana(); //chiamo il metodo
            }, 1000);

            document.getElementById("TextBox").value = ""; //svuoto il contenuto della textBox
        }
    } 
    else //altrimenti
    {
        console.log("Il testo non è corretto. Riprova."); //debug

        if(!kanaSbagliati.includes(kanaImmagine)) //se kanaSbagliati non contiene kanaImmagine
        {
            kanaSbagliati.push(kanaImmagine); //aggiungo kanaImmagine all'array di quelli sbagliati

            context.globalCompositeOperation = "source-in"; //le modifice al canva avverranno sui pixel "gia disegnati"
            context.fillStyle = "red"; //imposta il colore per le modifiche successive rosso 
            context.fillRect(0, 0, canvas.width, canvas.height); //colora tutto il canva
            context.globalCompositeOperation = "source-over"; //cambio le modifiche per applicarle sui pixel esterni
        
            immagine.src = canvas.toDataURL(); //carico il canva al posto dell'immagine

            setTimeout(function () { //ripristino l'immagine a quella normale dopo 1 secondo
                immagine.src = immagineNormale.src;
            }, 1000);
            document.getElementById("TextBox").value = ""; //svuoto il contenuto della textBox
        }
        else //altrimenti
        {
            context.globalCompositeOperation = "source-in"; //le modifice al canva avverranno sui pixel "gia disegnati"
            context.fillStyle = "red"; //imposta il colore per le modifiche successive rosso 
            context.fillRect(0, 0, canvas.width, canvas.height); //colora tutto il canva
            context.globalCompositeOperation = "source-over"; //cambio le modifiche per applicarle sui pixel esterni
        
            immagine.src = canvas.toDataURL(); //carico il canva al posto dell'immagine

            setTimeout(function () { //ripristino l'immagine a quella normale dopo 1 secondo
                immagine.src = immagineNormale.src;
            }, 1000);
            document.getElementById("TextBox").value = ""; //svuoto il contenuto della textBox            
        }

        
    }
}
