import React, {Component} from 'react'
import api from '../../services/api'
import "./styles.css"

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
                <p>Casos confirmados: {datauf.cases}</p>
                <p class="deaths">Mortes: {datauf.deaths}</p>
                <p>Atualizado em {datauf.datetime}</p>
            </div>
        ) 
    }
}