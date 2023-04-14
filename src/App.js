import './assets/css/base/base.css';
import './assets/css/components/card.css'
import About from './pages/About';
import Home from "./pages/Home"
import Page404 from './pages/404';
import Header from './assets/components/Header';
import Post from './pages/Posts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  //
  return (

    <Router >
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='*' element={<Page404 />} />
      </Routes >
    </Router >
  );
}

export default App;
