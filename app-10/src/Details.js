import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function withRouter(Children) {
    return(props)=>{
        const match = {params: useParams()};
        return <Children {...props} match={match} />
    }
}

class Details extends Component {
    constructor() {
        super();
        
        this.state = {
            item: {}
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://practiceapi.devmountain.com/products/${id}`)
        .then(res => {
            this.setState({ item: res.data });
        });
    }
    
    render() {
        return(
            <div>
                <h2>{this.state.item.title}</h2>
                <img width="200" src={this.state.item.image} />
                <h4>{`Price: $${this.state.item.price}.00`}</h4>
            </div>
        );
    }
}

export default withRouter(Details);