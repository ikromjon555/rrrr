import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Movie } from './pages';

function App() {
  return (
    <Router>

      <div>
        <Link to={'/'}>Home page</Link>
      </div>
      
      <Routes>
        <Route path='/' element={<Movie />}/>
      </Routes>
    </Router>
  );
}

export default App;
