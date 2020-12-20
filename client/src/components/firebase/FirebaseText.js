import React, {Component} from 'react';
import fire from "../../firebase";

class FirebaseText extends Component {
    state = {
        text: "",
        dane : [],
        data : {
            id: '2137',
            file: 'jan pawel',
            itemName: 'gmd',
            width: 2,
            length: 666,
            realHeight: 6.9,
            price: 420,
            itemType: 'yes',
        },
    }






    handleText = e => {
        this.setState({
            text: e.target.value
        })
    };

    handleSubmit = e => {
        fire.database().ref('Podwysocki').push(this.state.text);
        this.setState({
            text: ""
        })
    };

    postMethod(obj) {
        fire.database().ref('Podwysocki').push(obj);
    };

  //  getMethod() {
  //      //alert("chujj");
  //      fire.database().ref("Podwysocki").on(
  //          'value', (snapshot) => {
  //              let newDane = [];
  //              snapshot.forEach(data => {
  //                  const dataVal = data.val()
  //                  newDane.push(dataVal)
  //              })
  //          }
  //      )
  //      console.log(this.dane);
  //  }


    getM = e => {
        alert("sdafdgfg");
        fire.database().ref("Podwysocki")
            .on("value", snapshot => {
                let arr = [];
                snapshot.forEach(snap => {
                    arr.push(snap.val());
                });
                this.state.dane = arr;
            });

    }

    del() {
        console.log(this.state.dane);
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
                    <button id="drugi"
                        onClick={this.getM()}
                    >get
                    </button>
                <button id="trze"
                        onClick={this.del()}
                >del
                </button>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>file</th>
                            <th>itemName</th>
                            <th>width</th>
                            <th>realHeight</th>
                            <th>price</th>
                            <th>itemType</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.dane.map(zmienna => {
                            return (
                                <tr>
                                    <td>{zmienna.id}</td>
                                    <td>{zmienna.file}</td>
                                    <td>{zmienna.itemName}</td>
                                    <td>{zmienna.width}</td>
                                    <td>{zmienna.realHeight}</td>
                                    <td>{zmienna.price}</td>
                                    <td>{zmienna.itemType}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>


        )
    }
}

export default FirebaseText;
