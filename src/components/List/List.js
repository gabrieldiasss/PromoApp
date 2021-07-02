import React from 'react'
import PromotionCard from '../Card/Card'

function List({ promotions }) {
    return (
        <div>
            {promotions.map((promotion) => {
                    return (
                        <PromotionCard promotion={promotion}  />
                    )
                })}
        </div>
    )
}

export default List