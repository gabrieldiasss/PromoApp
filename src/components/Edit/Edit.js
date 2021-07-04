import axios from 'axios'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import useApi from '../../hooks/useApi'

function Edit ({ id }) {

    const { register, handleSubmit, reset } = useForm()

    const [ load ] = useApi({
        url: `/promotions/${id}`,
        method: 'get',
        onCompleted: (response) => {
            reset(response.data)
        }
    })

    let history = useHistory()

    useEffect(() => {
        load()
    }, [])

    const onSubmit = values => axios.put(`http://localhost:5000/promotions/${id}`, values)
    .then(() => {
        history.push("/")
    })

    return(
        <div className="form" >

            <main>
                <h1>PromoShow</h1>
                <h2>Nova promoção</h2>

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="fields" >
                        <label>Título</label>
                        <input name="title" type="text" {...register("title")} />
                    </div>

                    <div className="fields" >
                        <label>Link</label>
                        <input name="link" type="text" {...register("link")} />
                    </div>

                    <div className="fields" >
                        <label>Imagem (URL)</label>
                        <input name="url" type="text" {...register("url")} />
                    </div>

                    <div className="fields" >
                        <label>Preço</label>
                        <input name="price" type="number" {...register("price")} />
                    </div>

                    <button type="submit">Editar</button>

                </form>
            </main>
            

        </div>
    )
}

export default Edit