import styled from 'styled-components';

const BodyCont = styled.div`
background-color: white;
padding: 30px;
font-family: 'Fira Sans', sans-serif;
font-size: 16px;
color: #005daa; 
`


export default function InfoComp({
}) { 
    return ( <div><BodyCont>
        
Expo Line <br />
The Expo Line operates two routes: <br />

Waterfront Station (Downtown Vancouver) to King George Station (Surrey) <br/>

Waterfront Station (Downtown Vancouver) to Production Way-University Station (Burnaby) <br/>

Transfer to the Millennium Line at the following stations: <br />

<ul>
<ul>Commercial-Broadway Station</ul>

Lougheed Town Centre Station

Production Way-University Station
</ls>


Use Columbia Station to transfer to and from a train going to either King George or Production Way-University.

Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.
    </BodyCont>
    </div>
    )

}