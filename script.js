const quizData = [
    {
        question: '¿En qué año ocurrió la Revolución Rusa?',
        a: '1917',
        b: '1789',
        c: '1945',
        d: '1821',
        correct: 'a',
    },
    {
        question: '¿Cuál es el río más largo del mundo?',
        a: 'Amazonas',
        b: 'Nilo',
        c: 'Misisipi',
        d: 'Yangtsé',
        correct: 'a',
    },
    {
        question: '¿Quién escribió "Cien años de soledad"?',
        a: 'Gabriel García Márquez',
        b: 'Mario Vargas Llosa',
        c: 'Pablo Neruda',
        d: 'Isabel Allende',
        correct: 'a',
    },
    {
        question: '¿Cuál es la montaña más alta del mundo?',
        a: 'Monte Everest',
        b: 'Monte Kilimanjaro',
        c: 'Monte McKinley',
        d: 'Monte Aconcagua',
        correct: 'a',
    },
    {
        question: '¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?',
        a: '1945',
        b: '1919',
        c: '1932',
        d: '1958',
        correct: 'a',
    },
    {
        question: '¿Cuál es la capital de Japón?',
        a: 'Pekín',
        b: 'Seúl',
        c: 'Tokio',
        d: 'Bangkok',
        correct: 'c',
    },
    {
        question: '¿Quién pintó la Mona Lisa?',
        a: 'Vincent van Gogh',
        b: 'Leonardo da Vinci',
        c: 'Pablo Picasso',
        d: 'Michelangelo',
        correct: 'b',
    },
    {
        question: '¿En qué continente se encuentra Egipto?',
        a: 'África',
        b: 'Asia',
        c: 'Europa',
        d: 'América',
        correct: 'a',
    },
    {
        question: '¿Cuál es el océano más grande del mundo?',
        a: 'Océano Pacífico',
        b: 'Océano Atlántico',
        c: 'Océano Índico',
        d: 'Océano Antártico',
        correct: 'a',
    },
    {
        question: '¿Cuál es el país más grande del mundo por superficie?',
        a: 'Estados Unidos',
        b: 'China',
        c: 'Rusia',
        d: 'Brasil',
        correct: 'c',
    },
    {
        question: '¿Quién fue el primer presidente de Estados Unidos?',
        a: 'Thomas Jefferson',
        b: 'George Washington',
        c: 'Abraham Lincoln',
        d: 'John F. Kennedy',
        correct: 'b',
    },
    {
        question: '¿En qué año comenzó la Segunda Guerra Mundial?',
        a: '1935',
        b: '1939',
        c: '1941',
        d: '1945',
        correct: 'b',
    },
    {
        question: '¿Cuál es el elemento químico más abundante en la corteza terrestre?',
        a: 'Oxígeno',
        b: 'Hierro',
        c: 'Carbono',
        d: 'Aluminio',
        correct: 'a',
    },
    {
        question: '¿Quién escribió "Romeo y Julieta"?',
        a: 'Charles Dickens',
        b: 'William Shakespeare',
        c: 'Jane Austen',
        d: 'Fyodor Dostoevsky',
        correct: 'b',
    },
    {
        question: '¿Cuál es el río más largo de América?',
        a: 'Amazonas',
        b: 'Mississippi',
        c: 'Nilo',
        d: 'Yangtsé',
        correct: 'b',
    },
    {
        question: '¿Cuál es el país conocido como la cuna de la civilización?',
        a: 'Egipto',
        b: 'Grecia',
        c: 'China',
        d: 'Irak',
        correct: 'b',
    },
    {
        question: '¿En qué año se firmó la Declaración de Independencia de Estados Unidos?',
        a: '1765',
        b: '1776',
        c: '1789',
        d: '1801',
        correct: 'b',
    },
    {
        question: '¿Cuál es el instrumento musical más antiguo?',
        a: 'Flauta',
        b: 'Arpa',
        c: 'Tambor',
        d: 'Lira',
        correct: 'a',
    },
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answersEl = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

let currentQuestion = 0;
let scrore = 0;


loadQuiz();


function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    console.log(answer);
    if (answer) {

        if (answer === quizData[currentQuestion].correct) {
            scrore++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Tus preguntas correctas son ${scrore}/${quizData.length}</h2> <button onclick="location.reload()">Jugar de Nuevo</button>`;
        }
    }
});