import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Header"
import DisplayCounter from './DisplayCounter'
import Controls from './Controls'
function App() {

  return (
    <center>
    <div className="px-4 py-5 my-5 text-center">
      <Header></Header>
    <div className="col-lg-12 mx-auto">
      <DisplayCounter></DisplayCounter>
      <Controls></Controls>
    </div>
  </div>
  </center>
  )
}

export default App
