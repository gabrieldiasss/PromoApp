import React, { useState } from 'react'
import PromotionCard from '../Card/Card'
import Modal from '../Modal/Modal'
import './list.scss'

function List({ promotions, loading, error }) {

    const [promotionId, setPromotionId] = useState(null)

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
                        <PromotionCard promotion={promotion}
                         onClickComments={() => setPromotionId(promotion.id)} />
                    )
                })} 

                <Modal isOpen={Boolean(promotionId)} onClose={() => setPromotionId(null) } >
                    <h1>Comentários</h1>
                </Modal>
        </div>
    )
}

export default List