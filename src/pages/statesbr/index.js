import React, {Component} from 'react'
import api from '../../services/api'
import "./styles.css"

import {XYPlot, LineSeries} from 'react-vis';

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

        const data = [
            {x: 0, y: 8},
            {x: 1, y: 8},
            {x: 2, y: 8},
            {x: 3, y: 8},
            {x: 4, y: 8},
            {x: 5, y: 8},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
          ]

        return(
            <div className="states-info">
                <h1>{datauf.state}</h1>
                <p>Casos confirmados: {datauf.cases}</p>
                <p class="deaths">Mortes: {datauf.deaths}</p>
                <p>Atualizado em {datauf.datetime}</p>

                <XYPlot height={300} width={300}>
                <LineSeries data={data} />
                </XYPlot>
            </div>

            
        ) 
    }
}