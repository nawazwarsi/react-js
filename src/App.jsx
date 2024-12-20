import { Fragment } from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Table from "./components/Table"

function App() {
  const items = ["A","B","C","D","E","F"];
  return (
    <div>
      <Navbar/>
      <Table items={items} heading="Dynamic Lists"/>
    {/* <h1 className="text-4xl text-yellow-500 font-extrabold">Hello World</h1> */}
    <Footer/>
    </div>
  )
}

export default App
