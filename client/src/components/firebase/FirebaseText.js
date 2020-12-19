import React, { Component } from 'react';
import fire from "../../firebase";

class FirebaseText extends Component {
    state = {
        text: ""
    }


    handleText = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit=e=>{
        let messageRef = fire.database().ref('Podwysocki')
            .orderByKey().limitToLast(100);
        fire.database().ref('Podwysocki').push(this.state.text);
        this.setState({
            text : ""
        })
    }


    render() {
        return (
            <div className="Podwysocki">
            <span>
                Podwysocki
            </span>
                <div className="Podwysocki">
                    <input
                        type="text"
                        id="inputText"
                        onChange={this.handleText}
                    />
                    <br/>
                    <button
                    onClick={this.handleSubmit}
                    >Save</button>
                </div>
            </div>

        )
    }
}

export default FirebaseText;
