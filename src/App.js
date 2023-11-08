
import './App.css';
import AnimatiedRoutes from './components/AnimatiedRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/footer/Footer'

function App() {
  
  return (
    <div className='App'>
      <Router>
        <AnimatiedRoutes />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
