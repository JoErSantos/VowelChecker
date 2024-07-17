let wordCheckerForm: HTMLFormElement;
let resultsLabel: HTMLLabelElement;
let textBox: HTMLTextAreaElement;

let vowelsCounted: number;

export function setElements(form: HTMLFormElement, results: HTMLLabelElement, text: HTMLTextAreaElement) {
  wordCheckerForm = form;
  resultsLabel = results;
  textBox = text;

  wordCheckerForm.addEventListener("submit", (e) => submitHandler(e))
}

function submitHandler(event: any): void{
  event.preventDefault();
  countVowels();
  showResults();
}

function countVowels(): void{
  vowelsCounted = 0;

  for(let i = 0;  i < textBox.value.length ; i++)
  {
    if(textBox.value.charAt(i) === 'a' || textBox.value.charAt(i) === 'e' || textBox.value.charAt(i) === 'i' || 
    textBox.value.charAt(i) === 'o' || textBox.value.charAt(i) === 'u' || 
    textBox.value.charAt(i) === 'A' || textBox.value.charAt(i) === 'E' || textBox.value.charAt(i) === 'I' || 
    textBox.value.charAt(i) === 'O' || textBox.value.charAt(i) === 'U')
    {
      vowelsCounted++;
    }
  }
}

function showResults(): void{
  resultsLabel.textContent = `Total vowels: ${vowelsCounted}`
}