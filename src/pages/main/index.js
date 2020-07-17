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
        const response = await api.get('/api/report/v1')
        //console.log(response.data.data)

        this.setState({datauf: response.data.data})
    }
    
    
    render() {
        return (
            <div className = "itens-list">
                {this.state.datauf.map(item => (
                
                <article key={item.uid}>
                    <strong>{item.state}</strong>
                    <p>{item.uf}</p>
                    <p>Casos confirmados: {item.cases}</p>
                    <p class="deaths">Mortes: {item.deaths}</p>
                    
                    <Link to={`/states/${item.uf}`}>Mais dados</Link>


                </article>
                
                ))}
            </div>
        )
    }
}