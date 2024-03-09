import './App.css';
import Home from './Home';
import JobDetail from './JobDetail';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import NotFound from './NotFound';
import JobList from './JobList.js';
import Apply from './Apply.js';
import Confirmation from './Confirmation.js';
import Footer from './Footer.js';
import Error from './Error.js';

function App() {
  return (
    <div className='container'>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/jobs' element={<JobList />} />
            <Route path='/job/:applyId' element={<Apply />} />
            <Route path='/error' element={<Error />} />
            <Route path='/jobs/job/:id' element={<JobDetail />} />
            <Route path='/confirmation' element={<Confirmation />} />
            <Route path='*' element={<NotFound />} />

          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
