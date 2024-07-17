let wordCheckerForm: HTMLFormElement;
let resultsLabel: HTMLLabelElement;
let textBox: HTMLTextAreaElement;

export function setElements(form: HTMLFormElement, results: HTMLLabelElement, text: HTMLTextAreaElement) {
  wordCheckerForm = form;
  resultsLabel = results;
  textBox = text;

  wordCheckerForm.addEventListener("submit", (e) => submitHandler(e))
}

function submitHandler(event: any): void{
  event.preventDefault();
  console.log(textBox.value)
}

function countVowels(){
  
}