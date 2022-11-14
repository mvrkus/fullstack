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
    <table>
      <tbody>
        <tr>
          <td><StatisticsLine text="hyvä"/></td>
          <td><StatisticsLine value={good}/></td>
        </tr>
        <tr>
          <td><StatisticsLine text="neutraali"/></td>
          <td><StatisticsLine value={neutral}/></td>
        </tr>
        <tr>
          <td><StatisticsLine text="huono"/></td>
          <td><StatisticsLine value={bad}/></td>
        </tr>
        <tr>
          <td><StatisticsLine text="yhteensä"/></td>
          <td><StatisticsLine value={good + neutral + bad}/></td>
        </tr>
        <tr>
          <td><StatisticsLine text="keskiarvo"/></td>
          <td><StatisticsLine value={(good-bad) / (good + neutral + bad)}/></td>
        </tr>
        <tr>
          <td><StatisticsLine text="positiivisia"/></td>
          <td><StatisticsLine value={good / (good + neutral + bad) * 100} text2="%"/></td>
        </tr>
      </tbody>
    </table>
    
  )
}


const StatisticsLine = ({text, value, text2}) => {
  return (
    <div>
      {text} {value} {text2}
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
