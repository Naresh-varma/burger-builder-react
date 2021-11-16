import React from 'react';
import Aux from '../../Auxilary/Auxilary';

import classes from './Layout.module.css';

console.log(classes);

const layout = (props) => {
  console.log(classes);
  return  (
  <Aux>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>);
}

export default layout