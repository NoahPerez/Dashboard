import React from 'react';
import "./card.styles.css";

export const Card = ({ id, imageUrl }) => (
    <div className='collection-item'>
        <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
    </div>
)
