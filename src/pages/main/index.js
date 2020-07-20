import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

export default class Main extends Component {
    state = {
        datauf: []
    }
    
    componentDidMount() {
        this.loadData()
    }

    loadData = async () => {
        const response = await api.get('?is_last=True&place_type=state')
        console.log(response.data.results)

        this.setState({datauf: response.data.results})
    }
    
    
    render() {
        return (
            <div className = "itens-list">
                {this.state.datauf.map(item => (
                
                <article key={item.city_ibge_code}>
                    <strong>{item.state}</strong>
                    
                    <p>Casos confirmados: {item.confirmed}</p>
                    <p className="deaths">Mortes: {item.deaths}</p>
                    
                    <Link to={`/states/${item.state}`}>Mais dados</Link>


                </article>
                
                ))}
            </div>
        )
    }
}