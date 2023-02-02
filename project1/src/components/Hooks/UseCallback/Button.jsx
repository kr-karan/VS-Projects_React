import React from 'react'

function Button({handleclick,children}) {
  console.log(`rendering Button - `,children)
  return (
    <div>
      <button onClick={handleclick}>{children}</button>
    </div>
  )
}

export default React.memo(Button)
