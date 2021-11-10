function showVerticalMessage(str) {
  let result = '';
  if (str.length > 10) {
    str = str.slice(0, 10);
  }
  if (str[0] === 'м') {
    str = str[0].toUpperCase() + str.slice(1);
  }
  for (let char of str) {
    result += char + '\n';
  }
  console.log(result.trim());
}

showVerticalMessage('марафон');
