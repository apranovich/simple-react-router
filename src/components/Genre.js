import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Genre extends Component {
  render() {
    return (
      <div className='row'>
        <h3 className='col-md-12'>{this.props.params.genre}</h3>
        <div className='col-md-12'>
          <ul className='nav nav-pills'>
            <li><Link to={`/list/genre/${this.props.params.genre}/release-1`} activeClassName='active'>Релиз 1</Link></li>
            <li><Link to={`/list/genre/${this.props.params.genre}/release-2`} activeClassName='active'>Релиз 2</Link></li>
            <li><Link to={`/list/genre/${this.props.params.genre}/release-3`} activeClassName='active'>Релиз 3</Link></li>
          </ul>
        </div>
        <div className='col-md-12'>{this.props.children}</div>
      </div>   
    );
  }
}