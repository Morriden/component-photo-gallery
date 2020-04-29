import React, { Component } from 'react'

export default class Horns extends Component {
    render() {
        return <li>
            <div className="info">
                <h3>{this.props.horn.title}</h3>
                <p className="description">{this.props.horn.description}</p>
                <p className="numofhorns">Number of Horns: {this.props.horn.horns}</p>
            </div>

            <div>
                <img
                    alt={this.props.horn.url}
                    src={this.props.horn.url} />
            </div>
            
        </li>
    }
}