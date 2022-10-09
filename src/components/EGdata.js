import React from 'react';
import './EGdata.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react'


class EGdata extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            communityid: this.props.communityid,
            name: '',
            link: '',
            description: '',
            collections: [],        }
    }
    componentDidMount(){
        console.log('Component Did Mount '+this.state.communityid);
        // this.getCommunityData(this.state.communityid);
        this.getCommunityData();
    }

    async getCommunityData(){
        console.log("now get");
        // var policies = [
        //     // Referer will never be set.
        //     'no-referrer',
          
        //     // Referer will not be set when navigating from HTTPS to HTTP.
        //     'no-referrer-when-downgrade',
          
        //     // Full Referer for same-origin requests, and no Referer for cross-origin requests.
        //     'same-origin',
          
        //     // Referer will be set to just the origin, omitting the URL's path and search.
        //     'origin',
          
        //     // Referer will be set to just the origin except when navigating from HTTPS to HTTP,
        //     // in which case no Referer is sent.
        //     'strict-origin',
          
        //     // Full Referer for same-origin requests, and bare origin for cross-origin requests.
        //     'origin-when-cross-origin',
          
        //     // Full Referer for same-origin requests, and bare origin for cross-origin requests
        //     // except when navigating from HTTPS to HTTP, in which case no Referer is sent.
        //     'strict-origin-when-cross-origin',
          
        //     // Full Referer for all requests, whether same- or cross-origin.
        //     'unsafe-url'
        //   ];
        //   var url = 'users.json';
        // const response = await fetch('https://api.connectingcontexts.uk/Process.php?id=1');
    //     await fetch('https://diglib.eg.org/rest/communities/97846f9e-10b3-4c61-919b-ca65128c8e10', {
    //             method: "GET", // default, so we can ignore);
    //             headers: {
    //                         "Access-Control-Allow-Origin": "*",
    //                         "Content-Type": "text/plain"
    //                     },
    // }).then((response) => {
    //     if(response.status === 200){
    //         console.log("SUCCESSS")
    //         return response.text();     
    //     }else if(response.status === 408){
    //         console.log("SOMETHING WENT WRONG")
    //         this.setState({ requestFailed: true })
    //     };
    //     );
    // const xhr = new XMLHttpRequest();
    // const url1 = "https://diglib.eg.org/rest/communities/97846f9e-10b3-4c61-919b-ca65128c8e10";

    // xhr.open("GET", url1);
    // xhr.onreadystatechange1 = {someHandler(){console.log("aaaa11aaaaaa");}};
    // xhr.send();
    

    //https://wiki.lyrasis.org/display/DSPACE/2017-05-11+DSpace+7+UI+Working+Group+Meeting+notes
    await fetch('https://diglib.eg.org/rest/communities/97846f9e-10b3-4c61-919b-ca65128c8e10', 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
        }
            // headers: {
            //     'Content-Type': 'multipart/form-data',
            //     'Accept': 'text/html',
            //     'Cache-Control': 'no-cache',
            //     'Referrer': 'sss',
            // },
            // referrerPolicy: "no-referrer-when-downgrade",
            // mode: "cors",
        
        
        // headers: {
        //             // "Access-Control-Allow-Origin": '*',
        //             'Content-Type': 'application/json',
        //             // 'Cache-Control': 'private'
        //         },
                // referrer: "https://wwwnew.eg.org/",
                // referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
                // mode: "cors",
                // cache: "default",
                // redirect: "follow",
                // integrity: "", // a hash, like "sha256-abcdef1234567890"
                // keepalive: false, // true
                // signal: undefined, // AbortController to abort request
                // window: window, // null
                //     credentials: 'include',
        //         // referrer: "https://wwwnew.eg.org/", // or "" to send no Referer header,
        //         // or an url from the current origin
        //         // referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
        //         // mode: "cors", // same-origin, no-cors
        //         mode: "cors",
        //         // credentials: "same-origin", // omit, include
        //         // cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
        //         // redirect: "follow", // manual, error
        //         // integrity: "", // a hash, like "sha256-abcdef1234567890"
        //         // keepalive: false, // true
        //         // signal: undefined, // AbortController to abort request
        //         // window: window // null
        //               // credentials: 'include',
        // // mode: 'cors'
     }
    )
    .then((response) => {
        console.log("a");
        console.log(response)
        if(response.status === 200){
            console.log("SUCCESSS");
            return response.json();     
        }else if(response.status === 408){
            console.log("SOMETHING WENT WRONG")
            this.setState({ requestFailed: true })
        }


    })
    .then((data) => {
        console.log("b");

        console.log(data);
        console.log(data['uuid']);
        // this.state.name = data['uuid'];
        this.setState({name: data['name']});
        this.setState({link: data['link']});
        this.setState({description: data['introductoryText']});
        // console.log(data.json())

        // this.setState({ isLoading: false, downlines: data.response })
        // console.log("DATA STORED")
    })
    .catch((error) => {
        console.log("DATA aaa "+error)

        this.setState({ requestFailed: true })
        
    })
    

