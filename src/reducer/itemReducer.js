import uuid from "react-uuid";
import {ADD_ITEM, DEL_ITEM, CHANGE_COMPED} from "../constants/todo";

const initState = [];

function itemReducer (state= initState, action) {
    const {type, payload} = action;

    switch (type) {
        case ADD_ITEM: {
            return [
                ...state,
                {
                    id: uuid(),
                    itemTxt: payload,
                    comped: false
                }
            ]
        }

        case CHANGE_COMPED: {
            // 如果是修改redux的state，必须要是deep copy，所以在array的情况下优先考虑使用map
            let newState = (state.map((item) => {
                    if (item.id === payload) {
                        // 同时要注意的是，如果是检查到了要修改的目标，尤其是这个目标仍然是一个嵌套的object结构的情况下，依然需要spread一下然后更新对应的key-value，否则如果
                        // 不return的情况下，其实它返回的仍然是old state的对象，只是值被改变了而已，这样就会触犯immutable state的修改规则，会报错，但是浏览器和脚本依然
                        // 有容忍的解释了你的行为，错误的操作如下:
                        // item.comped = !item.comped 然后不return任何东西

                        // 必须return一个新的修改完的deep copy对象
                        return {
                            ...item,
                            comped: !item.comped
                        }
                    }

                    return item
                }));

            return newState
        }

        case DEL_ITEM: {
            return (state.filter(item => item.id !== payload))
        }
    }

    return state
}

export default itemReducer