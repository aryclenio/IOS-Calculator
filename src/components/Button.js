import React from 'react';
import { 
    StyleSheet, 
    Text, 
    Dimensions, 
    TouchableHighlight 
} from 'react-native';

const styles = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width /4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble:{
        width: (Dimensions.get('window').width/4) * 2 ,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width/4) * 3 ,
    }
})

export default props =>{
    //Array de estilos
    const stylesButton = [styles.button]
    //Caso props tenha double, adicione ao array o estilo double
    if (props.double) stylesButton.push(styles.buttonDouble)
    //Caso props tenha triple, adicione ao array o estilo triple
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={ () => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}