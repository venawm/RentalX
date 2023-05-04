import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'

function Notifications() {
  return (
    <div class="container">
        <NavBar/>
        <Main>
            <h1>Notifications</h1>
            <div class="cont">

            </div>
        </Main>
    </div>
  )
}

const Main = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color: #ff5722;
        font-size: xx-large;
        font-weight: 800;
    }
    .cont{
        margin-top: 3rem;
        height: 3rem;
        width: 50vw;
        border: 2px solid black;
    }
`

export default Notifications