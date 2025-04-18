const params = new URLSearchParams(window.location.search);
const id = params.get('id');

document.addEventListener('DOMContentLoaded', async () => {
    getPessoa();
    toggleLoading();
});

async function getPessoa() {
    let pessoa;
    await fetch(`https://api.themoviedb.org/3/person/${id}?language=pt-BR`, options)
        .then(res => res.json())
        .then(res => pessoa = res)
        .catch(err => console.error(err));

    document.querySelector('.poster').src = pessoa.profile_path ? `https://image.tmdb.org/t/p/original/${pessoa.profile_path}` : 'img/no-photo-cast.png';

    let detalhes = document.getElementById('detalhes');
    detalhes.innerHTML = `
        <h1 class="fs-1 text-danger">${pessoa.name}</h1>
        <h4 class="mb-4">Nascimento: ${pessoa.place_of_birth}</h4>
        <h4 class="mb-4">Data de Nascimento: ${formatarData(pessoa.birthday)}</h4>
        <p class="mb-3">${pessoa.biography ? pessoa.biography : "Biografia não disponível"}</p>`;
 
}

function formatarData(dataStringAPI){
    if (!dataStringAPI)
        return 'Data Desconhecida'

    const data = new Date(dataStringAPI)
    return data.toLocaleDateString('pt-BR')
}