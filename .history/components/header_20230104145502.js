import styled from 'styled-components';

const HeaderCont = styled.div`
width: 100%;
background-color: black;
`
const Logo = styled.img`

`

export default function HeaderComp({
}) { 
    return ( <HeaderCont>
        <Logo />

    </HeaderCont>
    )

}