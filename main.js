

function convert() {
    const numberInput = document.getElementById('input').value;
    //.value = access value.

    if (numberInput === '') return alert('Please enter binary number only');

    numberInput.split('').map((char) => {
      if (char !== '1' && char !== '0') {
        return alert('Please enter binary number only');
      }
    })

    const decimal = parseInt(numberInput, 2);
    document.getElementById('answer').value = decimal;
    return true;
  }
