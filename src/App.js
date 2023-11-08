
import './App.css';
import AnimatiedRoutes from './components/AnimatiedRoutes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  
  return (
    <div className='App'>
      <Router>
        <AnimatiedRoutes />
      </Router>
    </div>
  );
}

export default App;
