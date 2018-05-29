import React from 'react';
import OuterHeaderComponent from './outer-header/outer-header-component';
import OuterBodyComponent from './outer-body/outer-body-component';
import OuterFooterComponent from './outer-footer/outer-footer-component';


const OuterLayoutComponent = () => {
  return (
    <div>
      <p>This is Outer Layout Component</p>
      <OuterHeaderComponent />
      <OuterBodyComponent />
      <OuterFooterComponent />
    </div>
  );
}

export default OuterLayoutComponent;
