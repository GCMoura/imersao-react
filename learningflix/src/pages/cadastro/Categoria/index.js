import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'
import { Button } from '../../../components/FormField/style'

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000',
    }

    const [categorias, setCategorias] = useState([])
    
    const [values, setValues] = useState(valoresIniciais)

    function setValue(key, value){
        setValues({
            ...values,
            [key]: value,
        })
    }

    function handleChange(event){
        //const { getAttribute, value } = event.target
        setValue(
            event.target.getAttribute('name'), 
            event.target.value
        )
    }

    function handleSubmit(event){
        event.preventDefault()

        setCategorias([
            ...categorias,
            values
        ])

        setValues(valoresIniciais) //zera o input após cadastrar
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={handleSubmit}>

                <FormField 
                    placeholder='Categoria'
                    type="text"
                    name='nome'
                    value={values.nome}
                    onChange={handleChange}
                />

                {/* <div> 
                    <label >
                    Categoria:
                        <input 
                        type="text"
                        name='nome' 
                        value={values.nome}
                        onChange={handleChange}
                        />
                    </label>
                </div> */}

                <FormField 
                    placeholder='Descrição'
                    type="text"
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}
                />

                {/* <div> 
                    <label >
                    Descrição:
                        <textarea 
                        type="text"
                        name='descricao' 
                        value={values.descricao}
                        onChange={handleChange}
                        />
                    </label>
                </div> */}

                <FormField 
                    placeholder='Cor:'
                    type="color"
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}
                />
                {/* <div> 
                    <label >
                    Cor:
                        <input 
                        type="color" 
                        name='cor'
                        value={values.cor}
                        onChange={handleChange}
                        />
                    </label>
                </div>   */}
                <Button>
                    Cadastrar
                </Button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria