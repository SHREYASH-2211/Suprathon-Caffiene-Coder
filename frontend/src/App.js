// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import StudentHome from './Student/Home/Home.jsx'
function App() {
  return (
    <Routes>
      <Route path='/home_page' element={<StudentHome/>}/>
    </Routes>
  );
}

export default App;
