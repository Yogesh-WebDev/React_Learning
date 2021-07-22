import React, { Component } from 'react';
import UserContext from './userContext';

class MovieList extends Component {
    static contextType = UserContext;
    state = {}
    componentDidMount() {
        console.log("context",this.context);
    }
    
    render() { 
        return (
            <UserContext.Consumer>
            {userContext => <div>Movie List  {userContext.name}</div>}
            
            </UserContext.Consumer>
        );
    }
}
export default MovieList;

