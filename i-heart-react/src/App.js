// import './AppStyleOriginal.css';
//
// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }
import HeartLogo from './heart.svg';
import './App.css';

const message = 'cool as a cucumber';

const Heart = (props) => {
    return (
        <div className='heart'>
            <img className='heart-img' src={HeartLogo} alt='heart' />
            <p className='heart-message'>{props.msg}</p>
        </div>
    );
}

function App() {
    return <Heart msg={message} />;
}

export default App;



          //notional bonus