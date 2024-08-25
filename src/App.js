import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TodoWrapper />
    </div>
  );
}

export default App;
