import React from 'react'

function Title() {
  console.log("rendering Log");
    return (
        <div>
              UseCallback Hook
        </div>
      )
}

export default React.memo(Title)
