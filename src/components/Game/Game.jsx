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
        const { currentFlippedCards, stack } = this.state;
        if (currentFlippedCards.length === 0) {
            this.flipFirstCard(index);
        } else if (currentFlippedCards.length === 1) {
            // get the first (previously) flipped card
            const firstCardIndex = currentFlippedCards[0];
            const firstCard = stack[firstCardIndex];

            // get the currently flipped card
            const secondCard = stack[index];

            const doCardsMatch = firstCard === secondCard;
            if (doCardsMatch) {
                this.addMatchingPair(firstCardIndex, index);
            } else {
                this.handleMismatchedPair(index);
            }
        }
    }

    flipFirstCard = (index) => {
        const { currentFlippedCards } = this.state;
        const modifiedCurrentFlippedCards = [...currentFlippedCards, index];
        this.setState({
            currentFlippedCards: modifiedCurrentFlippedCards,
        });
    }

    addMatchingPair = (firstIndex, secondIndex) => {
        const { flippedCards } = this.state;
        const modifiedFlippedCards = {
            ...flippedCards,
            [firstIndex]: true,
            [secondIndex]: true,
        };
        this.setState({
            flippedCards: modifiedFlippedCards,
            currentFlippedCards: [],
        });
    }

    handleMismatchedPair = (index) => {
        const { currentFlippedCards } = this.state;
        const modifiedCurrentFlippedCards = [...currentFlippedCards, index];
        this.setState({
            currentFlippedCards: modifiedCurrentFlippedCards,
        })
        this.flipBackCurrentCards();
    }

    flipBackCurrentCards = () => {
        setTimeout(() => {
            this.setState({
                currentFlippedCards: [],
            });
        }, 2000);
    }
}