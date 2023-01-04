import styled from 'styled-components';

const HeaderCont = styled.div`
width: 100%;
border-bottom:3px solid #D3D3D3;
`
const Logo = styled.img`
width: 10%;
padding: 20px;
`

export default function HeaderComp({
}) { 
    return ( <HeaderCont>
        <Logo src='./translinklogo.png'/>

    </HeaderCont>
    )

}