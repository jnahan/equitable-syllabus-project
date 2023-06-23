import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Contribute from './pages/Contribute/Contribute';
import ResearchService from './pages/ResearchService/ResearchService';
import Database from './pages/Database/Database';
import SyllabusGuide from './pages/SyllabusGuide/SyllabusGuide';
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
      <Footer/>
    </div>
  );
}

export default App;
