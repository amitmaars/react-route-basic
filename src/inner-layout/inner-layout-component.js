import React from 'react';
import InnerHeaderComponent from './inner-header/inner-header-component';
import InnerBodyComponent from './inner-body/inner-body-component';
import InnerFooterComponent from './inner-footer/inner-footer-component';


const InnerLayoutComponent = () => {
    return (
      <div className="InnerLayoutComponent">
        <h1>This is Inner Layout Component</h1>
        <InnerHeaderComponent />
        <InnerBodyComponent />
        <InnerFooterComponent />
      </div>
    );
  }

export default InnerLayoutComponent;
