import React, {useState} from 'react';
import fire from "../../firebase";
import ReactDOM from 'react-dom';
export default function GetM() {

    let state = {
        data : {
            id: 'test',
            file: 'jan pawel 2',
            itemName: 'gmd',
            width: 2137,
            length: 13,
            realHeight: 6.9,
            price: 96,
            itemType: 'no',
        },
    }

    function postM(obj) {
        alert("kutaz");
        fire.database().ref('Podwysocki').push(obj);
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
