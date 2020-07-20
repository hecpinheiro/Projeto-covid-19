import React, {Component} from 'react'
import api from '../../services/api'
import "./styles.css"

import {XYPlot, LineSeries} from 'react-vis';

export default class Statesbr extends Component {
    state = {
        datauf:[]
    };

    async componentDidMount() {
        const {id} = this.props.match.params

        const response = await api.get(`?is_last=True&state=${id}`)
        console.log(response)
        this.setState({datauf: response.data.results})
    
    }
    
    render() {
        
        return(
            <div className="states-info">
                {this.state.datauf.map(item =>(

                   <article key={item.city_ibge_code}> 
                        <h1>{item.city}</h1>
                        <p>Casos confirmados: {item.confirmed}</p>
                        <p class="deaths">Mortes: {item.deaths}</p>
                        <p>Atualizado em {item.date}</p>
                    </article>
                )
                )
                }

            </div>
  
        ) 
    }
}