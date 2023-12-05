import React from 'react';
import './EGdata.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import myPDFImage from '../images/pdf.png'
import myMetadataImage from '../images/metadata.png'
import { TagCloud } from 'react-tagcloud'
// import { ReactComponent as PDFlogo } from './logo.svg';

class EGdata extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            communityid: this.props.communityid,
            latestissueid: this.props.latestissueid,
            chair:this.props.chair,
            textdescription:this.props.description,
            link: this.props.link,
            facebook: this.props.facebook,
            twitter: this.props.twitter,
            youtube: this.props.youtube,
            id:this.props.id,
            
            //to be filled
            name: '',
            description: '',
            collections: [],  
            latestcollection: '',     
            topics : [],
            // show: false,

            }
    }
    componentDidMount(){
        console.log('Component Did Mount '+this.state.communityid);
        //https://wiki.lyrasis.org/display/DSPACE/2017-05-11+DSpace+7+UI+Working+Group+Meeting+notes
        //https://wiki.lyrasis.org/dsdoc6x/dspace-development/rest-api
        //find communities with https://diglib.eg.org/rest/communities/
        //getvalues
        var id = this.state.communityid;
        var lastissueid = this.state.latestissueid;
        this.getCommunityData(id);
        // this.getCollections(id);
        // // this.getAuthors(id);
        // this.getLastIssue(lastissueid);
        // this.getTopics(id);
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps method is called'+state.id);
    //     return {  
    //         id: props.communityid,
    //         latestissueid: this.props.latestissueid,
    //         chair:this.props.chair,
    //         textdescription:this.props.description,
    //         link: this.props.link,
    //         facebook: this.props.facebook,
    //         twitter: this.props.twitter,
    //         youtube: this.props.youtube,
    //         id:this.props.id,        
    //     };
    // }

    async getCommunityData(id){


    //1******This code works for the gtUKI - do NOT CHANGE IT as it serves as an example ******
    // const theresponse = await fetch('https://gtr.ukri.org/gtr/api/projects/5D97ECD1-DCB3-4836-A84E-547386D59BC7',{
    //     headers: {
    //         'Accept': 'application/json',

    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //     }
    // });
    // const json = await theresponse.text();
    // console.log(json);
    //******This code below works for the gtUKI - do NOT CHANGE IT as it serves as an example ******

     //2******This code works for the gtUKI - do NOT CHANGE IT as it serves as an example ******
    //  const myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append('Accept', 'application/ss');
    // myHeaders.append('Access-Control-Allow-Origin', '*');
    // myHeaders.append('crossDomain', 'True');


    // const theresponse = await fetch('https://gtr.ukri.org/gtr/api/projects/5D97ECD1-DCB3-4836-A84E-547386D59BC7',{
    //     // mode: 'cors',
    //     method: 'GET',
    //     // credentials: 'include',
    //     // cache: 'no-cache',
    //     headers: myHeaders,
    // });
    // const json = await theresponse.text();
    // console.log(json);  
    //2******This code works for the gtUKI - do NOT CHANGE IT as it serves as an example ******


    // fetch('https://api.connectingcontexts.uk/Learn.php')
    //    .then(response => response.json())
    //    .then(data => console.log(data));

    // const theresponse = await fetch('https://diglib.eg.org/rest/test',{
    // const theresponse = await fetch('https://diglib.eg.org/rest/communities/?expand=all',{
    // const myHeaders = new Headers();
    // // myHeaders.append('Content-Type', 'application/xml');
    // myHeaders.append('Accept', 'application/xml');
    // myHeaders.append('Access-Control-Allow-Origin', '*');
    // // myHeaders.append('Access-Control-Allow-Credentials','True')
    // // myHeaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // // myHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
    // // myHeaders.append('crossDomain', 'True');
    // // myHeaders.append('Backbone.emulateHTTP', 'True');

    // const theresponse1 = await fetch('https://gtr.ukri.org/gtr/api/projects/5D97ECD1-DCB3-4836-A84E-547386D59BC7',{
    //     mode: 'cors',
    //     method: 'GET',
    //     // credentials: 'include',
    //     cache: 'no-store',
    //     headers: myHeaders,
    // });




    // look at this link discussing the problem: https://stackoverflow.com/questions/11300874/backbone-fetch-request-is-options-method
    //it seems an option call preceds the GET call and it fails,
    //accordinf to: https://stackoverflow.com/questions/7067966/why-doesnt-adding-cors-headers-to-an-options-route-allow-browsers-to-access-my
    //any Request Headers apart from the following will trigger a pre-flight request, including Access-Control-Allow-Origin’
    //this is why when the error is triggered with 'Reason: CORS header ‘Access-Control-Allow-Origin’ missing' and I add, then the OPTIONS call is 
    //triggered and this fails.
    // const json1 = await theresponse1.text();
    // console.log(json1); 
    // const theresponse = await fetch('https://diglib.eg.org/rest/communities',{
    //     // mode: 'cors',
    //     method: 'GET',
    //     credentials: 'include',
    //     // cache: 'no-cache',
    //     headers: myHeaders,
    // });
    // const json = await theresponse.text();
    // console.log(json);    



   
//         console.log("aaaa");
//     // fetch(`https://api.github.com/users/eunit99/repos`,{
//     // fetch(`https://gtr.ukri.org/gtr/api/projects/5D97ECD1-DCB3-4836-A84E-547386D59BC7`,{
    // fetch('https://diglib.eg.org/rest/communities/',{mode: 'cors'})
//     // // .then(res => res.json())
//     // .then(
//     // (result) => {
//     //     this.setState({
//     //         isLoaded: true,
//     //         items: result.items
//     //     });
//     //     },
//     //     // Note: it's important to handle errors here
//     //     // instead of a catch() block so that we don't swallow
//     //     // exceptions from actual bugs in components.
//     //     (error) => {
//     //     this.setState({
//     //         isLoaded: true,
//     //         error
//     //     });
//     // }
//     // )
//     // console.log("bbb");
//     let headers = new Headers();

//   fetch('https://api.github.com/users/hacktivist123/repos')
//   .then(response => response.json())
//   .then(data => console.log(data));




    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    // headers.append('Origin','http://localhost:3000');
    // headers.append('Access-Control-Allow-Origin','http://localhost');
    // fetch('https://gtr.ukri.org/gtr/api/projects/5D97ECD1-DCB3-4836-A84E-547386D59BC7'
    // // fetch('https://api.connectingcontexts.uk/Learn.php', {
    // // fetch('https://diglib.eg.org/rest/communities/'
    // , {
    // //     // crossDomain:true,
    // //     // method: 'GET',
    // //     // mode: 'cors',
    //     // headers: {
    // // //     // //  'Accept': 'application/json',
    // //         'Content-Type': 'text/xml',
    // //         'Access-Control-Allow-Origin': '*',
    // // //     // 'SOAPAction': 'basicInvoke',
    // // //     // // 'Content-Type': 'multipart/form-data'
    // //     },
    //     method: 'GET',
    //     mode: 'cors',
    //     headers: {
    //         // 'Content-Type': 'text/xml',
    //         // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    //         'Content-Type': 'application/json'
    //     }

    //   }
    //   )
    // .then((response) => {
    //     console.log("here _ responnse ");

    //     console.log(response);
    //     console.log(response.headers());
    //     if(response.status === 200){
    //         console.log("********* "+response.text());
    //         return response.text();     
    //     }else if(response.status === 408){
    //         this.setState({ requestFailed: true })
    //     }
    // }).then((data) => {
    //     console.log("here _ data ");

    //     console.log("here _ data ");
    //     console.log("some data is here"+data);
    //     // this.setState({name: data['name']});
    //     // this.setState({description: data['introductoryText']});
    //     // this.setState({ isLoading: false, downlines: data.response })
    // })
    // .catch((error) => {
    //     console.log("error"+error);
    //     this.setState({ requestFailed: true })      
    // })

    // fetch('https://gtr.ukri.org/gtr/api/projects/5D97ECD1-DCB3-4836-A84E-547386D59BC7', {
    //     mode: 'cors',
    //     // credentials: 'include',
    //     method: 'GET',
    //     headers: headers
    // })
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(error => console.log('Authorization failed: ' + error.message));
    // fetch(`https://api.github.com/users/eunit99/repos`)
    //   .then(response => response.json())
    //   .then((usefulData) => {
    //     console.log(usefulData);

    //   })
    //   .catch((e) => {
    //     console.error(`An error occurred: ${e}`)
    //   });

    // fetch('https://api.github.com/users/eunit99/repos', {

    // //investigate how to do pre-flight and get data correctly. Maybe check first hwo to set it up correctly for another sewrver
    await fetch('https://diglib.eg.org/rest/communities/'+id, 
        {
            'Accept': 'application/xml',
            'content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    )
    .then((response) => {
        console.log(response);
        if(response.status === 200){
            return response.json();     
        }else if(response.status === 408){
            this.setState({ requestFailed: true })
        }
    })
    .then((data) => {
        console.log(data);
        this.setState({name: data['name']});
        this.setState({description: data['introductoryText']});
        // this.setState({ isLoading: false, downlines: data.response })
    })
    .catch((error) => {
        console.log(error);

        this.setState({ requestFailed: true })      
    })
    }
    async getCollections(id){
        
     
        await fetch('/communities/'+id+'/collections', 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            }
        }
        )
        .then((response) => {
            
            if(response.status === 200){
                return response.json();     
            }else if(response.status === 408){
                this.setState({ requestFailed: true })
            }
        })
        .then((data) => {
            console.log(data);
            var newcollections = [];
            for (var key in data) {
                // console.log(data[key].uuid);
                var combined = { nameofcollection: data[key].name, 
                                 idofcollection: data[key].uuid,
                                 linkofcollection: 'https://diglib.eg.org'+data[key].link};
                                 newcollections.push(combined);
            }
            this.setState({ collections: newcollections }) 

        })
        .catch((error) => {
            this.setState({ requestFailed: true })      
        })
    }
    
    async getAuthors(id){
        // await fetch('https://diglib.eg.org/rest/communities/'+id+'/collections', 
        // {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'Access-Control-Allow-Origin': '*',
        //     }
        // }
        // )
        // .then((response) => {
            
        //     if(response.status === 200){
        //         return response.json();     
        //     }else if(response.status === 408){
        //         this.setState({ requestFailed: true })
        //     }
        // })
        // .then((data) => {
        //     console.log(data);

        //     var newcollections = [];
           


        //     for (var key in data) {
        //         console.log(data[key].uuid);
        //         var combined = { nameofcollection: data[key].name, 
        //                          idofcollection: data[key].uuid,
        //                          linkofcollection: 'https://diglib.eg.org'+data[key].link}                                 
        //                          ;

        //         newcollections.push(combined);



        //     }
        //     this.setState({ collections: newcollections }) 

        // })
        // .catch((error) => {
        //     this.setState({ requestFailed: true })      
        // })
    }
    async getLastIssue(id){
        await fetch('/collections/'+id, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
            }
        }
        )
        .then((response) => {
            if(response.status === 200){
                return response.json();     
            }else if(response.status === 408){
                this.setState({ requestFailed: true })
            }
        })
        .then((data) => {
            // console.log(data['introductoryText']);            
            // var textcollections = data['introductoryText'].replace(/[\r\n]src="\/static\/icons\/metadata.gif"/gmi, "src=\""+myMetadataImage+"\"");
            var textcollections = data['introductoryText'].replace(/\n/g," ");
            // textcollections = textcollections.replace(/\s{2,}/g," ");
            textcollections = textcollections.replace(/src="\/static\/icons\/metadata.gif"/gmi, "src=\""+myMetadataImage+"\"");
            // textcollections = textcollections.replace(/src="\/static\/icons\/metadata.gif"/gmi, "src=\"/wp-content/reactpress/apps/eg-pages-egdl/public/images/metadata.svg\"");

            
            
            // console.log("----*******---");
            // console.log("I am news");
            // textcollections = textcollections.replace(/src="\/static\/icons\/metadata.gif"/gmi,"src=\"/wp-content/reactpress/apps/eg-pages-egdl/public/images/pdf.svg\"");
            textcollections = textcollections.replace(/src="\/static\/icons\/pdf.gif"/gi, "src=\""+myPDFImage+"\"");
            // textcollections = textcollections.replaceAll("height=\"16\" width=\"16\"","height=\"5px\" width=\"5px\"")
            // textcollections = textcollections.replace(/src="\/static\/icons\/pdf.gif"/gi, "src=\"/%PUBLIC_URL%//pdf.svg\"");
            // console.log("-------");
            // console.log(textcollections);
            this.setState({latestcollection: textcollections});

        })
        .catch((error) => {
            this.setState({ requestFailed: true })      
        })
    }
    async getTopics(id){
        // https://diglib.eg.org/solr/search
        await fetch('/collections/'+id, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
            }
        }
        )
        .then((response) => {
            
            if(response.status === 200){
                return response.json();     
            }else if(response.status === 408){
                this.setState({ requestFailed: true })
            }
        })
        .then((data) => {
            
            var topics = [
                { value: 'Applied computing', count: 29 },
                { value: 'Computing methodologies', count: 27 },
                { value: 'Human centered computing', count: 13 },
                { value: 'Arts and humanities', count: 11 },
                { value: 'Virtual reality', count: 7 },
                { value: 'Digital libraries and archives', count: 5 },
                { value: 'Fine arts', count: 5 },
                { value: 'Image processing', count: 5 },
                { value: 'Archaeology', count: 4 },
                { value: 'Architecture (buildings)', count: 4 },
                ];

            this.setState({topics: topics});

        })
        .catch((error) => {
            this.setState({ requestFailed: true })      
        })
    }
    

    render(){
        return (
        <div>
            <br/>
            {/* Description of the event */}
            <Container fluid>
                <Row className="justify-content-md-center">

                    <Col lg={9} className={"container-title " + this.state.id}>  
                    <div ><strong>{this.state.name}</strong> </div>
                    </Col>
    
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={9} className='container-text'>   
                    <div>
                        {this.state.textdescription}
                    </div>
                    <br/>

                    <div><strong>Chair of steering committee:</strong> {this.state.chair}</div>
                    <br/>
                    <div  dangerouslySetInnerHTML={{__html: this.state.description}}></div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={9} className={"container-socialmedia "+ this.state.id}> 
                    <div><strong>Social media: </strong>
                    <SocialIcon className='socialicon' bgColor="white" url={this.state.link} />
                    <SocialIcon className='socialicon' network="twitter" bgColor="white" url={this.state.twitter} />
                    <SocialIcon className='socialicon' network="facebook" bgColor="white" url={this.state.facebook} />
                    <SocialIcon className='socialicon' network="youtube" bgColor="white" url={this.state.youtube} />
                    </div>
                    </Col>
                </Row>
            </Container>



            <br></br>
            {/* Subject areas */}
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col lg={9} className={"container-title " + this.state.id}>                
                    <div ><strong>Subject areas</strong> </div>
                    </Col>
    
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={9} className='container-keywords'>   
                        <TagCloud
                        minSize={15}
                        maxSize={35}
                        tags={this.state.topics}
                        colorOptions={{
                            luminosity: 'bright',
                            hue: this.state.color,
                            format: 'rgb'
                          }}
                          style={{ textAlign: 'center' }}

                          randomSeed={15}
                        // onClick={tag => alert(`'${tag.value}' was selected!`)}
                        />
                    </Col>
                </Row>
             
            </Container>

            {/* Bibliometrics */}
            <br></br>
            <Container fluid>
            <Row>
            <Col lg={2} className='container-bibiometrics years'>   
                <div >
                Publication years
                </div>
                <div >
                <strong><i>2003-2022</i></strong>
                </div>
            </Col>
            <Col lg={2} className='container-bibiometrics papers'>   
                <div >
                Total papers
                </div>
                <div >
                <strong><i>TBD</i></strong>
                </div>
            </Col>
            <Col lg={2} className='container-bibiometrics visitspermonth'>   
                <div >
                Average visits per month
                </div>
                <div >
                <strong><i>TBD</i></strong>
                </div>
            </Col>
            <Col lg={2} className='container-bibiometrics visits4weeks'>   
                <div >
                Total visits (4 weeks)
                </div>
                <div >
                <strong><i>TBD</i></strong>
                </div>
            </Col>
            <Col lg={2} className='container-bibiometrics averagedownload'>   
                <div >
                Average downloads 
                </div>
                <div >
                <strong><i>TBD</i></strong>
                </div>
            </Col>
            <Col lg={2} className='container-bibiometrics averagedownloadperarticle'>   
                <div >
                Average downloads per artcile
                </div>
                <div >
                <strong><i>TBD</i></strong>
                </div>
            </Col>
            </Row>
            </Container>
            <br/>
           
            {/* Last issue */}
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col lg={9} className={"container-title " + this.state.id}>                
                    <div ><strong>Last Proceedings</strong> </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={9} className='container-text'>   
                   <div  dangerouslySetInnerHTML={{__html: this.state.latestcollection}}></div>
                    </Col>
                </Row>
             </Container>
            {/* All issues */}
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col lg={9} className={"container-title " + this.state.id}>                
                    <div ><strong>All Proceedings</strong> </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={9} className='container-text'>   

                    <div className="div-titles">
                        <ul>
                            {this.state.collections.map((item,i) => (
                            <li key={item['idofcollection']}><a href={item['linkofcollection']}>{item['nameofcollection']}</a></li>
                            ))}
                        </ul>
                    </div>

                    </Col>
                </Row>
             </Container>
            <br/>  
        </div>
        )
    }
}
export default EGdata;


