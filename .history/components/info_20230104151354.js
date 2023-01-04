import styled from 'styled-components';

const BodyCont = styled.div`
background-color: white;
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