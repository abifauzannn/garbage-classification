import { 
  Routes, 
  Route 
} from 'react-router-dom';


import Classify from './pages/Classify';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Classify />} />
    </Routes>
  );
}

export default App;
