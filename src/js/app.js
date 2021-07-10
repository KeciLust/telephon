export default function telephon(num) {
  let newNum = num.split(/[^+0-9]/i);
  if (/^8/.test(num)) {
    newNum.shift();
    newNum.unshift('+7');
  }
  newNum = newNum.join('');

  return newNum;
}
