import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from 'react-router';

const CLIENT_ID =
  "162745251495-gfff00jphmabntkv39f14asl1k493fge.apps.googleusercontent.com";

class GoogleLoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userInfo: {
        name: "",
        emailId: "",
      },
    };
  }

  // Success Handler
  responseGoogleSuccess = (response) => {
    console.log("google component rendered");
    let userInfo = {
      name: response.profileObj.givenName,
      emailId: response.profileObj.email,
      image:response.profileObj.imageUrl
    };
    console.log(response.profileObj)
    this.setState({ userInfo, isLoggedIn: true });
    this.props.navigation('/news',{state:{username:userInfo.name,image:userInfo.image,logged:this.state.isLoggedIn}})
  };

  // Error Handler
  responseGoogleError = (response) => {
    console.log(response);
  };

  // Logout Session and Update State
  logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: "",
    };
    this.setState({ userInfo, isLoggedIn: false });
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-12">
          {this.state.isLoggedIn ? 
        //   (
        //     <div>
        //       <h1>Welcome, {this.state.userInfo.name}</h1>
        //       <GoogleLogout
        //         clientId={CLIENT_ID}
        //         buttonText={"Logout"}
        //         onLogoutSuccess={this.logout}
        //       ></GoogleLogout>
        //     </div>
        //   ) 
          null: (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Sign In with Google"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleError}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
      </div>
    );
  }
}


export default function(props) {
    console.log("props 2 are:",props)
    const navigation = useNavigate();
  
    return <GoogleLoginComponent navigation={navigation} />;
  }