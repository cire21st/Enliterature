// deepl.js

// Create a DeepL translator object
const translator = new DeepL({
  authKey: "108950b5-4cd5-6a2d-2705-5fd2d3b17d4c:fx",
});

// Translate a word to a given target language
async function translateWord(word, targetLanguage) {
  const response = await translator.translate({
    text: word,
    target_lang: targetLanguage,
  });
  return response.translations[0].text;
}

// Add a click event listener to all translatable words
document.querySelectorAll(".translatable").forEach((element) => {
  element.addEventListener("click", async () => {
    // Get the target language from the user's browser settings
    const targetLanguage = navigator.language;

    // Translate the word to the target language
    const translation = await translateWord(element.textContent, targetLanguage);

    // Display the translation in a tooltip
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = translation;
    document.body.appendChild(tooltip);

    // Position the tooltip next to the translatable word
    tooltip.style.top = `${element.offsetTop + element.offsetHeight}px`;
    tooltip.style.left = `${element.offsetLeft}px`;

    // Remove the tooltip after a few seconds
    setTimeout(() => {
      document.body.removeChild(tooltip);
    }, 3000);
  });
});
