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
        flippedCards: {},
        currentFlippedCards: [],
    }

    render() {
        const { stack, currentFlippedCards, flippedCards } = this.state;
        return (
            <div className="game">
                {stack.map((image, i) => {
                    const isFlipped = flippedCards[i] || currentFlippedCards.includes(i);
                    return (
                        <Card
                            key={i}
                            index={i}
                            onFlip={this.onFlip}
                            image={image}
                            isFlipped={isFlipped}
                        />
                    );
                })
                }
            </div>
        )
    }

    onFlip = (index) => {
        const { currentFlippedCards } = this.state;
        if (currentFlippedCards.length === 2) {
            return;
        }
        const modifiedCurrentFlippedCards = [...currentFlippedCards, index];
        this.setState({
            currentFlippedCards: modifiedCurrentFlippedCards,
        });
    }
}