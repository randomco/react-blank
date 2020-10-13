import React from 'react';
//import logo from './logo.svg';
import './App.css';
import RecipeReviewCard from './RecipeReviewCard';

function App({config, data}) {
    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor: config.color}}>
                <img src="https://svgshare.com/i/QWP.svg" className="App-logo" alt="logo" />
                <p>
                    Hello, I am a &nbsp;
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                    &nbsp; Widget running on the <br/>
                    <code>~ Cloud! ~</code>
                </p>
                <RecipeReviewCard data={data} config={config}/>
            </header>
        </div>
    );
}

export default App;
