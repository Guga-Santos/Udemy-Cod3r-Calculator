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
    console.log(operation)
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
        style={{background: '#34b469', color: 'white'}}/>
      </div>
    )
  }
}