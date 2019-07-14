document.getElementById('add').addEventListener('click', function() {
    const firstNum = document.getElementById('firstNum').value;
    const secondNum = document.getElementById('secondNum').value;
    const result = Number(firstNum) + Number(secondNum)
    document.getElementById('result').value = result;
});

document.getElementById('substract').addEventListener('click', function() {
    const firstNum = document.getElementById('firstNum').value;
    const secondNum = document.getElementById('secondNum').value;
    const result = Number(firstNum) - Number(secondNum)
    document.getElementById('result').value = result;
});

document.getElementById('multiple').addEventListener('click', function() {
    const firstNum = document.getElementById('firstNum').value;
    const secondNum = document.getElementById('secondNum').value;
    const result = Number(firstNum) * Number(secondNum)
    document.getElementById('result').value = result;
});

document.getElementById('divide').addEventListener('click', function() {
    const firstNum = document.getElementById('firstNum').value;
    const secondNum = document.getElementById('secondNum').value;
    const result = Number(firstNum) / Number(secondNum)
    document.getElementById('result').value = result;
});