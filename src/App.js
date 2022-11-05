import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./component/side-bar/Sidebar";
import"./component/side-bar/index.css"
import"./App.css"
function App() {
  return (
<Router>
<Sidebar/>
   

</Router>
  );
}

export default App;
