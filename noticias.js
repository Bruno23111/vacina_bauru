import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Função para carregar notícias
export function carregarNoticias() {
    const noticiasContainer = document.getElementById('noticias-container');
    const noticiasRef = collection(db, 'noticias');
    
    getDocs(noticiasRef).then((querySnapshot) => {
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                const noticia = doc.data();
                const noticiaHtml = `
                    <div class="col-md-4">
                        <div class="card news-card">
                            <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${noticia.titulo}</h5>
                                <p class="card-text">${noticia.descricao}</p>
                                <a href="${noticia.link}" class="btn btn-primary">Leia Mais</a>
                            </div>
                        </div>
                    </div>`;
                noticiasContainer.insertAdjacentHTML('beforeend', noticiaHtml);
            });
        } else {
            noticiasContainer.innerHTML = "<p>Nenhuma notícia disponível.</p>";
        }
    }).catch((error) => {
        console.error("Erro ao carregar notícias: ", error);
        noticiasContainer.innerHTML = "<p>Erro ao carregar notícias.</p>";
    });
}

document.addEventListener('DOMContentLoaded', carregarNoticias);