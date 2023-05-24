import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/homepage'
import LoginPage from './components/Login/loginpage'
import SigninPage from './components/Signin/signinpage'
import UserhomePage from './components/UserhomePage/userhomepage'


function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomePage/>}></Route>
            <Route path="/loginpage" exact element={<LoginPage/>}></Route>
            <Route path="/signinpage" exact element={<SigninPage/>}></Route>
            <Route path="/userhomepage" exact element={<UserhomePage/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;