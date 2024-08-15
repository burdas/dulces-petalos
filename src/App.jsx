
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlowerList from './pages/FlowerList';
import FlowerDetail from './pages/FlowerDetail';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlowerList />} />
        <Route path="/flower/:id" element={<FlowerDetail />} />
      </Routes>
    </Router>
  )
}

export default App
