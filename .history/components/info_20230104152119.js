import styled from 'styled-components';

const BodyCont = styled.div`
background-color: white;
padding: 30px;
font-family: 'Fira Sans', sans-serif;
font-size: 20px;
color: #005daa; 
`
const List = styled.ul`
margin-left:50px;
`

export default function InfoComp({
}) { 
    return ( <div><BodyCont>
        
<b>Expo Line</b> <br />
The Expo Line operates two routes: <br />

Waterfront Station (Downtown Vancouver) to King George Station (Surrey) <br/>

Waterfront Station (Downtown Vancouver) to Production Way-University Station (Burnaby) <br/>

Transfer to the Millennium Line at the following stations: <br />

<List>
<li>Commercial-Broadway Station</li>

<li>Lougheed Town Centre Station</li>

<li>Production Way-University Station</li>
</List> <br />


Use Columbia Station to transfer to and from a train going to either King George or Production Way-University. <br />

Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.
    </BodyCont>
    </div>
    )

}