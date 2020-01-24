
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  componentDidMount(){
    try{
      const json = localStorage.getItem('count')
      const count = JSON.parse(json)
      console.log('Get Count ***', count)

      if(count){
        this.setState(()=>({count}))
      }
    }catch(e){
      console.log("Errah")
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count!==this.state.count){
      const count = JSON.stringify(this.state.count)
      localStorage.setItem("count", count)

      const getCount = localStorage.getItem('count')
      console.log('Get Count', getCount)

    }
  }

  handleAddOne(){
    console.log('add one')
    this.setState((prevState)=>{
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusOne(){
    console.log('minus one')
    this.setState((prevState)=>{
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset(){
    console.log('reset')
    this.setState(()=>{
      return {
        count: 0
      }
    })
  }

  render(){
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

// Counter.defaultProps = {
//   count: 100
// }


ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'))







// let count = 0
//
// const addOne = ()=>{
//   count++
//   renderCounterApp()
//   console.log('Add One', count)
// }
//
// const minusOne = ()=>{
//   count--
//   renderCounterApp()
//   console.log('Minus One')
// }
//
// const reset = ()=>{
//   count = 0
//   renderCounterApp()
//   console.log('Reset')
// }
//
//
//
//
// const renderCounterApp = ()=> {
//
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={ addOne } >+1</button>
//       <button onClick={ minusOne } >-1</button>
//       <button onClick={ reset } >Reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo, appRoot)
//
// }
//
// renderCounterApp()
