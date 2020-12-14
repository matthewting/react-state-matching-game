import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const dynamiColor = (props.selected || props.matched)? {backgroundColor : props.color} : null


  return (
    <div className='Tile' style={dynamiColor}>
      {props.selected || props.matched ? <props.svg /> : null}
    </div>
  )
}

export default Tile
