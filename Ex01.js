const filmes = [
    {
        titulo: 'Perdido Em Marte',
        genero: ['Ficção científica','Aventura'],
        atores: ['Matt Damon','Jessica Chastain','Chiwetel Ejiofor'],
        lançamento: 2015,
        poster: 'https://cdn.universoracionalista.org/wp-content/uploads/2015/11/the-martian.jpg',
    },
    {
        titulo: 'Interestelar',
        genero: ['Ficção científica','Aventura'],
        atores: ['Matthew McConaughey','Jessica Chastain','Anne Hathaway'],
        lançamento: 2014,
        poster: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2022/03/interestelar-07-1920x1080.jpg',
    },
    {
        titulo: 'Piratas do Caribe: A Maldição do Pérola Negra',
        genero: ['Ação','Aventura'],
        atores: ['Johnny Depp','Keira Knightley','Orlando Bloom'],
        lançamento: 2003,
        poster: 'https://2.bp.blogspot.com/-yWDppSgHw2A/XUSo4mcJ8sI/AAAAAAAATsE/BAZmwujzMhsNuooQMWqNzKwkuadHIwSgwCK4BGAYYCw/s1600/Imagem1a.jpg',
    }
];

const htmlList = document.querySelector('#filmes');

for (let filme of filmes) {
    const p = document.createElement('p');
    p.textContent = filme.titulo;
    htmlList.appendChild(p);
    const img = document.createElement('img');
    img.src = filme.poster;
    htmlList.appendChild(img);
}

const id = document.querySelector('#root');

