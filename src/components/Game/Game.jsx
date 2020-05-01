import React, { Component } from 'react'
import { Card } from '../Card/Card'

export class Game extends Component {
    state = {
        isCardFlipped: false
    }

    render() {
        const { isCardFlipped } = this.state;
        return (
            <div>
                <Card
                    onFlip={this.onFlip}
                    image="https://picsum.photos/id/1003/1181/1772" isFlipped={isCardFlipped} index={0}
                />
            </div>
        )
    }

    onFlip = (index) => {
        this.setState({isCardFlipped: true})
    }
}