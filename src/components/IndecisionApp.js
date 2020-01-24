import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'


class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handlePick = ()=>{
    const pick = Math.floor(Math.random()*this.state.options.length)
    const option = this.state.options[pick]
    this.setState(()=>({selectedOption: option}))
  }

  deletePick = ()=>{
    this.setState(()=>(
      {selectedOption: undefined}
    ))
  }

 addOption = (option)=>{
   if(!option){
     return 'Enter valid option'
   }else if(this.state.options.indexOf(option)>-1){
     return 'This option already exists'
   }

   this.setState((prevState)=>(
     {options: prevState.options.concat(option)}
   ))
 }

 removeAllOptions = ()=>{
   this.setState(()=>({options: []}))
 }

handleDeleteOption = (option)=>{
  this.setState((prevState)=>({
    options: prevState.options.filter((oldOption)=> oldOption!==option)
  }))
  console.log(option)
}

  componentWillMount(){
    console.log('component will mount')
  }

  componentDidMount(){
    try{
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if(options){
        this.setState(()=>({options}))
      }
    }catch(e){
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnMount(){
    console.log('component will unmount')
  }


  render() {
    const subtitle = "Put your life in the hands of a computer"
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          choice={this.state.choice}
        />
          <Options
            options={this.state.options}
            removeAllOptions={this.removeAllOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            addOption={this.addOption}
          />
        <OptionModal
          selectedOption={this.state.selectedOption}
          deletePick={this.deletePick}
        />
        </div>
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp
