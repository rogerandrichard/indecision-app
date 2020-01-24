import React from 'react'

const Action = (props)=> (
      <div>
        <button
          className="big-button"
          disabled={!props.hasOptions}
          onClick={props.handlePick}
        >
          What should I do
        </button>
        {props.choice && <div>Me Choice is {props.choice}</div>}
      </div>
    )


export default Action
