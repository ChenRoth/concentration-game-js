import React, { Component } from 'react'
import './Game.css';
import { Card } from '../Card/Card'

export class Game extends Component {
    state = {
        stack: [
            'https://picsum.photos/id/1003/1181/1772',
            'https://picsum.photos/id/1002/1181/1772',
            'https://picsum.photos/id/1003/1181/1772',
            'https://picsum.photos/id/1002/1181/1772'
        ],
    
    }

    render() {
        const { stack } = this.state;
        return (
            <div className="game">
                {stack.map((image, i) => (
                    <Card
                        key={i}
                        index={i}
                        onFlip={this.onFlip}
                        image={image} isFlipped={true}
                    />
                ))
                }
            </div>
        )
    }

    onFlip = (index) => {
        console.log({index});
    }
}