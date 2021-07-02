import React, { useState, useEffect } from 'react' 
import List from '../List/List'

import axios from 'axios' 
import { Link } from 'react-router-dom'

import './search.scss'

function PromotionSearch() { 

    const [ promotions, setPromotions ] = useState([])
    const [ search, setSearch ] = useState('')

	useEffect(() => {

        const params = {}

        if(search) {
            params.title_like = search
        }

		axios.get("http://localhost:5000/promotions?_embed=comments", { params } )
		.then((response) => {
			setPromotions(response.data)
		})

	}, [search])

    return(

        <div className="component-search" >

            <header>
                <div>
                    <h1>PromoShow</h1>
                    <Link to="/create" >
                        <button>Nova publicação</button>
                    </Link>

                </div>

            </header>

            <div className="search" >
                <input 
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value) }
                />
            </div>

            <div>
                <List promotions={promotions} />
            </div>
            
        </div>
        
    )
}

export default PromotionSearch