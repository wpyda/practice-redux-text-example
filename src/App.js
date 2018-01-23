import React, {Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {connect} from 'react-redux'
import {changeText} from "./state/text";

class App extends Component {
    state = {
        currentText: ''
    }

    changeText = (event, value) => {
        this.setState({currentText: value})
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>{this.props.displayedText}</h1>
                    <TextField
                        hintText="Enter text"
                        fullWidth={true}
                        value={this.state.currentText}
                        onChange={this.changeText}
                    />

                    <RaisedButton
                        label="Change Text"
                        secondary={true}
                        fullWidth={true}
                        onClick={() => this.props.handleButtonClick(this.state.currentText)}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    displayedText: state.text.text
})

const mapDispatchToProps = dispatch => ({
    handleButtonClick: (newText) => dispatch(changeText(newText))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)