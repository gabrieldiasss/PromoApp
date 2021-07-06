/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

import './card.scss'

function PromotionCard({ promotion, onClickComments }) {

    return(
        <div className="page-card" >

            <main>
                
                    <div className="card" >

                        <div className="card-body" >
                            
                            <img src={promotion.url} />

                            <div className="card-infos" >
                                <h1>{promotion.title}</h1>

                                <span>R$ {promotion.price}</span>

                                <div className="card-footer" >

                                    { promotion.comments.length > 0 && <span>{promotion.comments[0].comment}</span> }

                                    <div>
                                        <button onClick={onClickComments} >
                                            { promotion.comments.length == 0 ? <span>Não há comentários</span> : promotion.comments.length }
                                            { promotion.comments.length == 0 ? '' : promotion.comments.length > 1 ? ' Comentários' : ' Comentário' }
                                        </button>
                                        
                                        <a href={promotion.link} target="_blank" >Ir para o site</a>

                                        <div>
                                            <Link to={{ pathname: `/edit/${promotion.id}` }} >
                                                <button>Editar</button>
                                            </Link>
                                            
                                        </div>
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