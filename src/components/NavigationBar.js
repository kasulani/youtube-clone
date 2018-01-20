import React, { Component } from 'react';
import {Search} from 'semantic-ui-react';

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            term: ''
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }
    
    onSearchChange(event, {value}){
        // handler for input text change
        this.setState({term: value});
    }
    
    render(){
        const { isLoading, term } = this.state;
        return(
            <nav className="yt-nav-bar">
                <Search
                    loading={isLoading}
                    onSearchChange={this.onSearchChange}
                    value={term}
                />;
            </nav>
        );
    }
}