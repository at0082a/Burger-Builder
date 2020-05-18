import React from 'react';
import Aux from '../hoc/Aux';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './Toolbar/SideDrawer';
import classes from './Layout.module.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSideDrawer: true };
    this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this);
  }
  
  sideDrawerClosedHandler () {
    this.setState({showSideDrawer: false});
  }

  render () {
    return (
      <Aux>
        <Toolbar/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          { this.props.children }
        </main>
      </Aux>
    )
  }
}

export default Layout