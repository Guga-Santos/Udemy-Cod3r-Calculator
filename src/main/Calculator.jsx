import { Component } from 'react';
import Button from '../components/Button';
import Display from '../components/Display';
import './Calculator.css';

const INITIAL_STATE = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {
  state = { ...INITIAL_STATE };

  clearMemory() {
    this.setState({ ...INITIAL_STATE });
  }
  
  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === '=';
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      try {
        // eslint-disable-next-line no-eval
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (err) {
        values[0] = this.state.values[0];
      }
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }

  }

  addDigit(n) {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return
    }

    const clearDisplay = this.state.displayValue === '0' 
      || this.state.clearDisplay;

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n

    this.setState({ displayValue, clearDisplay: false })

    if(n !== '.') {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values })
      console.log(values)
    }
  }

  render() {
    return(
      <div className='calculator'>
        <Display value={this.state.displayValue}/>
        <Button 
        label="AC"
        style={{gridColumn: 'span 3'}}
        click={() => this.clearMemory()}/>

        <Button label="/" click={(e) => this.setOperation(e)}/>
        <Button label="7" click={(e) => this.addDigit(e)}/>
        <Button label="8" click={(e) => this.addDigit(e)}/>
        <Button label="9" click={(e) => this.addDigit(e)}/>
        <Button label="*" click={(e) => this.setOperation(e)}/>
        <Button label="4" click={(e) => this.addDigit(e)}/>
        <Button label="5" click={(e) => this.addDigit(e)}/>
        <Button label="6" click={(e) => this.addDigit(e)}/>
        <Button label="-" click={(e) => this.setOperation(e)}/>
        <Button label="1" click={(e) => this.addDigit(e)}/>
        <Button label="2" click={(e) => this.addDigit(e)}/>
        <Button label="3" click={(e) => this.addDigit(e)}/>
        <Button label="+" click={(e) => this.setOperation(e)}/>

        <Button 
        label="0"
        style={{gridColumn: 'span 2'}}
        click={(e) => this.addDigit(+e)}/>

        <Button label="." click={(e) => this.addDigit(e)}/>
        
        <Button 
        label="="
        style={{background: '#34b469', color: 'white'}}
        click={(e) => this.setOperation(e)}
        />
      </div>
    )
  }
}