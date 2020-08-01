import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais)

  const [categorias, setCategorias] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setCategorias([
      ...categorias,
      values,
    ]);

    clearForm(); // zera o input após cadastrar
  }

  useEffect(() => { 
    // estou pegando informações do back end

    const url = window.location.hostname.includes('localhost')
    ? 'http://localhost:5000/categorias'
    : 'https://learningflix-react.vercel.app/categorias'

    fetch(url)
      .then(async (respostaServidor) => {
        const resposta = await respostaServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []); // array vazio só carrega uma vez, no carregamento da tela

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.lenght === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria.titulo}${index}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
