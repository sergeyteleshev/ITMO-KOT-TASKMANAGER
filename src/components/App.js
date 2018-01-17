import React from 'react';
import '../styles.scss';
import VisibleTaskListApp from '../containers/VisibleTaskListApp'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


export  default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <VisibleTaskListApp/>
            </MuiThemeProvider>
        );
    }
}
