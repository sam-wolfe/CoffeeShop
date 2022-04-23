import './App.css';
import Navbar from './Components/Navbar/Navbar';
import PlayfairTitle from './Components/Titles/PlayfairTitle';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="b-coffee">
            <div className="b-coffee-title">
                <PlayfairTitle size={'4rem'}>Lorem Ipsum</PlayfairTitle>
                <section class="b-coffee-text">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Amet justo donec enim diam vulputate ut pharetra. 
                    Enim diam vulputate 
                </section>
            </div>
        </div>
        
    </div>
  );
}

export default App;
