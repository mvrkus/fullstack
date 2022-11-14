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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0){
    return (
      <div>
        tilastot näytetään tässä
      </div>
    )
  }

  
  return (
    <div>
      <StatisticsLine text="hyvä" value={good}/>
      <StatisticsLine text="neutraali" value={neutral}/>
      <StatisticsLine text="huono" value={bad}/>
      <StatisticsLine text="yht" value={good + neutral + bad}/>
      <StatisticsLine text="ka" value={(good-bad) / (good + neutral + bad)}/>
      <StatisticsLine text="positiivisia" value={good / (good + neutral + bad) * 100} text2="%"/>
    </div>
  )
}


const StatisticsLine = ({text, value, text2}) => {
  return (
    <div>
      <p>{text} {value} {text2}</p>
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
