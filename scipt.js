function appendValue(value) {
    document.getElementById('display').value += value;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}