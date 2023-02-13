function getInputValue(inputId) {

    const inputAmount = document.getElementById(inputId);
    const input = inputAmount.value;
    const newInput = parseFloat(input);
    inputAmount.value = '';

    return newInput;



}

function getElementValue(elementId) {

    const elementText = document.getElementById(elementId);
    const element = elementText.innerText;
    const elementValue = parseFloat(element);
    return elementValue;

}

function setValue(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}