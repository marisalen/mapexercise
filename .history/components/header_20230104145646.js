import styled from 'styled-components';

const HeaderCont = styled.div`
width: 100%;
background-color: white;
border-bottom
`
const Logo = styled.img`
width: 30%;
`

export default function HeaderComp({
}) { 
    return ( <HeaderCont>
        <Logo src='./translinklogo.png'/>

    </HeaderCont>
    )

}