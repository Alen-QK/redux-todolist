import React from "react";
import Item from "./Item";

import {useSelector} from "react-redux";

const Todolist = () => {
    const itemState = useSelector(state => state.itemR);

    return (
        <div>
            {
                itemState.map((item) => (
                    <Item key={item.id} id={item.id} title={item.itemTxt} comped={item.comped}/>
                ))
            }
        </div>
    )
}

export default Todolist