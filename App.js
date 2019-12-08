
import React, {Component} from 'react';
import { SafeAreaView, StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay:false,
    operation: null,
    //Dois arrays que farão a operação
    values: [0,0],
    //Especifica qual o indice corrente a ser setado no array
    current: 0,
}

export default class App extends Component {
    //clona initialState como modelo
    state = {...initialState}

    addDigit = n => {
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        if(n === '.' && !clearDisplay && this.state.displayValue.includes('.')){
            return
        }
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n //concatena as strings
        this.setState({displayValue, clearDisplay: false})

        if(n !== '.'){
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values] //atualiza o estado com um novo array
            values[this.state.current] = newValue //insere no indice corrente
            this.setState({values})
        }
    }

    clearMemory = () => {
        this.setState({...initialState})
    }
    //necessita da arrow para ser chamado, em virtude da necessidade de parametros
    setOperation = operation => {
        if (this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true})
        }else{
            const equals = operation === '='
            const values = [...this.state.values]
            try{
                //realiza a operação entre os elementos do array com eval()
                values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`) 
            }catch{
                values[0] = this.state.values[0]
            }
            values[1] = 0
            this.setState({
                displayValue: `${values[0]}`,
                //verifica se operação é diferente de =
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: true, //limpa quando apertado igual
                values,
            })
        }

    }
    render(){
        return (
            <View style={styles.container}>
                <Display value={this.state.displayValue}/>
                <View style={styles.buttons}>
                    <Button label='AC' triple onClick={this.clearMemory}/>
                    <Button label='/' operation onClick={this.setOperation} />
                    <Button label='7' onClick={this.addDigit}/>
                    <Button label='8' onClick={this.addDigit}/>
                    <Button label='9' onClick={this.addDigit}/>
                    <Button label='*' operation onClick={this.setOperation}/>
                    <Button label='4' onClick={this.addDigit}/>
                    <Button label='5' onClick={this.addDigit}/>
                    <Button label='6' onClick={this.addDigit}/>
                    <Button label='-' operation onClick={this.setOperation}/>
                    <Button label='1' onClick={this.addDigit}/>
                    <Button label='2' onClick={this.addDigit}/>
                    <Button label='3' onClick={this.addDigit}/>
                    <Button label='+' operation onClick={this.setOperation}/>
                    <Button label='0' double onClick={() => this.addDigit}/>
                    <Button label='.' onClick={this.addDigit}/>
                    <Button label='=' operation onClick={this.setOperation}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  buttons:{
      flexDirection: 'row',
      flexWrap: 'wrap',
  }
});

