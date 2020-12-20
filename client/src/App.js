import {BrowserRouter} from 'react-router-dom';

import './App.css';
import FirstConnect from './components/FirstConnect/FirstConnect';
import Firebase from "./components/firebase/Firebase";

function App() {

    return (

        <BrowserRouter>

            <div className="App">
                <Firebase/>
                <FirstConnect/>
            </div>
        </BrowserRouter>
    );
}

export default App;
