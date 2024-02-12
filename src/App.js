import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



import Feedbackform from "./components/Feedbackform";
import FeedbackList from "./components/FeedbackList";
import FeedbackStat from "./components/FeedbackStat";
import Header from "./components/Header";

import Aboutpage from './pages/Aboutpage';

import {FeedbackProvider} from './context/FeedbackContext';

import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';

function App() {


  



  return (
  <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<React.Fragment>
            <Feedbackform />
            <FeedbackStat />
            <FeedbackList />
          </React.Fragment>} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/post" element={<Post/>} />
        </Routes>
        {/* <Card>
          <NavLink to='/' activeClassName='active'>
          Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
          About
          </NavLink>
        </Card> */}
        <AboutIconLink/>
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
