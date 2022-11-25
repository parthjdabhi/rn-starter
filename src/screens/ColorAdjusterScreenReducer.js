import react, { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ColorAdjusterItem from "../components/ColorAdjusterItem";

//
const COLOR_STEP_SIZE = 15;

const reducer = (state, action) => {
    // action = { type: read || green || blue , payload: 15 || -15}
    //console.log(`state: ${JSON.stringify(state, undefined, 2)}, action: ${JSON.stringify(action, undefined, 2)})`); //state: [object Object], action: [object Object])
    //console.log('state:', state, 'action:', action);
    //console.log(state);
    //console.log(action);

    switch (action.type) {
        case "red":
            console.log(action);
            return (state.red + action.payload > 255 || state.red + action.payload < 0) ? state : {...state, red: state.red + action.payload};
        case 'green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0) ? state : {...state, green: state.green + action.payload};
        case 'blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ? state : {...state, blue: state.blue + action.payload};
    }
    return state;
}

const ColorAdjusterScreenReducer = () => {
    const [state, dispach] = useReducer(reducer, { red: 0, green: 0, blue: 0})
    //const {red, green, blue} = state

    return <View>
        <ColorAdjusterItem 
            color="red" 
            onIncrease={ () => {
                console.log(`onIncrease: red`);
                dispach({'type': 'red', 'payload': COLOR_STEP_SIZE})
            }} onDecrease={() => {
                dispach({'type': 'red', 'payload': -1 * COLOR_STEP_SIZE})
            }}/>
        <ColorAdjusterItem 
            color="green" 
            onIncrease={ () => {
                dispach({'type': 'green', 'payload': COLOR_STEP_SIZE})
            }} onDecrease={() => {
                dispach({'type': 'green', 'payload': -1 * COLOR_STEP_SIZE})
            }}/>
        <ColorAdjusterItem 
            color="blue" 
            onIncrease={ () => {
                dispach({'type': 'blue', 'payload': COLOR_STEP_SIZE})
            }} onDecrease={() => {
                dispach({'type': 'blue', 'payload': -1 * COLOR_STEP_SIZE})
            }}/>
        
        <View style={{ height:100, width:100, backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}} />
    </View>
};

const styles = StyleSheet.create({});

export default ColorAdjusterScreenReducer;