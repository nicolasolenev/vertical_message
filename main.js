function showVerticalMessage(str) {
  let result = str.slice(0, 10);
  if (result.startsWith('м')) {
    result = result[0].toUpperCase() + result.slice(1);
  }
  for (let char of result) {
    console.log(char);
  }
}
