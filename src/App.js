import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './styles.css'

import Header from './Components/Header'
import Main from './Pages/Main'

function App() {
  return (
    <div className="App">
        <Header title={ "Gente Que Soma" } />
        <Main />
    </div>
  );
}

export default App;
