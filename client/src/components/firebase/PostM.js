import React, {useState} from 'react';
import fire from "../../firebase";


export default function PostM() {
    //dane testowe jakie wysyłamy
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
        let name = obj.itemName.toString().valueOf();
        console.log(name);
        fire.database().ref('database').child(name).set(obj);
    }

    return(
        <div id="post">
            <button id="post"
                    onClick={
                        () => postM(state.data)
                    }
            >PostM
            </button>

        </div>
    )
}
