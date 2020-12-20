import React, {Component} from 'react';
import fire from "../../firebase";
import GetM from "./GetM";
import PostM from "./PostM";
import DeleteM from "./DeleteM";

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


  //  getM = e => {
  //      alert("sdafdgfg");
  //      fire.database().ref("Podwysocki")
  //          .on("value", snapshot => {
  //              let arr = [];
  //              snapshot.forEach(snap => {
  //                  arr.push(snap.val());
  //              });
  //              this.state.dane = arr;
  //          });
//
  //  }

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
                    >get
                    </button>
                <button id="trze"
                        onClick={this.del()}
                >del
                </button>

                <GetM/>
                <PostM/>
                <DeleteM/>
            </div>


        )
    }
}

export default FirebaseText;
