import { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1231244'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

  const addName = (event) => {
    event.preventDefault()
    
    if(persons.some(checkName) === false && newName != ''){
      
      const personObject = {
        name: newName,
        number: newNumber
        }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      return
    }

    else {
      if (newName === '') {
        alert('Numerolla ei ole nimeä')
        return
      }
      else {
        alert(`Sinulla on jo ystävä nimeltä ${newName}. Älä tutustu uuteen.`)
        return
      }
    }
  }

  const checkName = (person) => newName === person.name;

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )

}

const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

export default App