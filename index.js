function disemvowel(str) {
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let strArry = str.split('');
  let returnArry = strArry.map((c) => {
    if (vowel.includes(c.toLowerCase())) {
      return '';
    } else {
      return c;
    }
  });
  return returnArry.join('');
}

console.log(disemvowel('This website is for losers LOL!'));
