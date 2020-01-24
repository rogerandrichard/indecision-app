

class VisibilityToggle extends React.Component {
  constructor(){
    super()
    this.state = {
      visibility: false,
      details: 'Nut Weiner'
    }
    this.clickButton = this.clickButton.bind(this)
  }

  clickButton(){
    this.setState((prevState)=>{
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render(){
    return(
      <div>
        <h2>Visibility Toggle</h2>
        <button onClick={ this.clickButton }>
          { this.state.visibility ? 'Hide Details' : 'Show Details' }
        </button>
        { this.state.visibility && (<div>{ this.state.details }</div>)}
      </div>
    )
  }
}


const root = document.getElementById('app')
ReactDOM.render(<VisibilityToggle />, root)

// let showDetails = true
// const details = 'Nut Weiner'
//
//
// let clickButton = ()=>{
//   showDetails = !showDetails
//   renderTemplate()
// }
//
//
// const renderTemplate = ()=> {
//   const template = (
//       <div>
//         <h2>Visibility Toggle</h2>
//         <button onClick={ clickButton }>
//           { showDetails ? 'Hide Details' : 'Show Details' }
//         </button>
//         { showDetails && (<div>{ details }</div>)}
//       </div>
//   )
//   ReactDOM.render(template, root)
// }
//
// renderTemplate()
