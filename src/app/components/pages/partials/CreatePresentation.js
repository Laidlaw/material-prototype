import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const CreatePresentation = React.createClass({

  propTypes: {
    open: React.PropTypes.bool.isRequired,
  },

  getInitialState() {
    return {
      open: false,
    };
  },

  handleOpen() {
    this.setState({open: true});
  },

  handleClose() {
    this.setState({open: false});
  },
  styles: {

    actionButton: {
      marginRight: 20,
      right: 0,
      top: 35,
      position: 'absolute',
      zIndex: 200,
    },

  },

  render()  {
    const {
      open,
    } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return  (
      <div style={this.styles.actionButton}>
      <FloatingActionButton
        onTouchTap={this.handleOpen}
      >
        <ContentAdd />
      </FloatingActionButton>
      <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
  }
});

export default CreatePresentation;
