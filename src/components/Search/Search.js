import React, { useEffect, useState } from 'react' 
import List from '../List/List'
import useApi from '../../hooks/useApi'
import { Link } from 'react-router-dom'

import './search.scss'

function PromotionSearch() { 

    const [search, setSearch] = useState('')

    const [ load, loadInfo ] = useApi({
        url: "/promotions",
        method: 'get',
        params: {
            _embed: "comments",
            _order: "desc",
            _sort: "id",
            title_like: search || undefined
        },
       
    })

    console.log(loadInfo.data)

    useEffect(() => {
        load()
	}, [search])

    return(

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
                    onChange={(e) => setSearch(e.target.value) }
                />
            </div>

            <div>
                <List promotions={loadInfo.data} loading={loadInfo.loading} error={loadInfo.error} />
            </div>
            
        </div>
        
    )
}

export default PromotionSearch