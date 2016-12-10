import React from 'react'

/** Styling for root page */
const PAGE_STYLE = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(transparent, gainsboro)',
}

/**
 * Render root component representing the entire application
 * @return {React.ReactElement} Root component
 */
export default function Root({count, actions}) {
  return (
    <div style={PAGE_STYLE}>
      <button onClick={actions.decrementCount}>-</button>
      <h2>{count}</h2>
      <button onClick={actions.incrementCount}>+</button>
    </div>
  )
}
