import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Pages/Todo';
function App() {
  return (
    <BrowserRouter>
    
    <div className="App fullpage">
      <Routes>
        <Route path='/' element={<Todo/>} /> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
