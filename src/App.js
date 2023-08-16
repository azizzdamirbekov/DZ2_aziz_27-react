import { useState } from 'react';
import './App.css';
import police from './images/police.png'

const Content = () => {
  const [redBlock, setRedBlock] = useState("red")
  const [blueBlock, setBlueBlock] = useState("blue")
  

  const changeColor = () => {
    setRedBlock(blueBlock)
    setBlueBlock(redBlock)
  }
    


  return(
    <div className='block'>
        <img src={police} className='police'></img>
        <div className='redBlock' style={{
                    backgroundColor: redBlock
                    }}
                    onClick={changeColor}
                    >
        </div>
        <div className='blueBlock' style={{
                    backgroundColor: blueBlock
                    }} 
                    onClick={changeColor}
                    >
        </div>
    </div>
  )
}

export default Content;


































// import { useState } from 'react'



// const Content = () => {
//     const [redBlock, setRedBlock] = useState("red")
//     const [blueBlock, setBlueBlock] = useState("blue")

//     const handleClick1 = () => {
//         setRedBlock(blueBlock);
//         setBlueBlock(redBlock);
//     }

//     return (    
//         <div>
//             <div style={{width: 50,
//                          height: 50,
//                          backgroundColor: redBlock
//             }} onClick={handleClick1}></div>
//             <div style={{width: 50,
//                          height: 50,
//                          backgroundColor: blueBlock
//             }} onClick={handleClick1}></div>
//         </div>
//         )
//     }

// export default Content