import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'


import './form.scss'

function Form () {

    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = values => axios.post("http://localhost:5000/promotions", values)
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

                    <button type="submit">Enviar</button>

                </form>
            </main>
            

        </div>
    )
}

export default Form