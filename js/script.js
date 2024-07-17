const INTRO_TEXT = 'I am Ricardo!'
const TIME_DELAY = 100;

/** Get element and run typing effect for text */
function runTypingEffect() {
  const typingElement = document.getElementById('typing-text');

  typeText(INTRO_TEXT, typingElement, TIME_DELAY);
}

/** Given string, html element and second delay, display string one char at a time
 * at time delay in html element
*/
function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
