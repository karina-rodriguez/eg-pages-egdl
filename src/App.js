// (base) Karina-Laptop-2:react-pages-egdl kre$ scp -r build/ chws@chws.brighton.domains:/home/chws/www/web/wp-content/reactpress/apps/eg-pages-egdl
import EGdata from './components/EGdata';
import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom"
import './App.css';

// const routes = {
//   "/": () => <EGdata title='3DOR: Eurographics Workshop on 3D Object Retrieval' 
//   chair='Ioannis Pratikakis Michela Spagnuolo' 
//   communityid='ad14765c-e33f-469d-8503-52ecc14be4dc' 
//   id='threedor'
//   // description={threedordescription}
//   link=''
//   latestissueid='33d7aaad-e140-46be-9e55-8f9628baf221'/>,
//   "/3dor": () => <EGdata title='3DOR: Eurographics Workshop on 3D Object Retrieval' 
//   chair='Ioannis Pratikakis Michela Spagnuolo' 
//   communityid='ad14765c-e33f-469d-8503-52ecc14be4dc' 
//   id='threedor'
//   // description={threedordescription}
//   link=''
//   latestissueid='33d7aaad-e140-46be-9e55-8f9628baf221'/>,
//   "/contact": () => <EGdata />
// };

var gchdescription = 'The EUROGRAPHICS Workshop on Graphics and Cultural Heritage (GCH) aims to foster an international dialogue between ICT experts and CH scientists to have a better understanding of the critical requirements for processing, managing, and delivering cultural information to a broader audience. The objective of the workshop is to present and showcase new developments within the overall process chain, from data acquisition, analysis and synthesis, 3D documentation, and data management, to new forms of interactive presentations and 3D printing solutions. Interdisciplinary approaches for analysis, classification and interpretation of cultural artefacts are particularly relevant to the event. ';
var threedordescription = 'The EUROGRAPHICS Workshop on 3D object retrieval ...';
var gsrdescription = 'EGSR is the ';

function App() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  console.log("rendering...");

  // constructor(props){
  //   super(props);
  //   console.log(this.props.location);
  //   this.state = {
  //     show: 'none',
  //   };
  //   //to force to reload
  //   // this.updateUser = this.updateUser.bind(this);

  // }
  // componentDidMount(){
  //   // this.updateUser();
  //   console.log('I mounted -> props values', this.props); //it will print the props values
  // }
  // shouldComponentUpdate(nextProps){
  //   console.log("I am ghere");
  //   return nextProps.changedProp !== this.state.changedProp;
  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return { myStateProperty: nextProps.myProp};
  // }
  // componentDidUpdate(prevProps) {
  //   console.log('I got updated -> props values', this.prevProps); //it will print the props values
  //   // if(!equal(this.props.user, prevProps.user)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
  //   // {
  //   //   this.updateUser();
  //   // }
  // }
//   render() {
    return (

    <div className="App">
    <HashRouter forceRefresh={true}>
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
        } onLoad={forceUpdate}/>
        
        <Route path="/3dor" element={
        <EGdata title='3DOR: Eurographics Workshop on 3D Object Retrieval' 
        chair='Ioannis Pratikakis Michela Spagnuolo' 
        communityid='ad14765c-e33f-469d-8503-52ecc14be4dc' 
        id='threedor'
        description={threedordescription}
        link=''
        latestissueid='33d7aaad-e140-46be-9e55-8f9628baf221'/> 
        } onLoad={forceUpdate}/>
        <Route path="/egsr" element={
        <EGdata title='EGWR: Eurographics Workshop on Rendering' 
        chair='George Drettakis' 
        communityid='bcf84437-b0b6-4383-af4a-2a44ee5cb85c' 
        id='egsr'
        description={gsrdescription}
        link=''
        latestissueid='0a4ca6ad-fc2d-4607-8ce4-0c4ae6b5d7a7'/> 
        } onLoad={forceUpdate}/>
        <Route path="/sca" element={
        <EGdata title='SCA: Eurographics Symposium on Computer Animation' 
        chair='Tamar Shinar and Christopher Batty' 
        communityid='676e8f6c-16eb-43e9-9add-4cb26a79d3a0' 
        id='sca'
        description={gsrdescription}
        link=''
        latestissueid='2045a532-c714-4f84-92dc-a4e5046c56d0'/> 
        } onLoad={forceUpdate}/> 
        </Routes> 
      </HashRouter>
     
        </div>
    )
  }

// }
export default App;

// function App() {
//   // const routeResult = useRoutes(routes)

