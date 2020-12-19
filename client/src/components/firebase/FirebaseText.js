import React, {Component} from 'react';
import fire from "../../firebase";

class FirebaseText extends Component {
    state = {
        text: ""
    }

    dane = []


    data = {
        id: '2137',
        file: 'jp',
        itemName: 'gmd',
        width: 2,
        length: 666,
        realHeight: 6.9,
        price: 420,
        itemType: 'yes',
    }




    handleText = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = e => {
        fire.database().ref('Podwysocki').push(this.data);
        this.setState({
            text: ""
        })
    }

    postMethod(obj) {
        fire.database().ref('Podwysocki').push(obj);
    }

    getMethod(obj) {
        alert("chujj");
        fire.database().ref("Podwysocki").on(
            'value', (snapshot) => {
                //let newDane = [];
                snapshot.forEach(data => {
                    const dataVal = data.val()
                    obj.push(dataVal)
                })
            }
        )
        console.log(this.dane);
    }




    render() {
        return (
            <div className="Podwysocki">
            <span>
                Podwysocki
            </span>
                <div>
                    <input
                        type="text"
                        id="inputText"
                        onChange={this.handleText}
                    />
                </div>
                <div>
                    <button
                        //onClick={this.postMethod(this.data)}
                    >Save
                    </button>
                </div>
                <div>
                    <button
                        onClick={this.getMethod(this.dane)}
                    >get
                    </button>

                </div>
            </div>

        )
    }
}

export default FirebaseText;
