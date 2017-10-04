import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

export default class DrowerMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
         <AppBar
             title="EJNS"
             iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
         />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Meu PPV</MenuItem>
          <MenuItem onClick={this.handleClose}>Minhas Orações</MenuItem>
          <MenuItem onClick={this.handleClose}>Membros</MenuItem>
          <MenuItem onClick={this.handleClose}>Minha Conta</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Drawer>
      </div>
    );
  }
}
