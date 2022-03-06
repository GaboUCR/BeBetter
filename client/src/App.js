import './App.css';
import { Navbar} from './frontpage/navbar';
import HabitsCards from './habits/HabitsCards';

function App() {
  return (
    <div className="h-full w-full bg-light-gray absolute">
      <Navbar />
      <HabitsCards />
    </div>
  );
}

export default App;
