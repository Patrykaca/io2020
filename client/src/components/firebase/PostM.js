import React, {useState} from 'react';
import fire from "../../firebase";
import ReactDOM from 'react-dom';
export default function GetM(value, onComplete) {

    let state = {
        data : {
            id: 'test',
            file: 'jan pawel 2',
            itemName: 'gmd3',
            width: 2137,
            length: 13,
            realHeight: 6.9,
            price: 96,
            itemType: 'no',
        },
    }

    function postM(obj) {
        alert("kutaz");
        let name = obj.itemName.toString().valueOf();
        console.log(name);
        fire.database().ref('Podwysocki').child(name).push(obj);
    }

    return(
        <div id="post">
            <button id="post"
                    value={state.data}
                    onClick={
                        () => postM(state.data)
                    }
            >PostM
            </button>

        </div>
    )
}
