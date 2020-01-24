// const obj = {
//   name: 'Vikram',
//   getName() {
//     return this.name
//   }
// }
//
// const test = obj.getName.bind({name: 'Nut'})
// console.log(test())




class IndecisonApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      options: props.options,
      choice: undefined
    }
    this.addOption = this.addOption.bind(this)
    this.removeAllOptions = this.removeAllOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
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

  handlePick(){
    const pick = Math.floor(Math.random()*this.state.options.length)
    const option = this.state.options[pick]
    this.setState(()=>({choice: option}))
  }

 addOption(option){
   if(!option){
     return 'Enter valid option'
   }else if(this.state.options.indexOf(option)>-1){
     return 'This option already exists'
   }

   this.setState((prevState)=>(
     {options: prevState.options.concat(option)}
   ))
 }

 removeAllOptions(){
   this.setState(()=>({options: []}))
 }

  handleDeleteOption(option){
    this.setState((prevState)=>({
      options: prevState.options.filter((oldOption)=> oldOption!==option)
    }))
    console.log(option)
  }


  render() {
    const subtitle = "Put your life in the hands of a computer"
    return (
      <div>
        <Header subtitle={subtitle} />
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
      </div>
    )
  }
}

IndecisonApp.defaultProps = {
  options: []
}

const Header =(props)=> {
  return (
    <div>Nut
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecison'
}

const Action = (props)=>{
    return (
      <div>
        <button
          disabled={!props.hasOptions}
          onClick={props.handlePick}
        >
          What should I do
        </button>
        {props.choice && <div>Me Choice is {props.choice}</div>}
      </div>
    )
}


const Option = (props)=>{
    return (
      <div>
        {props.option}
        <button
          onClick={(e)=>props.handleDeleteOption(props.option)}
        >
        Remove
        </button>
      </div>
    )
}


const Options = (props)=> {
    return (
      <div>
        <button onClick={props.removeAllOptions}>Remove all</button>
        { props.options.length===0 && <p>No Options!!!</p> }
        {props.options.map(option=>(
          <Option key={option}
           option={option}
           handleDeleteOption={props.handleDeleteOption}
        />)
      )}
      </div>
    )
}

class AddOption extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e){
    e.preventDefault()
    const option = e.target.newOption.value.trim()
    const error = this.props.addOption(option)
    console.log(error)
    this.setState(()=>({error}))
    if(!error){
      e.target.newOption.value=""
      e.target.newOption.focus()
    }
  }

  handleDeleteOption(option){
    console.log('hdo', option)
  }

  render() {
    return (
      <div>
        {this.state.error && <h1 style={{color:"red"}}>{this.state.error}</h1>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='newOption' />
          <button type='submit'>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisonApp options={['Op 1', 'Op 2']}/>, document.getElementById('app'))
