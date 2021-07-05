import React, { useEffect, useRef, useState } from 'react' 
import List from '../List/List'
import { Link } from 'react-router-dom'

import axios from 'axios'

import './search.scss'

function PromotionSearch() { 

    const [search, setSearch] = useState('')
    const [ promotions, setPromotions ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [error, setError] = useState(false)
    const timeoutRef = useRef(null)

        useEffect(() => {

            window.clearTimeout(timeoutRef.current)

            timeoutRef.current = setTimeout(() => {

                let params = {}

                if(search) {
                    params.title_like = search
                }
    
                    axios.get("http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id", { params })
                    .then((response) => {
                        setPromotions(response.data)
                        setLoading(false)
                    })
    
                    .catch((err) => {
                        setError("Erro ao listar produtos")
                        setLoading(false)
    
                    })

            }, 300) 

	    }, [search])

    return (

        <div className="component-search" >

            <header>
                <div className="content" >
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
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div>
                <List promotions={promotions} loading={loading} error={error} />
            </div>
            
        </div>
        
    )
}

export default PromotionSearch