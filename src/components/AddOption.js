import React from 'react'

class AddOption extends React.Component{
  state = {
    error: undefined
  }

  handleAddOption = (e)=>{
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

  handleDeleteOption = (option)=>{
    console.log('hdo', option)
  }

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type='text' name='newOption' />
          <button className="button" type='submit'>Add Option--</button>
        </form>
      </div>
    )
  }
}

export default AddOption
