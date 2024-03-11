import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        {/* header */}
        <Header />
        {/* switch helps us determine which url to use */}
        <Routes>
          <Route path = "/" element={ 
            <>
              {/* sidebar */}
              <div className='app-page'>
                <Sidebar />
                <RecommendedVideos />
              </div>
            </>}
          />

          <Route path = "/search/:searchTerm" element={
            <>
            <div className='app-page'>
                <Sidebar />
                <SearchPage />
              </div>
            </>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
