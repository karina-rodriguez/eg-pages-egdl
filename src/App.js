import EGdata from './components/EGdata';
import { Routes, Route } from "react-router-dom"
import './App.css';



function App() {
  
  var gchdescription = 'The EUROGRAPHICS Workshop on Graphics and Cultural Heritage (GCH) aims to foster an international dialogue between ICT experts and CH scientists to have a better understanding of the critical requirements for processing, managing, and delivering cultural information to a broader audience. The objective of the workshop is to present and showcase new developments within the overall process chain, from data acquisition, analysis and synthesis, 3D documentation, and data management, to new forms of interactive presentations and 3D printing solutions. Interdisciplinary approaches for analysis, classification and interpretation of cultural artefacts are particularly relevant to the event. ';
  var threedordescription = 'The EUROGRAPHICS Workshop on 3D object retrieval ...';
  var gsrdescription = 'EGSR is the ';
  return (
    <div className="App">

  <Routes>
    <Route path="/gch" element={
    <EGdata title='EG Workshop on Graphics and Cultural Heritage' 
    chair='Dieter Fellner and Karina Rodriguez Echavarria' 
    communityid='97846f9e-10b3-4c61-919b-ca65128c8e10' 
    id='gch'
    description={gchdescription}
    link=''
    facebook = 'https://www.facebook.com/GCH2022'
    twitter = 'https://twitter.com/eg_gch'
    youtube = 'https://www.youtube.com/channel/UCplAAkkummTE5b9JHYRlrPA'
    latestissueid='512c154d-aa8c-48a2-8014-38bae0131176'/> 
    } />
    <Route path="/3dor" element={
    <EGdata title='3DOR: Eurographics Workshop on 3D Object Retrieval' 
    chair='Ioannis Pratikakis Michela Spagnuolo' 
    communityid='ad14765c-e33f-469d-8503-52ecc14be4dc' 
    id='threedor'
    description={threedordescription}
    link=''
    latestissueid='33d7aaad-e140-46be-9e55-8f9628baf221'/> 
    } />
     <Route path="/egsr" element={
    <EGdata title='EGWR: Eurographics Workshop on Rendering' 
    chair='George Drettakis' 
    communityid='bcf84437-b0b6-4383-af4a-2a44ee5cb85c' 
    id='egsr'
    description={gsrdescription}
    link=''
    latestissueid='0a4ca6ad-fc2d-4607-8ce4-0c4ae6b5d7a7'/> 
    } />
  </Routes>
    {/* <About /> */}
    {/* <EGdata key='1'/> */}
    {/* <Craftdata /> */}
   </div>


   );


}



export default App;

