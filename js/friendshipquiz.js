const questions = [
    {
        question: "Pineapple on pizza?",
        options: [
            { text: "No, its a crime", correct: false },
            { text: "Absolutely yes, it slaps", correct: true },
            { text: "I don't care", correct: false },
            { text: "Only on Tuesdays", correct: false },
        ],
    },
    {
        question: "Best way to fuel a coding session?",
        options: [
            { text: "Spotify in the background", correct: true },
            { text: "Black coffee, no sugar", correct: false },
            { text: "Energy drinks", correct: false },
            { text: "Just water", correct: false },
        ],
    },
    {
        question: "Pick a backend language:",
        options: [
            { text: "Java", correct: false },
            { text: "Javascript", correct: false },
            { text: "Python", correct: true },
            { text: "C Lang(I'm 60 years old)", correct: false },
        ],
    },
    {
        question: "Who's the GOAT Footballer?",
        options: [
            { text: "2019 Messi", correct: false },
            { text: "2015 Messi", correct: false },
            { text: "2012 Messi", correct: true },
            { text: "Ronaldo(I don't watch football)", correct: false },
        ],
    },
    {
        question: "Ideal Friday night?",
        options: [
            { text: "Doomscrolling for 4 hours", correct: false },
            { text: "Loud club, zero thoughts", correct: false },
            { text: "Asleep by 9pm (respect)", correct: false },
            { text: "Coding a side project with a movie playing", correct: true },
        ],
    },
];

const results = {
    5: {
        rating: "🔥 Best friend material",
        message: "Wow. We're basically the same person. Netflix and code session this weekend?",
    },
    4: {
        rating: "😎 Definitely cool enough",
        message: "Solid taste. I'd grab a coffee with you any day. Welcome to the inner circle.",
    },
    3: {
        rating: "👍 We could be friends",
        message: "Not bad! Mid-tier vibes but I see potential. Hit me up.",
    },
    2: {
        rating: "🤔 Hmm, work on it",
        message: "We have... differences. But I'm not closing the door. Yet.",
    },
    1: {
        rating: "💀 Need more cool points",
        message: "Maybe try again after some character development?",
    },
    0: {
        rating: "🚫 Cannot be friends",
        message: "It's not me. It's definitely you. Try again from the top.",
    },
};

let currentQuestion = 0;
let score = 0;
let containerEl = null;

// Main exported function- called from main.js
export function initFriendshipQuiz(container) {
    containerEl = container;
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

// Render the current question
function showQuestion() {
    const q = questions[currentQuestion];
    const optionsHtml = q.options
        .map(
            (opt, index) =>
                `<button class="quiz-option" data-correct="${opt.correct}" data-index="${index}">
                    ${opt.text}
                </button>`
        )
        .join('');

    containerEl.innerHTML = `
        <p class="quiz-progress">Question ${currentQuestion + 1} of ${questions.length}</p>
        <h3 class="quiz-question">${q.question}</h3>
        <div class="quiz-options">${optionsHtml}</div>
    `;

    // Attach click listeners
    containerEl.querySelectorAll('.quiz-option').forEach(button => {
        button.addEventListener('click', handleAnswer);
    });
}

// Handle answer click
function handleAnswer(event) {
    const wasCorrect = event.target.dataset.correct === 'true';
    if (wasCorrect) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Show the final result
function showResult() {
    const result = results[score] || results[0];

    containerEl.innerHTML = `
        <div class="quiz-result">
            <div class="result-score">${score}/5</div>
            <div class="result-rating">${result.rating}</div>
            <p class="result-message">${result.message}</p>
            <button class="retry-btn" id="retry-btn">Try Again</button>
        </div>
    `;

    document.getElementById('retry-btn').addEventListener('click', () => {
        initFriendshipQuiz(containerEl);
    });
}