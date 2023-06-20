import './App.css';
import Navbar from './Navbar';
import Contribute from './pages/Contribute';
import Database from './pages/Database';
import Home from './pages/Home';
import ResearchService from './pages/ResearchService';
import SyllabusGuide from './pages/SyllabusGuide';
import Team from './pages/Team';
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contribute" element={<Contribute/>}/>
          <Route path="/research-service" element={<ResearchService/>}/>
          <Route path="/research-database" element={<Database/>}/>
          <Route path="/syllabus-guide" element={<SyllabusGuide/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
