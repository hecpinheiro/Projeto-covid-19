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
        console.log(response.data.data)

        this.setState({datauf: response.data.data})
    }
    
    
    render() {
        return (
            <div className = "itens-list">
                {this.state.datauf.map(item => (
                
                <article key={item.uid}>
                    <strong>{item.uf}</strong>
                    <p>{item.state}</p>
                    
                    <Link to="">Mostrar</Link>


                </article>
                
                ))}
            </div>
        )
    }
}