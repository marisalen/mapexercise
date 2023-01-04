import styled from 'styled-components';

const HeaderCont = styled.div`
width: 100%;
background-color: black;
`
const Logo = styled.img`
width: 2%;
`

export default function HeaderComp({
}) { 
    return ( <HeaderCont>
        <Logo src='C:\Users\maris\OneDrive\Desktop\map\public\translinklogo.png'/>

    </HeaderCont>
    )

}