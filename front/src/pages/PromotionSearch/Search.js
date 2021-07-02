import React, { useState, useEffect } from 'react'
import PromotionCard from '../../components/Promotion/Card'
import axios from 'axios'

import './search.scss'

function Search() {

	const [ promotions, setPromotions ] = useState([])

	useEffect(() => {
		axios.get("http://localhost:5000/promotions?_embed=comments")
		.then((response) => {
			setPromotions(response.data)
		})

	}, [])
 
	return ( 
		<div className="page-search" >

			{promotions.map((promotion) => {
				return (
					
					<PromotionCard promotion={promotion}  />
					
				)
				
			})}
			
		</div>
		
	)
}

export default Search