import React from 'react'

import './card.scss'

function PromotionCard({ promotion }) {

    return(
        <div className="page-card" >

            <main>
                
                    <div className="card" >

                        <div className="card-body" >

                            <img src={promotion.imageUrl} />

                            <div className="card-infos" >
                                <h1>{promotion.title}</h1>

                                <span>R$ {promotion.price}</span>

                                <div className="card-footer" >

                                    { promotion.comments.length > 0 && <span>{promotion.comments[0].comment}</span> }

                                    <div>
                                        <p>{ promotion.comments.length === 0 ? <span>Não há comentários</span> : promotion.comments.length }
                                            { promotion.comments.length === 0 ? '' : promotion.comments.length > 1 ? ' Comentários' : ' Comentário' }
                                        </p>
                                        
                                        <a href={promotion.url} target="_blank" >Ir para o site</a>
                                    </div>
                                    

                                </div>

                            </div>

                        </div>
                        

                    </div>

            </main>

        </div>
    )

}

export default PromotionCard