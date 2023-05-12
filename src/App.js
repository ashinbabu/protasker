import Register from './Register';
import Login from './Login';
import { Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
    </main>
  );
}

export default App;