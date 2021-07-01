import React from 'react'

import { useParams } from 'react-router-dom'

function Form () {

    const { id } = useParams()

    return(
        <h1>Form {id}</h1>
    )
}

export default Form