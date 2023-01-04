import styled from 'styled-components';

const FooterCont = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: #D3D3D3;
`
const InfoCont = styled.div`
`
const InputCont = styled.input`
`
const ButtonCont = styled.button`
`

export default function FooterComp({
}) { 
    return ( <div><FooterCont>
        <InfoCont>hi</InfoCont>
        <InputCont>hi</InputCont>
        <InputCont>hi</InputCont>
        <ButtonCont>hi</ButtonCont>
    </FooterCont>
    </div>
    )

}