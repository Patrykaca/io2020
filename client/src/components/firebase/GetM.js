import React, {useState} from 'react';
import fire from "../../firebase";
export default function GetM() {
    let tab = [];

    function getAllM() {
        fire.database().ref("Podwysocki")
            .on("value", snapshot => {
                let arr = [];
                snapshot.forEach(snap => {
                    arr.push(snap.val());
                });
                tab = arr;
            });
        console.log(tab);
      //  ReactDOM.render(<GetM/>, document.getElementById('tabela'));
    }

    function getByName() {
        fire.database().ref("Podwysocki")
            .on("value", snapshot => {
                let arr = [];
                snapshot.forEach(snap => {
                    arr.push(snap.val());
                });
                tab = arr;
            });
        console.log(tab);
    }

    return(
        <div id="tabela">
            <button id="trze"
                    onClick={getAllM}
            >GetM
            </button>

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
                        <tr>
                            <td>{tab.id}</td>
                            <td>{tab.file}</td>
                            <td>{tab.itemName}</td>
                            <td>{tab.width}</td>
                            <td>{tab.realHeight}</td>
                            <td>{tab.price}</td>
                            <td>{tab.itemType}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}
