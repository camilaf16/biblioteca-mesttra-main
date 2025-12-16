const tabelaResultado = document.getElementById('tabelaResultado');

async function cadastrarLivros(event) {
    // removo o comportamento do submit de atualizar a tela;
    event.preventDefault();

    // Busco o que foi digitado no input nome atraves do seu ID e do atributo value;
    const titulo = document.getElementById('titulo').value;
    const isbn = document.getElementById('isbn').value;
    const anoPublicacao = document.getElementById('anoPublicacao').value;
    const numeroPaginas = document.getElementById('numeroPaginas').value;
    const autor = document.getElementById('autor').value;
    const editora = document.getElementById('editora').value;
    

    //LOGICA QUE ENVIA O QUE FOI DIGITADO PARA O BANCO DE DADOS VIA API
    const apiUrl = 'http://localhost:3000/livros';

    // Monto o objeto livro que vai ser enviado via api atraves do metodo [POST]

    const livro = {
        titulo,
        isbn,
        anoPublicacao,
        numeroPaginas,
        autor,
        editora,
        
    }

    //[GET], [POST], [PUT], [DELETE]

    // Estrutura a requisicao que vai ser enviada pelo fetch 
    const request = new Request(apiUrl, {
        method: 'POST',
        body: JSON.stringify(livro),
        headers: new Headers(
            { 'Content-Type': 'application/json' }
        )
    })

    const response = await fetch(request);
    
    if(response.ok) {
        alert('Cadastrado com sucesso');
        window.location.href = './livros.html';
    }
}

async function listarlivros() {
    // promisse 1 (requisicao foi ok ou nao)
    const response = await fetch('http://localhost:3000/livros'); //GET - BUSCAR 
    // promisse 2 (o resultado da requisicao)
    const livros = await response.json(); 

    tabelaResultado.innerHTML = '';

    livros.forEach(function (livro) {
        tabelaResultado.insertAdjacentHTML('beforeend',
            `
            <tr>
                <td>${livro.id}</td>
                <td>${livro.titulo}</td>
                <td>${livro.isbn}</td>
                <td>${livro.anoPublicacao}</td>
                <td>${livro.numeroPaginas}</td>
                <td>${livro.autor}</td>
                <td>${livro.editora}</td>
                <td>
                    <button class="btn btn-sm btn-info text-white me-1">
                        <i class="bi bi-eye-fill"></i>
                    </button>
                    <a href="./edicao.html?id=${livro.id}" class="btn btn-sm btn-warning text-white me-1">
                        <i class="bi bi-pencil-fill"></i>
                    </a>
                    <button class="btn btn-sm btn-danger" onclick="excluirLivro('${livro.id}')">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
            `
        )
    })
}

async function excluirLivro(id) {
    const apiUrl = `http://localhost:3000/livros/${id}`;
    
    // Estrutura da requisicao do DELETE
    const request = new Request (apiUrl, {
        method: 'DELETE'
    })

    if(confirm(`Deseja excluir o livro ${id} ?`)){
        const response = await fetch(request);
        const livro = await response.json();
        
        tabelaResultado.innerHTML = '';
        listarlivros();
    }
    
}

listarlivros();
