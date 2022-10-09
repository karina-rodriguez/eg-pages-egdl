import About from './components/About';
import EGdata from './components/EGdata';
// import Craftdata from './components/Craftdata';
import './App.css';


function App() {
  const text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
  
  return (
    <div className="App">
    {/* <About /> */}
    {/* <EGdata key='1'/> */}
    {/* <Craftdata /> */}
    <EGdata title='EG Workshop on Graphics and Cultural Heritage' subtitle='A workshop for Graphics and Heritage researchers and professionals' description={text} communityid='97846f9e-10b3-4c61-919b-ca65128c8e10'/>
   </div>


   );


}



export default App;

