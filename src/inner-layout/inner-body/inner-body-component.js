import React from 'react';
import HomeComponent from './home/home-component';
import AboutUsComponent from './about-us/about-us-component';
import ServiceComponent from './service/service-component';
import PortfolioComponent from './portfolio/portfolio-component';
import ContactUsComponent from './contact-us/contact-us-component';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
  } from 'react-router-dom';

const InnerBodyComponent = ({ match }) => {
    return (
      <div className="InnerBodyComponent">
        <h2>This is Inner Body Component</h2>
          <Route path={`/dashboard/html`} render={() => { return <h1>HTML by Ducket book</h1> }}/>
          <Route path={`/dashboard/home`} component={HomeComponent}/>
          <Route path={`/dashboard/about`} component={AboutUsComponent}/>
          // TODO: Update the above routes to match
      </div>
    );
  }

export default InnerBodyComponent;
