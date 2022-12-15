import React from 'react'
import BoardSize from './BoardSize'
import BoardType from './BoardType'
import TimeOpt from './TimeOpt'

function SideBar({sizefuction, timefunction, typefunction}) {
  return (
    <div className="px-8 py-5 space-between align-bottom">

    {/* <BoardType type={typefunction}/> */}
    <BoardSize size={sizefuction}/>
    {/* <TimeOpt time={timefunction}/> */}
     
    
    </div>

  )
}

export default SideBar