import './App.css'
import reactIcon from './assets/react.svg'
import suma from './Suma.jsx'

function App() {
  return (
    <>
      <h1>
       Олег
      </h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={reactIcon} alt="react" />
      <a href="https://chatgpt.com/">Google</a>
      <p>{suma(4, 5)}</p>
    </>
  )
}

export default App
