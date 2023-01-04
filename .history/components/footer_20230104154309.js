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
margin-right: 10px;
border: 1px solid #A5A5A5;
border-radius: 5px;
padding: 5px;font-family: 'Fira Sans', sans-serif;
`
const ButtonCont = styled.button`
width: 250px;
background-color: #005daa;
color: white;
border: none;
border-radius: 5px;
`

export default function FooterComp({
}) { 
    return ( <div><FooterCont>
        <InfoCont>hi</InfoCont>
        <InputCont placeholder='First Name'/>
        <InputCont placeholder='Email Address'/>
        <ButtonCont>hi</ButtonCont>
    </FooterCont>
    </div>
    )

}