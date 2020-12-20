import React, {useState} from 'react';
import fire from "../../firebase";

export default function DeleteM() {

    let state = {
        data: {
            id: 'test',
            file: 'jan pawel 2',
            itemName: 'gmd2',
            width: 2137,
            length: 13,
            realHeight: 6.9,
            price: 96,
            itemType: 'no',
        },
    }

    function DeleteM(obj) {
        alert("cipaaa");
        let name = obj.itemName.toString().valueOf();
        const ref = fire.database().ref(`Podwysocki/${name}`);
        ref.remove();

    }

    return (
        <div id="del">
            <button id="del"
                    value={state.data}
                    onClick={
                        () => DeleteM(state.data)
                    }
            >DelM
            </button>

        </div>
    )
}
