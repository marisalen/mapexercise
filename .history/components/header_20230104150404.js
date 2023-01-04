import styled from 'styled-components';
import globals.

const HeaderCont = styled.div`
width: 100%;
background-color: white;
border-bottom:3px solid #D3D3D3;
`
const Logo = styled.img`
width: 10%;
padding: 20px;
`
const Title = styled.div`
background-color: white;
padding: 20px;
font-color: #00008B;
`

export default function HeaderComp({
}) { 
    return ( <div><HeaderCont>
        <Logo src='./translinklogo.png'/>

    </HeaderCont>
    <Title>Skytrain Schedules</Title>
    </div>
    )

}