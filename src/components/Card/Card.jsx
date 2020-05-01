import React, { PureComponent } from 'react'
import './Card.css';

const CARD_BACK_IMAGE = '/card-back.png';

export class Card extends PureComponent {
    render() {
        const { image, isFlipped } = this.props;
        const imageUrl = isFlipped ? image : CARD_BACK_IMAGE;
        return (
            <div onClick={this.handleFlip} className="card" style={{backgroundImage: `url(${imageUrl})`}}/>
        )
    }


    /*
    pure component shallow-compares (===) each prop with its future value

    shouldComponentUpdate(nextProps) {
         e.g. if (this.props.a === nextProps.a && this.props.b === nextProps.b) {
            return false;
        }
    }
    */

    handleFlip = () => {
        const {onFlip, isFlipped, index} = this.props;
        if (isFlipped) {
            return;
        }
        onFlip(index);
    }
}