import { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'
    }
  ]) 
  const [newName, setNewName] = useState('')
  

  const addName = (event) => {
    event.preventDefault()
    
    if(persons.some(checkName) === false){
      
      const personObject = {
        name: newName
        }
      setPersons(persons.concat(personObject))
      setNewName('')
      return
    }

    else {
      alert(`Sinulla on jo ystävä nimeltä ${newName}. Älä tutustu uuteen.`)
      return
    }
  }

  const checkName = (person) => newName === person.name;

  const handleNewName = (event) => {
    
    setNewName(event.target.value)
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
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
    <li>{person.name}</li>
  )
}

export default App