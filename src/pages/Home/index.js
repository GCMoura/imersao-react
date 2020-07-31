import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault'
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categorias'

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);
 
  useEffect(() => {  
    categoriesRepository.getAllWithVideos()
      .then((categoriasComVideos) => { 
        setDadosIniciais(categoriasComVideos);
      })
    }, []);
    
    
    return (
      <PageDefault>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

{/*
      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />       */}
    </PageDefault>
  );
}

export default Home;
