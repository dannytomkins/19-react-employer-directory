import React, { useState, useEffect } from "react";
// import API from "./components/API"
import "./App.css";
import Table from "./components/table"
import Search from "./components/Search"

function App() {
  
  const [people, setPeople] = useState([])
  const [searchName, setSearchName] = useState("")
  const [originalPeople, setOriginalPeople] = useState([])

  useEffect(() => {
    console.log("useEffect engaged")

    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=100")
        const data = await response.json()
        setPeople([...data.results])
        setOriginalPeople([...data.results])
      } catch (e) {
        console.log(e);
      }
    }

    fetchData()

  }, [])

  

  const handleInputChange = event => {
    const {value} = event.target
    setSearchName(value)
    console.log(value)
    
    const newPeople = originalPeople.filter(person => {
      return (
        (person.name.first).toLowerCase().includes(value.toLowerCase()) ||
        (person.name.last).toLowerCase().includes(value.toLowerCase())
    )
    })
    setPeople(newPeople)
  }

 

  return (
    <div>
      {console.log("original", originalPeople)}
      <Search searchName={searchName} handleInputChange={handleInputChange}/>
      <Table  people={people} />
    </div>
  );

}

export default App;