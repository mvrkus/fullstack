
const Course = ({ course }) => {
  return (
    <li>
      <Header name={course.name} />
      <Content parts={course.parts} />  
    </li>
  )
    
}

const Header = ({ name }) => {
  return (
      <h2>{name}</h2>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <ul>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
        <Total parts={parts} />
      </ul>
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <h4>Total number of exercises: {parts.reduce((sum, part) => sum + part.exercises, 0)}</h4>
  )
}

const Part = ({ part }) => {
  return (
    <li>{part.name} {part.exercises}</li>
  )
}

export default Course