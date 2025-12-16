function cadastrarCategoria(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;

    // Busca categorias já salvas
    let categorias = JSON.parse(localStorage.getItem("categorias")) || [];

    // Cria ID automático simples
    const novaCategoria = {
        id: categorias.length + 1,
        nome: nome,
        descricao: descricao
    };

    categorias.push(novaCategoria);

    // Salva no localStorage
    localStorage.setItem("categorias", JSON.stringify(categorias));

    alert("Categoria cadastrada com sucesso!");

    // Limpa formulário
    event.target.reset();
}

document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.getElementById("tabela-categorias");
    const categorias = JSON.parse(localStorage.getItem("categorias")) || [];

    tabela.innerHTML = "";

    categorias.forEach(cat => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${cat.id}</td>
            <td>${cat.nome}</td>
            <td>${cat.descricao}</td>
        `;

        tabela.appendChild(linha);
    });
});
