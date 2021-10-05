let words = (<HTMLInputElement>document.getElementById("words")).innerText;
let text: HTMLTextAreaElement = document.getElementById("textarea") as HTMLTextAreaElement;
let btnAdd: HTMLElement = document.getElementById('add-btn') as HTMLElement;
let btnReset: HTMLElement = document.getElementById('reset-btn') as HTMLElement;
let btnCenzor: HTMLElement = document.getElementById('cenzor-btn') as HTMLElement;
btnAdd.addEventListener('click', function () {
  if ((<HTMLInputElement>document.getElementById('word-impt')).value.length >= 1) {
    if (words.length < 1) {
      words = words + ' ' + (<HTMLInputElement>document.getElementById('word-impt')).value;
    } else {
      words = words + ', ' + (<HTMLInputElement>document.getElementById('word-impt')).value;
    }
    (<HTMLInputElement>document.getElementById("words")).innerText = words;
    (<HTMLInputElement>document.getElementById('word-impt')).value = ''
   
  } else {
    (<HTMLInputElement>document.getElementById('word-impt')).placeholder = 'Please write a word!'
    document.getElementById('word-impt').style.borderColor = 'red';
  }
});
document.getElementById('word-impt').addEventListener('blur',function(){
  if((<HTMLInputElement>document.getElementById('word-impt')).value.length > 1){
    document.getElementById('word-impt').style.borderColor = 'lightgray';
  }
})

document.getElementById('textarea').addEventListener('blur',function(){
  if(text.value.length > 1){
    document.getElementById('textarea').style.borderColor = 'lightgray';
  }
})

btnReset.addEventListener('click', function () {
  (<HTMLInputElement>document.getElementById("words")).innerText = '';
  document.getElementById('textarea').style.borderColor = 'lightgray';
  (<HTMLInputElement>document.getElementById('textarea')).value = '';
  words = '';
});
btnCenzor.addEventListener('click', function () {
  if ((<HTMLInputElement>document.getElementById('textarea')).value.length < 1) {
    (<HTMLInputElement>document.getElementById('textarea')).placeholder = 'Please write a text!'
    document.getElementById('textarea').style.borderColor = 'red';
  } else {
    words = words.replace(/\s+/g, '')
    let arrWord: Array<string> = words.split(",");
    let arrText: Array<string> = text.value.split(" ");
    for (let i = 0; i < arrText.length; i++) {
      if (arrWord.includes(arrText[i].toLocaleLowerCase()) == true) {
        let stars: string = '';
        for (let s = 0; s < arrText[i].length; s++) {
          stars = stars + '*';
        }
        arrText[i] =  stars;
        document.getElementById('textarea').style.borderColor = 'green';
  }
    }
    text.value= arrText.join(' ') 
    console.log(text);
    console.log(arrText);
    console.log(arrWord);
  }

})