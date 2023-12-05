var testoKatakana = "Hiragana is one of the fundamental Japanese scripts, comprising characters that represent syllables and are used for native Japanese words and grammatical elements. Hiragana is versatile and is often employed for verb and adjective endings, particles, and words without kanji representations. Learning Hiragana is a crucial step for anyone aspiring to read and write in Japanese, providing a solid foundation for delving deeper into the language's complexities";

document.addEventListener("DOMContentLoaded", function() {
    // Trova l'elemento nel DOM
    var testo = document.getElementById('HiraganaText');

    // Aggiorna il testo nei paragrafi
    testo.textContent = testoKatakana;
});
