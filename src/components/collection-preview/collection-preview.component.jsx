import React from 'react';
import { Card } from '../card/card.component';
import './collection-preview.style.css';


const CardList = ({ items }) => (
    <div className='collection-preview'>

        <div className="preview">
            {items.filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                    <Card key={id} {...otherItemProps} />

                ))}
        </div>
    </div>
);
export default CardList;