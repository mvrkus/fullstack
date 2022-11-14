import { useState } from 'react'


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const header = 'Give Feedback'
  const stats = 'Stats:'
  const setHyva = () => setGood(good + 1)
  const setNeutraali = () => setNeutral(neutral + 1)
  const setHuono = () => setBad(bad + 1)
  

  return (
    <div>
      <Header header={header}/>
      <div>
        <Button handleClick={() => setHyva()} text="hyvä" />
        <Button handleClick={() => setNeutraali()} text="neutraali" />
        <Button handleClick={() => setHuono()} text="huono" />
      </div>
      <Header header={stats}/>
      <Display text="hyvä" value={good}/>
      <Display text="neutraali" value={neutral}/>
      <Display text="huono" value={bad}/>
    </div>
  )
}

const Display = ({text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Header = ({header}) => <div><h1>{header}</h1></div>

export default App
