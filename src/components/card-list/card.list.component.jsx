import React from 'react'
import {Card} from '../card/card.component'

import './card-list.style.css'


export const CardList = (props) => {
    // console.log(props)
    return(
        // CardList will be responsible for all the cards, the CardList container for all the monsters
        <div className='card-list'>
            {     
                props.monsters.map(monster => (
                //Each child in the list must have a unique key, Each individual card
                <Card key={monster.id} monster={monster}/>
                ))
            }
        </div>
    )
}