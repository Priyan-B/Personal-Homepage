import { initFriendshipQuiz } from './friendshipquiz.js';

// Only load the quiz if we're on the home page (where the quiz container exists)
const quizContainer = document.getElementById('quiz-container');
if (quizContainer) {
    initFriendshipQuiz(quizContainer);
}

// Highlight current page in navbar
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = link.getAttribute('href').replace('./', '');
    if (linkPath === currentPath) {
        link.classList.add('active');
    }
});