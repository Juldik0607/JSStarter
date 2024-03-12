function task2() { //убираем все символы, не являющиеся буквами или цифрами и преобразуем строку в строчные буквы
    
    function normalizeString(str) {
        return str.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase().split('').sort().join(''); // обеспечиваем поддержку полного юникода, а не только латиницы
    }

    let str1 = prompt("Please, enter first string:");

    if (str1 === null) {
        alert("Operation is canceled by user.");
        return;
    }

    let str2 = prompt("Please, enter second string:");

    if (str2 === null) {
        alert("Operation is canceled by user.");
        return;
    }

    let result = normalizeString(str1) === normalizeString(str2);
    alert(result ? "This strings are anagrams." : "Strings are not anagrams.");
}

window.task2 = task2; 
