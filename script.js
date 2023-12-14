// Exemplo de dados (pode ser obtido de um servidor ou banco de dados)
const videos = [
   // { title: 'AULA - 1 Iniciando o Uso do SEI', thumbnail: 'video1.jpg' },
   // { title: 'Vídeo 2', thumbnail: 'video2.jpg' },
    //{ title: 'Vídeo 3', thumbnail: 'video1.jpg' },
   // { title: 'Vídeo 4', thumbnail: 'video2.jpg' },
    // Adicione mais vídeos conforme necessário
];

// Função para exibir os vídeos na página
function displayVideos(videoArray) {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = '';

    videoArray.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video-thumbnail');

        const thumbnail = document.createElement('img');
        thumbnail.src = video.thumbnail;
        thumbnail.alt = video.title;

        videoDiv.appendChild(thumbnail);
        videoList.appendChild(videoDiv);
    });
}

// Função para filtrar vídeos por título
function searchVideos() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchTerm));
    displayVideos(filteredVideos);
}

// Exibir todos os vídeos ao carregar a página
window.onload = function () {
    displayVideos(videos);
};
