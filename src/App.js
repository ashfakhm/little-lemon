import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <div className='App'>
      <ScrollToHash />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;