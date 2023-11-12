// DeepL API 키
const apiKey = '108950b5-4cd5-6a2d-2705-5fd2d3b17d4c:fx';

// API를 호출하는 함수
function translate(text) {
    const url = `https://api.deepl.com/v2/translate?auth_key=${apiKey}&text=${text}&target_lang=KO`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const translatedText = data.translations[0].text;
            displayTranslation(text, translatedText);
        })
        .catch(error => console.error('Error:', error));
}

// 번역 결과를 표시하는 함수
function displayTranslation(originalText, translatedText) {
    const popup = document.createElement('div');
    popup.textContent = translatedText;
    popup.style.position = 'absolute';
    popup.style.backgroundColor = '#fff';
    popup.style.border = '1px solid #000';
    popup.style.padding = '10px';
    popup.style.zIndex = '1000';

    const originalElement = document.querySelector(`[data-original-text="${originalText}"]`);
    originalElement.parentElement.appendChild(popup);
}

// 단어 클릭 이벤트 처리
document.querySelectorAll('.translatable').forEach(element => {
    element.setAttribute('data-original-text', element.textContent);
    element.addEventListener('click', function() {
        const textToTranslate = this.textContent;
        translate(textToTranslate);
    });
});
