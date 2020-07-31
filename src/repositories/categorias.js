import config from '../config'

const URL_CATEGORIES = `${config}/categorias`

function getAllWithVideos() {
return fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (respostaDoServidor) => {
    if (respostaDoServidor) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
  });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
    });
  }

export default {
  getAllWithVideos,
  getAll
}
