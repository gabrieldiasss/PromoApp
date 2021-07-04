import React from 'react'
import PromotionCard from '../Card/Card'

import './list.scss'

function List({ promotions, loading, error }) {

    if(error) {
        return <h3>Não é possível listar os produtos</h3>
    }

    if(loading || !promotions ) {
        return <h3>Carregando...</h3>
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