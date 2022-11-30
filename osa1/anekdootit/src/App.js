import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const handleSeuraava = () => {
    setSelected(Math.floor(Math.random()* anecdotes.length))
  }

  const handleAanestys = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    console.log(votesCopy)
    setVotes(votesCopy)
  }

  return (
    
    <div>
      <h2>Päivän anekdootti</h2>
      <p>{anecdotes[selected]}</p>
      <div>
        <Display aania={votes[selected]} text="Tällä anekdootilla on ääniä" />
        <Button onClick = {handleSeuraava} text="Next anecdote" />
        <Button onClick = {handleAanestys} text="Vote"/>
      </div>
      <Statistics selected={selected} anecdotes={anecdotes} votes={votes} text="Anekdootti jolla eniten ääniä:" text2="anekdootilla ääniä: "/>
    </div>
  )
}

const Statistics = ({anecdotes, votes, text, text2}) => {
  let suurinAanimaara = Math.max(...votes)
  
  if (suurinAanimaara === 0){
    return (
      <div>
        <p>"Ei vielä yhtään ääniä"</p>
      </div>
    )
  }

  console.log(suurinAanimaara)
  const voittaja = anecdotes[votes.indexOf(suurinAanimaara)]

  return (
    <div>
      <p>{text} {voittaja}</p>
      <p>{text2} {suurinAanimaara}</p>
    </div>
  )
}

const Display = ({aania, text, text2}) => {
  return (
    <div>
      <p>{text} {aania} {text2}</p>
    </div>
  )
}


const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App