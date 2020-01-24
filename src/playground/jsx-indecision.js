console.log('app.js is running')

const obj = {
  title: 'Indecision App',
  subtitle: 'Let computer decide',
  options: []
}

const onMakeDecision = () => {
  const x = 1
  const y = obj.options.length
  const element = Math.floor(Math.random()*(obj.options.length))
  const decision = obj.options[element]
  renderTemplate()
}

function optionList(options){
  return options.map(option => <li key={option+'t'}>{ option }</li>)
}

const removeAllOptions = ()=>{
  obj.options = []
  renderTemplate()
}

const onFormSubmit = (e)=>{
  e.preventDefault()
  const option = e.target.elements.option.value
  if(option){
    obj.options.push(option)
    renderTemplate()
    e.target.elements.option.value = ""
  }
}

const appRoot = document.getElementById('app')

const renderTemplate = ()=>{
  const template = (
    <div>
      { obj.decision ? <h1>Current Decision:{ obj.decision }</h1> : null}
      <button disabled={ obj.options.length===0 ? true : false } onClick={ onMakeDecision }>What Should I Do?</button>

      { obj.subtitle && <p>{ obj.subtitle }</p>}
      { obj.options.length>0 ? <div>
        <p>Here are your options{optionList(obj.options)}</p>
        <button onClick={ removeAllOptions }>Remove All Options</button>
        </div> : <p>No Options</p>}

      <form onSubmit={ onFormSubmit }>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
  console.log("Just rendered template...", obj.options)
}

renderTemplate()


// const templateTwo = (
//   <div>
//     <h1>{ user.name ? user.name : 'Anonymous' }</h1>
//     { (user.age && user.age>18) && <p>Age: {user.age}</p> }
//     { veryLoc(user.location) }
//   </div>
// )
// const user = {
//   name: 'Nut',
//   age: 25,
//   location: 'Oro'
// }
//
// const userName = "Ted Turner"
// const userAge = 35
//
// const verLoc = (location)=>{
//   if(!location){
//     return 'unknown'
//   }else{
//     return location
//   }
// }
//
// function veryLoc(location){
//   if(location){
//     return <h3>Location: { location }</h3>
//   }
// }
//
