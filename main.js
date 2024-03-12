document.addEventListener('DOMContentLoaded', function() {
    function chooseTask() {
        do {
            let taskChoice = prompt("Choose one of three options:\n 1 - Palindrome\n 2 - Anagram\n 3 - Who wants to become a milliner");
            
            

            if (taskChoice === null) {
                alert("Vielen Dank! Wir sehen uns wieder!");
                return;
            }
            
            taskChoice = taskChoice.replace(/[^\p{N}]/gu, ''); // если вводила мартышка и случайно нажала лишнее, удалим, оставив только цифры

            switch (taskChoice) {
                case "1":
                    window.task1 && window.task1();
                    break;
                case "2":
                    window.task2 && window.task2();
                    break;
                case "3":
                    window.task3 && window.task3();
                    break;
                default:
                    alert("Wrong! Please, choose 1, 2 or 3");
                    break;
            }
        } while (true);
    }

    chooseTask();
});