//   var gchdescription = 'The EUROGRAPHICS Workshop on Graphics and Cultural Heritage (GCH) aims to foster an international dialogue between ICT experts and CH scientists to have a better understanding of the critical requirements for processing, managing, and delivering cultural information to a broader audience. The objective of the workshop is to present and showcase new developments within the overall process chain, from data acquisition, analysis and synthesis, 3D documentation, and data management, to new forms of interactive presentations and 3D printing solutions. Interdisciplinary approaches for analysis, classification and interpretation of cultural artefacts are particularly relevant to the event. ';
//   var threedordescription = 'The EUROGRAPHICS Workshop on 3D object retrieval ...';
//   var gsrdescription = 'EGSR is the ';
//   return (
//     <div className="App">

//     <Routes>

//     <Route path="a/" element={<EGdata />}></Route>
//     <Route path="3dor" element={ <EGdata title='3DOR: Eurographics Workshop on 3D Object Retrieval' 
//       chair='Ioannis Pratikakis Michela Spagnuolo' 
//       communityid='ad14765c-e33f-469d-8503-52ecc14be4dc' 
//       id='threedor'
//       description={threedordescription}
//       link=''
//       latestissueid='33d7aaad-e140-46be-9e55-8f9628baf221'/> 
//     } />
//     <Route path="*" element={<p>Path not resolved</p>} />

//     {/* <Route
//       exact
//       path="/"
//       render={() => (
//         <EGdata title='3DOR: Eurographics Workshop on 3D Object Retrieval' 
//       chair='Ioannis Pratikakis Michela Spagnuolo' 
//       communityid='ad14765c-e33f-469d-8503-52ecc14be4dc' 
//       id='threedor'
//       description={threedordescription}
//       link=''
//       latestissueid='33d7aaad-e140-46be-9e55-8f9628baf221'/> 
//       )} */}
//     /> 
//       {/* <Route component={props => <EGdata title='3DOR: Eurographics Workshop on 3D Object Retrieval' 
//     chair='Ioannis Pratikakis Michela Spagnuolo' 
//     communityid='ad14765c-e33f-469d-8503-52ecc14be4dc' 
//     id='threedor'
//     description={threedordescription}
//     link=''
//     latestissueid='33d7aaad-e140-46be-9e55-8f9628baf221'/>} exact path="/" />  */}
//     {/* <Route path="/" element={
//     <EGdata title='EG Workshop on Graphics and Cultural Heritage' 
//     chair='Dieter Fellner and Karina Rodriguez Echavarria' 
//     communityid='97846f9e-10b3-4c61-919b-ca65128c8e10' 
//     id='gch'
//     description={gchdescription}
//     link=''
//     facebook = 'https://www.facebook.com/GCH2022'
//     twitter = 'https://twitter.com/eg_gch'
//     youtube = 'https://www.youtube.com/channel/UCplAAkkummTE5b9JHYRlrPA'
//     latestissueid='512c154d-aa8c-48a2-8014-38bae0131176'/> 
//     } /> */}
//     {/* <Route path="/gch" element={
//     <EGdata title='EG Workshop on Graphics and Cultural Heritage' 
//     chair='Dieter Fellner and Karina Rodriguez Echavarria' 
//     communityid='97846f9e-10b3-4c61-919b-ca65128c8e10' 
//     id='gch'
//     description={gchdescription}
//     link=''
//     facebook = 'https://www.facebook.com/GCH2022'
//     twitter = 'https://twitter.com/eg_gch'
//     youtube = 'https://www.youtube.com/channel/UCplAAkkummTE5b9JHYRlrPA'
//     latestissueid='512c154d-aa8c-48a2-8014-38bae0131176'/> 
//     } />
//     <Route path="/3dor" element={
//     <EGdata title='3DOR: Eurographics Workshop on 3D Object Retrieval' 
//     chair='Ioannis Pratikakis Michela Spagnuolo' 
//     communityid='ad14765c-e33f-469d-8503-52ecc14be4dc' 
//     id='threedor'
//     description={threedordescription}
//     link=''
//     latestissueid='33d7aaad-e140-46be-9e55-8f9628baf221'/> 
//     } />
//     <Route path="/egsr" element={
//     <EGdata title='EGWR: Eurographics Workshop on Rendering' 
//     chair='George Drettakis' 
//     communityid='676e8f6c-16eb-43e9-9add-4cb26a79d3a0' 
//     id='egsr'
//     description={gsrdescription}
//     link=''
//     latestissueid='0a4ca6ad-fc2d-4607-8ce4-0c4ae6b5d7a7'/> 
//     } />
//     <Route path="/sca" element={
//     <EGdata title='SCA: Eurographics Symposium on Computer Animation' 
//     chair='Tamar Shinar and Christopher Batty' 
//     communityid='bcf84437-b0b6-4383-af4a-2a44ee5cb8git5c' 
//     id='sca'
//     description={gsrdescription}
//     link=''
//     latestissueid='2045a532-c714-4f84-92dc-a4e5046c56d0'/> 
//     } />*/}
//     </Routes>  
//    </div>
//   );  
// }



// export default App;

