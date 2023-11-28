var kana = ['a', 'i', 'u', 'e', 'o'];
var isPrimaImmagine = true;



function kanaCasuale() 
{
    return Math.floor(Math.random() * kana.length);;
}

function primoKana() 
{
    var immagine = document.getElementById("HiraganaPicture");
    var risultato = `../Images/Hiragana/${kana[kanaCasuale()]}.png`; // Aggiunto () dopo kanaCasuale
    console.log(risultato);
    immagine.src = risultato;
}

function tagliaStringa(testo)
{
    var parti = testo.split('/');
    var parteFinale = parti.pop(); // Prendo l'ultima parte dell'array (dopo l'ultima barra obliqua)
    var kanaFinale = parteFinale.split('.')[0]; // Rimuovi l'estensione del file (ad esempio, ".png")
    console.log(kanaFinale);
    return kanaFinale;
}

function controllaTesto() 
{
    var testoInserito = document.getElementById("TextBox").value;

    var kanaIndirizzo = document.getElementById("HiraganaPicture").src;

    var kanaImmagine = tagliaStringa(kanaIndirizzo); 

    if (testoInserito.toLowerCase() === kanaImmagine.toLowerCase()) {
        console.log("Il testo è corretto!");
        primoKana();
    } else {
        console.log("Il testo non è corretto. Riprova.");
        // Puoi aggiungere un avviso o un'altra azione qui
    }
}