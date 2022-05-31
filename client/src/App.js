import './App.css';
import Header from './Components/Header';
import Infor from './Components/Infor';
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [lista, setLista] = useState([])

  const API = "localhost:5000"
  axios.get(API).then()

  return (
    <div className="App">
      <Header/>
      <Infor/>
    </div>
  );
}

export default App;
