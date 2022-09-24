import './App.css';
import Questionary from './components/Questionary/Questionary';
import ThemeProvider from './context/ThemeProvider';


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Questionary/>
      </div>
    </ThemeProvider>
  );
}

export default App;
