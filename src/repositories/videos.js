import config from '../config'

const URL_VIDEOS = `${config}/videos`

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo)
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
    });
  }

export default {create}
