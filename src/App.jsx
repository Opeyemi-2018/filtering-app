import React, { useState } from 'react'

let data = [
  { id: 1, name: "opeyemi" },
  { id: 2, name: "odunayo" },
  { id: 3, name: "emmanuel" },
  { id: 4, name: "john" }
]

function App() {
  let [people, setPeople] = useState(data)

  let removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)

    // setPeople((people)=>{
    //     return people.filter((person)=> person.id !== id)
    // })
  }
  return (
    <section style={{ marginTop: '100px' }}>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

let List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person}
          removePerson={removePerson} />
      })}
    </>
  )
}

let SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div style={{
      padding: "0 4px", margin: "10px auto", maxWidth: "500px",
      display: "flex", alignItems: 'center', justifyContent: 'space-between',
      background: "#0c3542", color: 'white', borderRadius: '5px'
    }}>
      <h3>{name}</h3>
      <button style={{
        border: "none", fontWeight: 'bold', color: "#b72522", background: "none",
        backgroundColor: 'white', padding: '3px ', borderRadius: '3px'
      }} onClick={() => removePerson(id)}> remove</button>
    </div>
  )
}

export default App

