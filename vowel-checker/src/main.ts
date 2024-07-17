import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setElements } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form action="" id="vowel-checker-form">
      <h1>Vowel Checker</h1>
      <textarea id="text-to-check"  placeholder="Enter your text here"></textarea>
      <input type="submit" value="count vowels">
      <p id="results">Results</p>
    </form>
  </div>
`

setElements(document.querySelector<HTMLFormElement>("#vowel-checker-form")!,document.querySelector<HTMLLabelElement>("#results")!,
document.querySelector<HTMLTextAreaElement>("#text-to-check")!);

