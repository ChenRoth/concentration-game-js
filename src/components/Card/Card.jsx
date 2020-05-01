import React, { Component } from 'react'
import './Card.css';

export class Card extends Component {
    render() {
        const { index, image, onFlip, isFlipped } = this.props;
        const imageUrl = isFlipped ? image : '/card-back.png';
        return (
            <div className="card" style={{backgroundImage: `url(${imageUrl})`}}/>
        )
    }
}