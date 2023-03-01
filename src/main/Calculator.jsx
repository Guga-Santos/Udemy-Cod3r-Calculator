import { Component } from 'react';
import Button from '../components/Button';
import Display from '../components/Display';
import './Calculator.css';

export default class Calculator extends Component {
  clearMemory() {
    console.log('Apaguei')
  }
  setOperation(operation) {
    console.log(operation)
  }
  addDigit(n) {
    console.log(n)
  }
  render() {
    return(
      <div className='calculator'>
        <Display value={100}/>
        <Button 
        label="AC"
        style={{gridColumn: 'span 3'}}
        click={() => this.clearMemory()}/>

        <Button label="/" click={(e) => this.setOperation(e)}/>
        <Button label="7" click={(e) => this.addDigit(+e)}/>
        <Button label="8" click={(e) => this.addDigit(+e)}/>
        <Button label="9" click={(e) => this.addDigit(+e)}/>
        <Button label="*" click={(e) => this.setOperation(e)}/>
        <Button label="4" click={(e) => this.addDigit(+e)}/>
        <Button label="5" click={(e) => this.addDigit(+e)}/>
        <Button label="6" click={(e) => this.addDigit(+e)}/>
        <Button label="-" click={(e) => this.setOperation(e)}/>
        <Button label="1" click={(e) => this.addDigit(+e)}/>
        <Button label="2" click={(e) => this.addDigit(+e)}/>
        <Button label="3" click={(e) => this.addDigit(+e)}/>
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