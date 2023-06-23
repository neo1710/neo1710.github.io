import styled from 'styled-components';


export const Navbar=()=>{

    return (
        <NAV id="nav-menu">
            <h1>Neeraj Dubey</h1>

         
                <button className="nav-link home">Home</button>
            <button className="nav-link about">About</button>
            <button className="nav-link skills">Skills</button>
            <button className="nav-link contact">Contact</button>
            <button className="nav-link projects">Projects</button>
            <button className="nav-link resume">Resume</button>
           
           
        </NAV>
    )
}

const NAV=styled.div`
background-color: aqua;
display: flex;
justify-content: space-around;
width: 100%;
align-items: center;
/* .nav-but{
    display: flex;
    justify-content:space-around;
width: 60%;
height: 40px;
} */
button{
   background-color :blue ;
   border-radius: 50%;
   width: 10%;
   height: 50px;
   border: 3px aqua dashed;
}
`