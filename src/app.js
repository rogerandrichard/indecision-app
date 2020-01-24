import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

//console.log(validator.isEmail('roger@whiteshark.ca'))

const Layout = (props)=>{
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  )
}

const template = (
    <div>
      <p>Page title</p>
      <p>This is my page</p>
    </div>
  )




ReactDOM.render(<IndecisionApp />, document.getElementById('app'))


class OldSyntax {
  constructor(){
    this.name = 'Mike'
  }
  getGreeting(){
    return `Hi my name is ${this.name}`
  }
}

const oldSyntax = new OldSyntax()

//const getGreeting = oldSyntax.getGreeting
console.log(oldSyntax.getGreeting())

class NewSyntax {
  name='Jen'
  getGreeting = ()=>{
    return `Hi my name is ${this.name}`
  }
}

const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting())
