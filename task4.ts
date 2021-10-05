function getSqrt(number: number) {
  if (arguments.length == 0) {
    console.log('Будь ласка, введіть число!')
    return
  }
  if (typeof number != 'number') {
    console.log('Повинно бути числове значення')
    return
  }
  (number >= 1) ? console.log('Квадратний корінь ' + number + ' дорівнює ' + Math.sqrt(number)) : console.log('Введіть додатнє число');
};
getSqrt(9);
getSqrt(0);
getSqrt('dklldl');
getSqrt();