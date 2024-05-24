import Form from './Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prediction from './Prediction';

function App() {
  return (
    <><Router>
    <Routes>
      
      {/* Route for Prediction */}
      <Route path="/prediction" element={<Prediction/>} />

      <Route path="/" element={<Form/>} />
    </Routes>
  </Router>
    </>
  );
}

export default App;
