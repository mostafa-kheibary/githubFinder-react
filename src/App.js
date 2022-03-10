import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound.jsx';
import Header from './components/Header/Header';
import UserPage from './pages/UserPage/UserPage';
import { GithubProvider } from './context/GithubContext/GithubContext';
import { AlertContextProvider } from './context/AlertContext/AlertContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => { 
  return (
    <AlertContextProvider>
      <GithubProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/user/:userName' element={<UserPage />} />
          </Routes>
        </BrowserRouter>
      </GithubProvider>
    </AlertContextProvider>
  );
};

export default App;
