import { db } from "./firebase.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Função para abrir o calendário com base no nome do botão
async function abrirCalendario(nomeCalendario) {
    const calendariosRef = collection(db, 'calendarios');
    const q = query(calendariosRef, where('nome', '==', nomeCalendario));
    
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const calendario = doc.data();
            if (calendario.link) {
                window.open(calendario.link, '_blank');
            } else {
                console.log("O documento não possui um link.");
            }
        });
    } catch (error) {
        console.error("Erro ao obter documentos:", error);
    }
}


// Adicionar evento de clique a cada botão
document.getElementById('btn-adolescente').addEventListener('click', () => {
    abrirCalendario('adolescente');
});

document.getElementById('btn-adulto').addEventListener('click', () => {
    abrirCalendario('adulto');
});

document.getElementById('btn-gestante').addEventListener('click', () => {
    abrirCalendario('gestante');
});

document.getElementById('btn-crianca').addEventListener('click', () => {
    abrirCalendario('crianca');
});
