import './App.css';
import Search from './pages/Search/Search';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound.jsx';
import Header from './components/Header/Header';
import { GithubProvider } from './context/GithubContext/GithubContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <GithubProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GithubProvider>
  );
};

export default App;
