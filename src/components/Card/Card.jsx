import React, { Component } from 'react'
import './Card.css';

const CARD_BACK_IMAGE = '/card-back.png';

export class Card extends Component {
    render() {
        const { image, isFlipped } = this.props;
        const imageUrl = isFlipped ? image : CARD_BACK_IMAGE;
        return (
            <div onClick={this.handleFlip} className="card" style={{backgroundImage: `url(${imageUrl})`}}/>
        )
    }

    handleFlip = () => {
        const {onFlip, isFlipped, index} = this.props;
        if (isFlipped) {
            return;
        }
        onFlip(index);
    }
}