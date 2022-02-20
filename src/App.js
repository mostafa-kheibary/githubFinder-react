import Search from './pages/Search';
import About from './pages/About';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
