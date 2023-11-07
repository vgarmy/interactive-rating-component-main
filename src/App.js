
import './App.css';
import Card from './components/card/Card'
import ThankYou from './components/thankyou/ThankYou'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="interactive-rating-component-main/" element={<Card />}/>
          <Route path='interactive-rating-component-main/thankyou' element={<ThankYou />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
