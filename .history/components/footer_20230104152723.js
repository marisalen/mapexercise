import styled from 'styled-components';

const HeaderCont = styled.div`
width: 100%;
background-color: #D3D3D3;
`

export default function HeaderComp({
}) { 
    return ( <div><HeaderCont>
        <Logo src='./translinklogo.png'/>

    </HeaderCont>
    <Title>Skytrain Stations</Title>
    </div>
    )

}