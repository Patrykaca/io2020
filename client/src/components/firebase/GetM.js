import React from 'react';
import fire from "../../firebase";

export default function GetM({dane}) {




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
