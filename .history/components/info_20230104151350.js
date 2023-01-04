import styled from 'styled-components';

const BodyCont = styled.div`
background-color: white;
border-bottom:3px solid #D3D3D3;
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