//     let url1 = 'https://diglib.eg.org/rest/communities/97846f9e-10b3-4c61-919b-ca65128c8e10';
    
//     let myheader = {
//             method: 'GET',
//             headers: {
//             'Content-Type': 'application/json;charset=utf-8',
//             'Access-Control-Allow-Origin': '*',
//             },
//             'referrerPolicy': 'no-referrer-when-downgrade',
//             'mode': 'cors', // no-cors, *cors, same-origin
//             'cache': 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//             // 'credentials': 'same-origin', // include, *same-origin, omit
//     };
//     let response = await fetch(url1,myheader);
//     // get one header
//     // alert(response.headers.get('Content-Type')); // application/json; charset=utf-8


//     let commits = await response.text(); // read response body and parse as JSON

//     // alert(commits[0].author.login);
// console.log("end call api")
// console.log("pass");

// var myHeaders = new Headers();
// myHeaders.append("Cookie", "JSESSIONID=2D72F41C0B312B8DB291FCCD6EFCB6B1");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Access-Control-Allow-Origin", "*");
// myHeaders.append("referrerPolicy", "no-referrer-when-downgrade");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://diglib.eg.org/rest/communities/97846f9e-10b3-4c61-919b-ca65128c8e10", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

//   console.log("pas1s");


        // console.log("pass");
        // const json = await response.text();
        // then((textResponse) => console.log('response is ', textResponse));
        // const json = await response.json();
        // console.log("res "+json);
        // // await fetch('https://diglib.eg.org/rest/communities/97846f9e-10b3-4c61-919b-ca65128c8e10', {
        // await fetch('https://api.connectingcontexts.uk/Process.php?id=1', {
        //     method: "GET", // default, so we can ignore
        //      headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Content-Type": "text/plain"
        //     },
        //     //  accept: 'application/json'
         
        // //  }).then((response) => response.json())
        // }).then((response) => response.text())
         
        //  .then((textResponse) => console.log('response is ', textResponse))
        //  .catch((error) => {
        //     console.log("3");

        //      console.log(error);
        //  });
        // console.log("2");
        // const json = await response.json();
        // console.log("3");
        // console.log(json);
        // const name = json.name;
        // const text = [];
        // const cards = [];
        // // console.log(processes.length);
        // for (let i = 0; i < processes.length; i++) {
        //     text.push(processes[i].Process);
        //     this.setState({slideshow: null});
        //     await this.recursiveSlideshow(processes[i].ID);
        //     cards.push(
        //         <div className="card" key={processes[i].ID} id={processes[i].ID} >
        //             <a href={"/Process?processId=" + processes[i].ID}>
        //                 <div className="container">
        //                     {/* Locally stored images */}
        //                     {/* <img src={require('../' + processes[i].image).default}  alt={'process image for ' + processes[i].Process}/> */}
        //                     <Carousel showIndicators={true} showStatus={true} showArrows={true} showThumbs={true} autoPlay={true} axis={"horizontal"} infiniteLoop={true}>
        //                     {this.state.slideshow}
        //                     </Carousel>
        //                     <p><b>{processes[i].Process}</b></p>
        //                 </div>
        //             </a>
        //         </div>
        //         // <div className="card">
        //         //     kskks
        //         // </div>
        //     );
        // }
        // console.log(cards.length);
        // this.setState({cards: cards});
        // this.setState({textpr: text});
        

    }



    render(){
        return (
        <div>
            <h1>{this.state.name}</h1>
            {/* <h2>{this.props.subtitle}</h2> */}
            <div className="row justify-content-md-center">
            </div>
            <br></br>
            <br></br>
            <Container>
                <Row className="justify-content-md-center">
                <Col lg={7}>                <div className="content" dangerouslySetInnerHTML={{__html: this.state.description}}></div>
</Col>
                <Col md={1}  className="vl"></Col>
              
                {/* {this.props.description} */}
                <Col lg={2}><h5>Social media: </h5></Col>

                {/* <Col md="auto" >                
                    Latest Proceedings 
                </Col>
                <Col md={1}  className="vl"></Col>
                <Col md="auto">
                    <h5>Social media</h5>
                </Col> */}

            {/* <div className="row justify-content-md-center">
            <div className="col col-lg-7">
            
            </div>
            <div className="vl"></div>
            <div className="col col-sm">
            </div>
            <div className="vl"></div>
            <div className="col col-sm">
                Social media
            </div>
            </div> */}
                </Row>
            </Container>
        </div>
        )
    }
}
export default EGdata;
