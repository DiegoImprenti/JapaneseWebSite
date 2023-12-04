var intro = "Are you passionate about Japanese culture and you always wanted to learn the language of the Rising Sun? If so, you're in the right place!";
var paragrafoHiragana = "Hiragana is a fundamental Japanese script used for native words, grammar, and verb endings. Its versatility extends to particles and words without kanji. Learning Hiragana is essential for those aiming to read and write Japanese, laying a solid foundation for language exploration.";
var paragrafoKatakana = "Katakana, an essential Japanese script alongside Hiragana, plays a crucial role in the syllabic writing system. Primarily used for foreign loanwords, technical terms, and names, its angular characters offer a distinct visual style. Proficiency in Katakana is vital for a comprehensive grasp of the Japanese writing system, empowering learners to handle a diverse vocabulary, including terms influenced by global languages.";
var paragrafoKanji = "Kanji, rooted in Chinese script, is a key component of Japanese writing. It represents words and concepts with diverse meanings. Mastering Kanji is essential for a comprehensive grasp of Japanese, unlocking a wealth of expressions and cultural nuances";


document.addEventListener("DOMContentLoaded", function() {
    // Trova gli elementi nel DOM
    var hiraganaParagrafo = document.getElementById("HiraganaP");
    var katakanaParagrafo = document.getElementById("KatakanaP");
    var IntroParagrafo = document.getElementById("Intro");
    var kanjiParagrafo = document.getElementById("KanjiP")

    // Aggiorna il testo nei paragrafi
    IntroParagrafo.textContent =  intro;
    hiraganaParagrafo.textContent = paragrafoHiragana;
    katakanaParagrafo.textContent = paragrafoKatakana;
    kanjiParagrafo.textContent = paragrafoKanji;
});

