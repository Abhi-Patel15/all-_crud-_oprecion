import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import AddEdeit from "./CRUD/AddEdeit";
import Home from "./CRUD/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/addlist" element={<AddEdeit/>}></Route>
        <Route exact path="/edite" element={<AddEdeit/>}></Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
