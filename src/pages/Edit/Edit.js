import React from 'react'
import { useParams } from 'react-router-dom'

import EditPromotion from '../../components/Edit/Edit'

function PageEdit () {

    const { id } = useParams()

    return(
        <div className="page-form" >
            <EditPromotion id={id} />
        </div>
    )
}

export default PageEdit