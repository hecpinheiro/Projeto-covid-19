import React, {Component} from 'react'
import api from '../../services/api'

export default class Statesbr extends Component {
    state = {
        datauf:{}
    };

    async componentDidMount() {
        const {id} = this.props.match.params

        const response = await api.get(`/api/report/v1/brazil/uf/${id}`)
        
        this.setState({datauf: response.data})
    
    }
    
    render() {
        const {datauf} = this.state

        return(
            <div className="states-info">
                <h1>{datauf.state}</h1>
            </div>
        ) 
    }
}