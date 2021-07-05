import React from 'react'
import PromotionCard from '../Card/Card'

import './list.scss'

function List({ promotions, loading, error }) {

    if(loading ) {
        return <h3>Carregando...</h3>
    }

    if(error) {
        return <h3>{error}</h3>
    }

    if(promotions.length === 0) {
        return <h3>Nenhum resultado encontrado</h3>
    }

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