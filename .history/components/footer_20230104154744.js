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
width: 30%;
font-family: 'Fira Sans', sans-serif;
color: #073763;
`
const InputCont = styled.input`
width: 25%;
height: 50px;
margin-left: 10px;
margin-right: 10px;
border: 1px solid #A5A5A5;
border-radius: 5px;
padding: 5px;
font-family: 'Fira Sans', sans-serif;
`
const ButtonCont = styled.button`
width: 20%;
background-color: #005daa;
color: white;
border: none;
border-radius: 5px;
font-family: 'Fira Sans', sans-serif;
font-size: 20px;
height: 100%;
`

export default function FooterComp({
}) { 
    return ( <div><FooterCont>
        <InfoCont>Subscribe to the <b>TransLink Monthly Updates</b> newsletter to receive the latest news, projects, transit service changes and other initiatives. You may unsubscribe at any time.</InfoCont>
        <InputCont placeholder='First Name'/>
        <InputCont placeholder='Email Address'/>
        <ButtonCont>Subscribe</ButtonCont>
    </FooterCont>
    </div>
    )

}