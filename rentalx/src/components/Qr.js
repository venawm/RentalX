import React from 'react'
import image from '../assests/qr.png'
import styled from 'styled-components'

const Qr=({setQr})=> {
    const click = ()=>{
        setQr(false)
        setTimeout(function() { window.location.reload(); }, 1000);
    }
  return (
    <Main>
        <img src={image} alt=""></img>
        <p>Please pay your booking amount through the QR code and put your website username in the remarks section</p>
        <button onClick={click}>Done</button>
    </Main>
    
  )
}
const Main = styled.div`
 border-radius: 5%;
text-align: center;
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

    img{
        width: 20rem;
    }
    button{
        margin-top: 1rem;
        border: none;
        background-color: #FF5722;
        height: 3rem;
        width: 20vw;
        font-size: medium;
        font-weight: 700;
        color: #EEEEEE;
       
        border-radius: 10px;
        :hover{
            cursor: pointer;
            background-color: #ffb39b;          
        }
      }
    
`

export default Qr