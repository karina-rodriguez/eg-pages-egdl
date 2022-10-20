import React from 'react';
import './EGdata.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import myPDFImage from '../images/pdf.svg'
import myMetadataImage from '../images/metadata.svg'
import { TagCloud } from 'react-tagcloud'
import randomColor from 'randomcolor';


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
            topics : []

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
        this.getCollections(id);
        this.getAuthors(id);
        this.getLastIssue(lastissueid);
        this.getTopics(id);
    }

    async getCommunityData(id){
        

    await fetch('https://diglib.eg.org/rest/communities/'+id, 
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
        this.setState({name: data['name']});
        this.setState({description: data['introductoryText']});
        // this.setState({ isLoading: false, downlines: data.response })
    })
    .catch((error) => {
        this.setState({ requestFailed: true })      
    })
    }
    async getCollections(id){
        
     
        await fetch('https://diglib.eg.org/rest/communities/'+id+'/collections', 
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
            console.log(data);
            var newcollections = [];
           


            for (var key in data) {
                // console.log(data[key].uuid);
                var combined = { name: data[key].name, 
                                 id: data[key].uuid,
                                 link: 'https://diglib.eg.org'+data[key].link};
                newcollections.push(combined);
            }
            this.setState({ collections: newcollections }) 

        })
        .catch((error) => {
            this.setState({ requestFailed: true })      
        })
    }
    
    async getAuthors(id){
        await fetch('https://diglib.eg.org/rest/communities/'+id+'/collections', 
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
            console.log(data);

            var newcollections = [];
           


            for (var key in data) {
                console.log(data[key].uuid);
                var combined = { name: data[key].name, 
                                 id: data[key].uuid,
                                 link: 'https://diglib.eg.org'+data[key].link}                                 
                                 ;

                newcollections.push(combined);



            }
            this.setState({ collections: newcollections }) 

        })
        .catch((error) => {
            this.setState({ requestFailed: true })      
        })
    }
    async getLastIssue(id){
        await fetch('https://diglib.eg.org/rest/collections/'+id, 
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
            this.setState({name: data['name']});
            var textcollections = data['introductoryText'].replace(/src="\/static\/icons\/metadata.gif"/gi, "src=\""+myMetadataImage+"\"");
            textcollections = textcollections.replace(/src="\/static\/icons\/pdf.gif"/gi, "src=\""+myPDFImage+"\"");
            this.setState({latestcollection: textcollections});

        })
        .catch((error) => {
            this.setState({ requestFailed: true })      
        })
        }
        async getTopics(id){
            // https://diglib.eg.org/solr/search
            await fetch('https://diglib.eg.org/rest/collections/'+id, 
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
            <Container >
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
                    <Col lg={9} className={"container-socialmedia"}> 
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
            <Container >
                <Row className="justify-content-md-center">
                    <Col lg={9} className='container-title'>                
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
            <Container >
                <Row className="justify-content-md-center">
                    <Col lg={9} className='container-title'>                
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
            <Container >
                <Row className="justify-content-md-center">
                    <Col lg={9} className='container-title'>                
                    <div ><strong>All Proceedings</strong> </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={9} className='container-text'>   

                    <div className="div-titles">
                        <ul>
                            {this.state.collections.map((item,i) => (
                            <li key={item['id']}><a href={item['link']}>{item['name']}</a></li>
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
