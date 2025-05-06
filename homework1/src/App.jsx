import './App.css'
import reactIcon from './assets/react.svg'
import suma from './Suma.jsx'

function App(a, b, c) {
  let a = 1
  let b = 2
  let c = a + b
  return (
    <>
      <h1>
       Олег
      </h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={reactIcon} alt="react" />
      <a href="https://chatgpt.com/">Google</a>
      <p>Сума {a} + {b} = {c}</p>
    </>
  )
}

export default App
