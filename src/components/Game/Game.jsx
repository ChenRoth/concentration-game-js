import React, { Component } from 'react'
import { Card } from '../Card/Card'

export class Game extends Component {    
    render() {
        return (
            <div>
                <Card image="https://picsum.photos/id/1003/1181/1772" isFlipped index={0} />
            </div>
        )
    }
}