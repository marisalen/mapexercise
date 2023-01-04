import styled from 'styled-components';

const FooterCont = styled.div`
display: flex;
flex-direction: row;
width: 100%;
background-color: #D3D3D3;
padding: 40px;
justify-content: center;
`
const InfoCont = styled.div`
`
const InputCont = styled.input`
width: 300px;
height: 50px;
margin-left: 10px;
margin-left: 10px;
`
const ButtonCont = styled.button`
`

export default function FooterComp({
}) { 
    return ( <div><FooterCont>
        <InfoCont>hi</InfoCont>
        <InputCont />
        <InputCont />
        <ButtonCont>hi</ButtonCont>
    </FooterCont>
    </div>
    )

}