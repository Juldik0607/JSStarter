function task1() {
    function isPalindrome(str) {
        let cleanedStr = str.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();
        let reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    }

    let userInput = prompt("Введите строку для проверки на палиндром:");
    if (userInput === null) {
        alert("Операция отменена пользователем.");
        return;
    }

    let result = isPalindrome(userInput);
    alert(result ? "Строка является палиндромом." : "Строка не является палиндромом.");
}

window.task1 = task1; // Делаем функцию доступной глобально
