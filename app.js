let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre) {
        amigos.push(nombre);
        mostrarAmigos();
        inputAmigo.value = '';
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length < 2) {
        resultado.textContent = '¡Necesitas al menos dos amigos para sortear!';
        return;
    }

    const amigosSorteados = [...amigos];
    const resultados = {};

    amigos.forEach((amigo) => {
        let indice;
        let amigoSorteado;
        do {
            indice = Math.floor(Math.random() * amigosSorteados.length);
            amigoSorteado = amigosSorteados[indice];
        } while (amigo === amigoSorteado);

        resultados[amigo] = amigoSorteado;
        amigosSorteados.splice(indice, 1);
    });

    for (const [amigo, amigoSorteado] of Object.entries(resultados)) {
        const li = document.createElement('li');
        li.textContent = `${amigo} -> ${amigoSorteado}`;
        resultado.appendChild(li);
    }
}
