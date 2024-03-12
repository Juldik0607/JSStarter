const questions = [
    
    {
        "question": "Що таке HTML?",
        "options": ["Мова програмування", "Мова розмітки гіпертексту", "Стильовий файл", "Протокол передачі даних"],
        "correctAnswer": "Мова розмітки гіпертексту",
        "prize": 500
    },
    {
        "question": "Який елемент використовується для створення посилань в HTML?",
        "options": ["<link>", "<a>", "<href>", "<nav>"],
        "correctAnswer": "<a>",
        "prize": 1000
    },
    {
        "question": "Який з цих селекторів CSS вибере всі елементи <p> на сторінці?",
        "options": ["#p", ".p", "p", "*p"],
        "correctAnswer": "p",
        "prize": 2000
    },
    {
        "question": "Як оголосити змінну в JavaScript?",
        "options": ["int myVar", "variable myVar", "v myVar", "let myVar"],
        "correctAnswer": "let myVar",
        "prize": 3000
    },
    {
        "question": "Яке властивість CSS використовується для зміни кольору тексту елемента?",
        "options": ["font-color", "text-color", "color", "text-style"],
        "correctAnswer": "color",
        "prize": 5000
    },
    {
        "question": "Як у JavaScript створити масив?",
        "options": ["let myArray = []", " myArray = new Array()", "Обидва варіанти вірні", "Жоден з варіантів"],
        "correctAnswer": "let myArray = []",
        "prize": 8000
    },
    {
        "question": "Який тег HTML використовується для визначення внутрішньої таблиці стилів?",
        "options": ["<css>", "<style>", "<script>", "<styles>"],
        "correctAnswer": "<style>",
        "prize": 10000
    },
    {
        "question": "Яке ключове слово використовується для визначення констант у JavaScript?",
        "options": ["const", "constant", "let", "var"],
        "correctAnswer": "const",
        "prize": 13000
    },
    {
        "question": "Як у HTML додати коментар?",
        "options": ["// Це коментар //", "<!-- Це коментар -->", "/* Це коментар */", "# Це коментар #"],
        "correctAnswer": "<!-- Це коментар -->",
        "prize": 15000
    },
    {
        "question": "Який з цих методів JavaScript можна використовувати для перетворення JSON в об'єкт?",
        "options": ["JSON.parse()", "JSON.toObject()", "JSON.fromString()", "JSON.convert()"],
        "correctAnswer": "JSON.parse()",
        "prize": 25000
    },
    {
        "question": "Що робить директива 'use strict' у JavaScript?",
        "options": ["Вмикає строгий режим виконання коду", "Обмежує використання строгих типів даних", "Дозволяє використовувати строгу типізацію", "Нічого з переліченого"],
        "correctAnswer": "Вмикає строгий режим виконання коду",
        "prize": 50000
    },
    {
        "question": "Який атрибут використовується в HTML для перевірки поля форми на наявність значення?",
        "options": ["placeholder", "validate", "required", "check"],
        "correctAnswer": "required",
        "prize": 100000
    },
    {
        "question": "Який з цих елементів HTML5 призначений для відтворення відео?",
        "options": ["<video>", "<media>", "<audio>", "<movie>"],
        "correctAnswer": "<video>",
        "prize": 250000
    },
    {
        "question": "Як у CSS задати зображення фоном для елемента?",
        "options": ["background-url", "background-image", "background", "image-background"],
        "correctAnswer": "background-image",
        "prize": 500000
    },
    {
        "question": "Яка властивість JavaScript дозволяє перевірити, чи підтримує браузер cookies?",
        "options": ["navigator.cookie", "browser.cookies", "document.cookie", "navigator.cookieEnabled"],
        "correctAnswer": "navigator.cookieEnabled",
        "prize": 1000000
    }
];

function playGame() {
    let totalPrize = 0;
    let fixedPrize = 0; 

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const userAnswer = prompt(`${q.question}\nA: ${q.options[0]}\nB: ${q.options[1]}\nC: ${q.options[2]}\nD: ${q.options[3]}`);

        if (userAnswer === null) {
            alert("Game over. Your winnings: " + totalPrize);
            return;
        }

        let correctOption = 0; // Инициализируем переменную для хранения номера правильного варианта ответа

       // Используем обычный цикл for для перебора вариантов ответов
        for (let j = 0; j < q.options.length; j++) {
           if (q.options[j] === q.correctAnswer) {
                 correctOption = j + 1; // Прибавляем 1, потому что нумерация ответов начинается с 1
                 break; // Прерываем цикл, так как правильный ответ найден
            }

            console.log(correctOption);
}
        //const correctOption = q.options.findIndex(option => option === q.correctAnswer) + 1;
       
        if (userAnswer.toUpperCase() === ["A", "B", "C", "D"][correctOption - 1]) {
            totalPrize = q.prize;

           
            if (i == 4 || i == 9 || i == 14) {
                fixedPrize = totalPrize;
            }

            if (!confirm("Yes! Your winnings: " + totalPrize + ". Would you like to continue?")) {
                alert("Your total winnings: " + totalPrize);
                return;
            }
        } else {
          
            alert("You are wrong(! Game over. Your winnings: " + fixedPrize);
            return;
        }
    }

    alert("Congratulations! You have answered all the questions. Your final winnings: " + totalPrize);
}


window.task3 = playGame;
