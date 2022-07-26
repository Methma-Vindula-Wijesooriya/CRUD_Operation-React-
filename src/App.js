import './App.css';
import Home from './component/Home';
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="main"> 
        <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Create' element={<Create/>}/>
        <Route exact path='/Read' element={<Read/>} />
        <Route exact path='/Update' element={<Update/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
