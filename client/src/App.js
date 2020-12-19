import {BrowserRouter} from 'react-router-dom';

import './App.css';
import FirstConnect from './components/FirstConnect/FirstConnect';
import FirebaseText from './components/firebase/FirebaseText';
//import fire from "./firebase";

function App() {

    return (

        <BrowserRouter>

            <div className="App">
                <FirebaseText/>
                <FirstConnect/>
            </div>
        </BrowserRouter>
    );
}

export default App;
