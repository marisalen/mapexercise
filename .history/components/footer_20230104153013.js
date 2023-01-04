import styled from 'styled-components';

const FooterCont = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: #D3D3D3;
`

export default function FooterComp({
}) { 
    return ( <div><FooterCont>
        <InfoCont>hi</InfoCont>
        <InputCont>hi</InputCont>
        <InputCont></InputCont>
        <ButtonCont></ButtonCont>
    </FooterCont>
    </div>
    )

}