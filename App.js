import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert} from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      //stores/displays operation to be performed
      operation: '',

      //stores the evaluated result
      result: ''
    }
  }

  //function for storing and displaying operands and operators
  buttonValue = (value) => {

    //to check if first input is not a operator
    if (this.state.operation == '' && (value=='+' || value=='-' || value=='*' || value=='/' || value=='%')){
      Alert.alert('You need to enter some value to perform operation.')
    }
    else{
      
      if(value=='+' || value=='-' || value=='*' || value=='/' || value=='.'){

        //to check if input doesn't take multiple operators together after a operands
        var temp = this.state.operation.slice(-1);
        if( (temp == '+') || (temp == '-') || (temp == '*') || (temp == '/') || (temp == '.')){
          this.state.operation.slice(-1) + value;
        }
        else{
          this.setState({operation: (this.state.operation + value)}); //append the operators to operation
        }
      }
      else{
          this.setState({operation: (this.state.operation + value)}); //append the operands to operation
      }
    }
  }

  //display the result
  displayResult = () => {
    this.setState({result: eval(this.state.operation)});
  }

  //to undo the inputs (from operation)
  clear = () => {
    let text = this.state.operation.split('')
    text.pop()
    this.setState({operation: text.join('')})
  }

  //to reset the result
  resetResult = () => {
    this.setState({result: ''});
  }

  //to clear both operation and result
  clearAll = () => {
    this.setState({operation: ''});
    this.setState({result: ''});

  }



  //react native render
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screenview}>
          <View style={styles.operationview}>
            <Text style={styles.operationtext}>
              {this.state.operation}
            </Text>
          </View>
          <View style={styles.resultview}>
            <Text style={styles.resulttext}>
              {this.state.result}
            </Text>
          </View>
          <View style={styles.operatorsview}>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.buttonValue('1')}}>
              <Text style={styles.operators}>
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.buttonValue('2')}}>
              <Text style={styles.operators}>
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.buttonValue('3')}}>
              <Text style={styles.operators}>
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbuttonblack} onPress={() => {this.buttonValue('+')}}>
              <Text style={styles.operatorsblack}>
                +
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbuttonblack} onPress={() => {this.clear(); this.resetResult()}} onLongPress={this.clearAll}>
              <Text style={styles.operatorsblack}>
                C
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.buttonValue('4')}}>
              <Text style={styles.operators}>
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.buttonValue('5')}}>
              <Text style={styles.operators}>
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.buttonValue('6')}}>
              <Text style={styles.operators}>
                6
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbuttonblack} onPress={() => {this.buttonValue('-')}}>
              <Text style={styles.operatorsblack}>
                -
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbuttonblack} onPress={() => {this.buttonValue('*0.01')}}>
              <Text style={styles.operatorsblack}>
                %
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.buttonValue('7')}}>
              <Text style={styles.operators}>
                7
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.buttonValue('8')}}>
              <Text style={styles.operators}>
                8
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.buttonValue('9')}}>
              <Text style={styles.operators}>
                9
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbuttonblack} onPress={() => {this.buttonValue('*')}}>
              <Text style={styles.operatorsblack}>
                *
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbuttonblack} onPress={() => {this.buttonValue('(')}}>
              <Text style={styles.operatorsblack}>
                (
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.buttonValue('.')}}>
              <Text style={styles.operators}>
                .
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.buttonValue('0')}}>
              <Text style={styles.operators}>
                0
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbutton} onPress={() => {this.displayResult()}}>
              <Text style={styles.operators}>
                =
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbuttonblack} onPress={() => {this.buttonValue('/')}}>
              <Text style={styles.operatorsblack}>
                /
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorbuttonblack} onPress={() => {this.buttonValue(')')}}>
              <Text style={styles.operatorsblack}>
                )
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenview: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  operationview: {
    padding: 5,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',

  },
  operationtext: {
    fontSize: 30,
    color: "#2C3335",
    textAlign: "right"
    
  },
  resultview: {
    flex: 1,
    padding: 5,
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 20
  },
  resulttext: {
    fontSize: 40,
    color: "#616C6F",
    
  },
  operatorsview: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  operatorbutton: {
    width: "24%",
    backgroundColor: "#EEC213",
    alignItems: "center",
    justifyContent: "center",
    height: "25%",
  },
  operatorbuttonblack: {
    width: "14%",
    backgroundColor: "#2C3335",
    alignItems: "center",
    justifyContent: "center",
    height: "25%",
  },

  operators: {
    fontSize: 30,
    
  },
  operatorsblack: {
    fontSize: 30,
    color: "#EEC213",
    
  }

});



/*  +++All rights reserved+++

    Calculator v1.0
    React Native Project
    Contributed by - Bibek Kakati 
    https://enviso.tech/
*/