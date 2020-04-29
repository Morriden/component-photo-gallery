import React, { Component } from 'react'

export default class Animal extends Component {
    render() {
        return <li key={this.props.animal.title}>
            <div className="info">
                <h3>{this.props.animal.title}</h3>
                <p className="description">{this.props.animal.description}</p>
                <p className="numofhorns">Number of Horns: {this.props.animal.horns}</p>
            </div>

            <div>
                <img
                    alt={this.props.animal.url}
                    src={this.props.animal.url} />
            </div>
            
        </li>
    }
}
