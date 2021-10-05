let words = document.getElementById("words").innerText;
let text = document.getElementById("textarea");
let btnAdd = document.getElementById('add-btn');
let btnReset = document.getElementById('reset-btn');
let btnCenzor = document.getElementById('cenzor-btn');
btnAdd.addEventListener('click', function () {
    if (document.getElementById('word-impt').value.length >= 1) {
        if (words.length < 1) {
            words = words + ' ' + document.getElementById('word-impt').value;
        }
        else {
            words = words + ', ' + document.getElementById('word-impt').value;
        }
        document.getElementById("words").innerText = words;
        document.getElementById('word-impt').value = '';
    }
    else {
        document.getElementById('word-impt').placeholder = 'Please write a word!';
        document.getElementById('word-impt').style.borderColor = 'red';
    }
});
document.getElementById('word-impt').addEventListener('blur', function () {
    if (document.getElementById('word-impt').value.length > 1) {
        document.getElementById('word-impt').style.borderColor = 'lightgray';
    }
});
document.getElementById('textarea').addEventListener('blur', function () {
    if (text.value.length > 1) {
        document.getElementById('textarea').style.borderColor = 'lightgray';
    }
});
btnReset.addEventListener('click', function () {
    document.getElementById("words").innerText = '';
    document.getElementById('textarea').style.borderColor = 'lightgray';
    document.getElementById('textarea').value = '';
    words = '';
});
btnCenzor.addEventListener('click', function () {
    if (document.getElementById('textarea').value.length < 1) {
        document.getElementById('textarea').placeholder = 'Please write a text!';
        document.getElementById('textarea').style.borderColor = 'red';
    }
    else {
        words = words.replace(/\s+/g, '');
        let arrWord = words.split(",");
        let arrText = text.value.split(" ");
        for (let i = 0; i < arrText.length; i++) {
            if (arrWord.includes(arrText[i].toLocaleLowerCase()) == true) {
                let stars = '';
                for (let s = 0; s < arrText[i].length; s++) {
                    stars = stars + '*';
                }
                arrText[i] = stars;
                document.getElementById('textarea').style.borderColor = 'green';
            }
        }
        text.value = arrText.join(' ');
        console.log(text);
        console.log(arrText);
        console.log(arrWord);
    }
});
