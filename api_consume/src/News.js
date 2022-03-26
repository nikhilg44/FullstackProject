import React from 'react';
import axios from 'axios';
import {Row,Col,Card} from 'react-bootstrap';
import { useLocation,useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "162745251495-gfff00jphmabntkv39f14asl1k493fge.apps.googleusercontent.com";


class News extends React.Component {
  state = {
    news: [],
    countries:[
        { value: 'world', label: 'World' },
        { value: 'india', label: 'India' },
        { value: 'australia', label: 'Australia' }
    ]
    
  }
  logout = (response) => {
    this.props.navigation('/')

  };
  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything?q=keyword&apiKey=c3a5b3d63d894fe5aa07a57774836dad`)
      .then(res => {
        const news = res.data.articles;
        console.log(news)
        const sortedNews = news.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
        console.log(sortedNews)
        this.setState({news:sortedNews});
      })
      .catch((err) => {
          console.log(err, "api is not consumed")
      })
  }

  render() {
    return (
      <div>
      <Row>
      <Col xs={5}></Col>
      <Col>
      <header className='m-2 p-2' style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
        {
        this.props.username?
        <label style={{display: 'flex'}}>
            <img src={this.props.image} style={{borderRadius:'50%'}}height="120" width="120"  />
            <h3 className='p-5'>Hello {this.props.username}</h3>
        </label>
        :<label><h3 className='p-5'>Hello {this.props.email}</h3></label>

        }
        {/* <label className='p-5'><h3>Select a country:</h3></label>
        <Select className='p-5'
            // this.state.countries.map((country)=>{
            //     return <option value={country}>{country}</option>
            // })
            options={this.state.countries}/> */}
           <GoogleLogout className='m-5' 
                clientId={CLIENT_ID}
                buttonText={"Logout"}
            onLogoutSuccess={this.logout}     >

            </GoogleLogout>
      </header>
      </Col>
      <Col></Col>
      </Row>
      <Row>
        {
            this.state.news.map((news,index) => {
                if(index<=11)
                {
                if(index%3==0)
                {
                return <div key={index}>
                <Row className='m-2'>
                    <Col>
                        {
                            index < this.state.news.length?     
                            <Card  className='h-100 shadow-lg'>
                                 <Row>
                                    <img src={this.state.news[index].urlToImage} height="300"/>
                                </Row >
                                 <Row className='pt-1 px-3' style={{textAlign:"left"}}> 
                                    <small style={{color:"grey"}}>{this.state.news[index].source.name}</small>
                                </Row>
                                <Row  id="title1" className='pt-1 px-3' style={{textAlign:"left"}}>
                                    {this.state.news[index].title}
                                </Row>
                                <Row className='pt-1 px-3' style={{textAlign:"left",}}>
                                    {this.state.news[index].description}
                                </Row>
                            </Card>
                            :null 
                        }
                    </Col>
                    <Col>
                        {
                            index + 1 < this.state.news.length?     
                            <Card className='h-100 shadow-lg' >
                                <Row >
                                    <img src={this.state.news[index+1].urlToImage} height="300"/>
                                </Row>
                                 <Row className='pt-1 px-3' style={{textAlign:"left"}}> 
                                 <small style={{color:"grey"}}>{this.state.news[index+1].source.name}</small>
                                </Row>
                                <Row className='pt-1 px-3' style={{textAlign:"left"}}>
                                    {this.state.news[index+1].title}
                                </Row>
                                <Row className='pt-1 px-3' style={{textAlign:"left"}}>
                                    {this.state.news[index+1].description}
                                </Row>
                            </Card>
                            :null 
                        }
                    </Col>
                    <Col>
                        {
                            index + 2 < this.state.news.length?     
                            <Card className='h-100 shadow-lg'>
                                <Row >
                                    <img src={this.state.news[index+2].urlToImage} height="300"/>
                                </Row>
                                 <Row className='pt-1 px-3'style={{textAlign:"left"}}> 
                                 <small style={{color:"grey"}}>{this.state.news[index+2].source.name}</small>
                                </Row>
                                <Row className='pt-1 px-3' style={{textAlign:"left"}}>
                                    {this.state.news[index+2].title}
                                </Row>
                                <Row className='pt-1 px-3' style={{textAlign:"left"}}>
                                    {this.state.news[index+2].description}
                                </Row>
                            </Card>
                            :null 
                        }
                    </Col>
                </Row>
                </div>
                }
                else
                    return null
            }

            })
        }
      </Row>
      <footer><marquee>This is footer</marquee></footer>
      </div>
    )
  }
}

function Location(props) {
    console.log("props are:",props)
    let location = useLocation();
    const navigation = useNavigate();
    console.log(location)
    return (
       <>
        <News  email={location.state.email} username={location.state.username} image={location.state.image} logged={location.state.logged} navigation={navigation}/>
      </>
    );
  }
  
export default Location;