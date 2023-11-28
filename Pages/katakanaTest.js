function cambiaImmagine() 
{
    var immagine = document.getElementById("HiraganaPicture");
    if (isPrimaImmagine) {
        immagine.src = "../Images/test2.png";
    } else {
        immagine.src = "../Images/test.jpg";
    }
    isPrimaImmagine = !isPrimaImmagine;
}