
import "./app.css"
import Card from "./components/Card"
function App() {
  let myObj = {
    username: "XYZ",
    age: 12
  }

  let newArr=[1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card username="ChaiAurCode" someObject={myObj} someArr={newArr} btnText="Click me"/>
      <Card username="XYZ" />
    </>
  )
}

export default App
