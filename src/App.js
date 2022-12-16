import './App.css';
import MoveList from './components/MovieList';
import Navbar from './components/Navbar';
import Welcome from './components/Welcomebanner';



function App() {
  return (
    
      <div className="App">
      <Navbar/>
       <Welcome />
       {/* <Search /> */}
      <MoveList />   
    </div>

  );
}

export default App;
