# Apostila: JavaScript e Consumo de APIs - Sistema Biblioteca

## Índice
1. [Introdução](#introdução)
2. [O que é uma API REST?](#o-que-é-uma-api-rest)
3. [Métodos HTTP (CRUD)](#métodos-http-crud)
4. [JavaScript Assíncrono](#javascript-assíncrono)
5. [Manipulação de Formulários](#manipulação-de-formulários)
6. [Consumindo APIs com Fetch](#consumindo-apis-com-fetch)
7. [Inserindo Dados no DOM](#inserindo-dados-no-dom)
8. [Trabalhando com Query Parameters](#trabalhando-com-query-parameters)
9. [Estrutura do Projeto](#estrutura-do-projeto)
10. [Funcionalidades do Sistema](#funcionalidades-do-sistema)
11. [Exercício Prático: CRUD de Autores](#exercício-prático-crud-de-autores)
12. [Desafios Extras](#desafios-extras)
13. [Resolução de Problemas](#resolução-de-problemas)

---

## Introdução

### O que vamos aprender?

Nesta apostila, você vai aprender a criar um **sistema completo de cadastro** (CRUD) usando JavaScript e APIs. Vamos implementar:

✅ **CREATE** - Cadastrar novos registros
✅ **READ** - Listar e buscar registros
✅ **UPDATE** - Editar registros existentes
✅ **DELETE** - Excluir registros

### Tecnologias

- **JavaScript ES6+**: Lógica da aplicação
- **Fetch API**: Comunicação com o servidor
- **JSON**: Formato de dados
- **REST API**: Padrão de comunicação
- **DOM Manipulation**: Manipulação de HTML com JavaScript

---

## O que é uma API REST?

### Definição Simples

**REST API** é um servidor que disponibiliza dados através de URLs (endpoints). É como um cardápio de um restaurante:

```
Cardápio (API)
├── /alunos       → Lista de alunos
├── /autores      → Lista de autores
├── /livros       → Lista de livros
└── /emprestimos  → Lista de empréstimos
```

### Como Funciona?

1. **Cliente (seu JavaScript)** faz uma requisição para o servidor
2. **Servidor** processa e retorna os dados em JSON
3. **Cliente** recebe e exibe os dados na tela

### URL Base do Projeto

```
http://localhost:3000
```

**localhost:3000** significa que o servidor está rodando na sua própria máquina.

### Endpoints do Sistema

```
GET    /alunos           → Listar todos os alunos
GET    /alunos/:id       → Buscar um aluno específico
POST   /alunos           → Cadastrar novo aluno
PATCH  /alunos/:id       → Editar um aluno
DELETE /alunos/:id       → Excluir um aluno
```

---

## Métodos HTTP (CRUD)

### Os 4 Métodos Principais

| Método | Ação | CRUD | Exemplo |
|--------|------|------|---------|
| **GET** | Buscar dados | Read | Listar alunos |
| **POST** | Enviar dados | Create | Cadastrar aluno |
| **PUT/PATCH** | Atualizar dados | Update | Editar aluno |
| **DELETE** | Remover dados | Delete | Excluir aluno |

### Analogia do CRUD

Pense em um caderno de contatos:

- **CREATE (POST)**: Adicionar novo contato
- **READ (GET)**: Ler/consultar contatos
- **UPDATE (PATCH)**: Atualizar telefone de um contato
- **DELETE (DELETE)**: Apagar um contato

### Diferença entre PUT e PATCH

- **PUT**: Substitui o registro completo
- **PATCH**: Atualiza apenas os campos enviados (mais usado)

---

## JavaScript Assíncrono

### Por que precisamos de async/await?

Buscar dados da API demora (depende da internet). Se o JavaScript esperasse travado, o site ficaria congelado!

**Solução:** Programação assíncrona!

### Conceito de Promise

Uma **Promise** (Promessa) é como pedir uma pizza:

```
Você liga → Pizzaria promete entregar → Você continua assistindo TV
                                     ↓
                              Pizza chega!
```

### Sintaxe async/await

```javascript
// Declarar função assíncrona
async function minhaFuncao() {
    // Esperar uma operação demorada
    const resultado = await fetch('url');
}
```

**Regras:**
- Use `async` antes da função
- Use `await` antes de operações assíncronas
- `await` só funciona dentro de funções `async`

### Exemplo Prático

```javascript
// SEM async/await (complicado)
function buscarDados() {
    fetch('url')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

// COM async/await (mais fácil!)
async function buscarDados() {
    const response = await fetch('url');
    const data = await response.json();
    console.log(data);
}
```

---

## Manipulação de Formulários

### Prevenir Comportamento Padrão

Quando enviamos um formulário, o navegador recarrega a página por padrão. Para evitar isso:

```javascript
function minhaFuncao(event) {
    event.preventDefault(); // Impede o reload
    // Seu código aqui
}
```

**Por quê?** Queremos controlar o envio com JavaScript!

### Capturando Valores dos Inputs

**HTML:**
```html
<input type="text" id="nome" />
<input type="email" id="email" />
```

**JavaScript:**
```javascript
const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
```

**`.value`** pega o que foi digitado no input.

### Limpando Formulário

```javascript
// Limpar um campo específico
document.getElementById('nome').value = '';

// Limpar todo o formulário
document.getElementById('meuForm').reset();
```

### Preenchendo Formulário

```javascript
// Preencher inputs com dados
document.getElementById('nome').value = 'João Silva';
document.getElementById('email').value = 'joao@email.com';
```

---

## Consumindo APIs com Fetch

### 1. GET - Listar Dados

**Objetivo:** Buscar todos os registros

```javascript
async function listarAlunos() {
    // 1. Fazer requisição
    const response = await fetch('http://localhost:3000/alunos');
    
    // 2. Converter para JSON
    const alunos = await response.json();
    
    // 3. Usar os dados
    console.log(alunos); // Array de objetos
}
```

**Resposta da API (exemplo):**
```json
[
  {
    "id": "1",
    "nome": "João Silva",
    "cpf": "123.456.789-00",
    "email": "joao@email.com"
  },
  {
    "id": "2",
    "nome": "Maria Santos",
    "cpf": "987.654.321-00",
    "email": "maria@email.com"
  }
]
```

### 2. GET - Buscar por ID

**Objetivo:** Buscar um registro específico

```javascript
async function buscarAlunoPorId(id) {
    const response = await fetch(`http://localhost:3000/alunos/${id}`);
    const aluno = await response.json();
    console.log(aluno); // Um objeto
}
```

**Template Literals:**
Use crases `` ` `` para inserir variáveis em strings:
```javascript
const id = 5;
const url = `http://localhost:3000/alunos/${id}`; 
// Resultado: http://localhost:3000/alunos/5
```

### 3. POST - Cadastrar

**Objetivo:** Enviar dados para criar novo registro

```javascript
async function cadastrarAluno() {
    // 1. Montar objeto com dados
    const aluno = {
        nome: 'Pedro Costa',
        cpf: '111.222.333-44',
        email: 'pedro@email.com',
        tel: '(11) 98765-4321',
        endereco: 'Rua ABC, 123',
        datacadastro: '2024-11-10'
    };
    
    // 2. Configurar requisição
    const request = new Request('http://localhost:3000/alunos', {
        method: 'POST',
        body: JSON.stringify(aluno),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    
    // 3. Enviar
    const response = await fetch(request);
    
    // 4. Verificar se deu certo
    if (response.ok) {
        alert('Cadastrado com sucesso!');
    }
}
```

**Explicação:**
- `method: 'POST'`: Tipo de requisição
- `body: JSON.stringify(aluno)`: Converte objeto JavaScript em JSON
- `headers`: Define que estamos enviando JSON
- `response.ok`: Verifica se status é 200-299 (sucesso)

### 4. PATCH - Editar

**Objetivo:** Atualizar registro existente

```javascript
async function editarAluno(id) {
    // Dados que serão atualizados
    const dadosAtualizados = {
        nome: 'João Silva Atualizado',
        email: 'novoemail@email.com'
    };
    
    const request = new Request(`http://localhost:3000/alunos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(dadosAtualizados),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    
    const response = await fetch(request);
    
    if (response.ok) {
        alert('Atualizado com sucesso!');
    }
}
```

**Diferença do POST:** 
- POST cria novo → URL sem ID
- PATCH edita existente → URL com ID

### 5. DELETE - Excluir

**Objetivo:** Remover registro

```javascript
async function excluirAluno(id) {
    // Confirmar ação
    if (confirm('Deseja realmente excluir?')) {
        const request = new Request(`http://localhost:3000/alunos/${id}`, {
            method: 'DELETE'
        });
        
        const response = await fetch(request);
        
        if (response.ok) {
            alert('Excluído com sucesso!');
        }
    }
}
```

**Importante:** Sempre confirme antes de excluir!

---

## Inserindo Dados no DOM

### Selecionar Elemento

```javascript
const tabela = document.getElementById('tabelaResultado');
```

### Método forEach

Percorre array executando função para cada item:

```javascript
const alunos = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 22 }
];

alunos.forEach(function(aluno) {
    console.log(aluno.nome);
});
// João
// Maria
```

### insertAdjacentHTML

Insere HTML dentro de um elemento:

```javascript
elemento.insertAdjacentHTML('beforeend', '<div>Novo conteúdo</div>');
```

**Posições:**
- `'beforeend'`: Dentro, no final (mais usado)
- `'afterbegin'`: Dentro, no início
- `'beforebegin'`: Antes do elemento
- `'afterend'`: Depois do elemento

### Exemplo Completo: Listar Alunos na Tabela

```javascript
async function listarAlunos() {
    // 1. Buscar dados da API
    const response = await fetch('http://localhost:3000/alunos');
    const alunos = await response.json();
    
    // 2. Selecionar tbody da tabela
    const tabela = document.getElementById('tabelaResultado');
    
    // 3. Percorrer cada aluno
    alunos.forEach(function(aluno) {
        // 4. Criar HTML da linha
        const linha = `
            <tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.cpf}</td>
                <td>${aluno.email}</td>
                <td>
                    <button onclick="excluirAluno('${aluno.id}')">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
        
        // 5. Inserir na tabela
        tabela.insertAdjacentHTML('beforeend', linha);
    });
}

// Chamar função ao carregar página
listarAlunos();
```

---

## Trabalhando com Query Parameters

### O que são Query Parameters?

São parâmetros passados na URL:

```
http://site.com/edicao.html?id=5&nome=joao
                           ↑
                    Query Parameters
```

### URLSearchParams

Classe JavaScript para ler parâmetros da URL:

```javascript
// URL atual: edicao.html?id=5

// 1. Criar objeto URLSearchParams
let urlParams = new URLSearchParams(document.location.search);

// 2. Pegar valor do parâmetro
let id = urlParams.get('id'); // "5"
```

### Exemplo: Página de Edição

**1. Na listagem, criar link com ID:**
```html
<a href="./edicao.html?id=${aluno.id}">Editar</a>
```

**2. Na página de edição, capturar ID:**
```javascript
// Pegar ID da URL
let urlParams = new URLSearchParams(document.location.search);
let idAluno = urlParams.get('id');

// Usar ID para buscar dados
async function buscarAluno() {
    const response = await fetch(`http://localhost:3000/alunos/${idAluno}`);
    const aluno = await response.json();
    
    // Preencher formulário
    document.getElementById('nome').value = aluno.nome;
    document.getElementById('email').value = aluno.email;
}

buscarAluno();
```

---

## Estrutura do Projeto

### Arquivos do Sistema de Alunos

```
projeto/
├── alunos.html        → Página de listagem
├── cadastro.html      → Página de cadastro
├── edicao.html        → Página de edição
├── aluno.js          → Lógica de listagem, cadastro e exclusão
└── edicao.js         → Lógica de edição
```

### Por que separar os arquivos?

- **Organização**: Cada página tem sua lógica
- **Manutenção**: Mais fácil de encontrar e corrigir bugs
- **Reutilização**: Funções podem ser compartilhadas

---

## Funcionalidades do Sistema

### 1. Listar Alunos (READ)

**Arquivo:** `alunos.html` + `aluno.js`

**Fluxo:**
1. Página carrega
2. JavaScript faz GET para `/alunos`
3. Recebe array de alunos
4. Percorre array com `forEach`
5. Insere cada aluno como linha na tabela

**Código base:**
```javascript
async function listarAlunos() {
    const response = await fetch('URL_API/alunos');
    const alunos = await response.json();
    
    const tabela = document.getElementById('tabelaResultado');
    
    alunos.forEach(function(aluno) {
        tabela.insertAdjacentHTML('beforeend', `HTML da linha`);
    });
}

listarAlunos(); // Executa ao carregar
```

### 2. Cadastrar Aluno (CREATE)

**Arquivo:** `cadastro.html` + `aluno.js`

**Fluxo:**
1. Usuário preenche formulário
2. Clica em "Cadastrar"
3. JavaScript captura valores dos inputs
4. Monta objeto com dados
5. Faz POST para `/alunos`
6. Redireciona para listagem

**Código base:**
```javascript
async function cadastrarAluno(event) {
    event.preventDefault(); // Impede reload
    
    // Capturar valores
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    // ... outros campos
    
    // Montar objeto
    const aluno = { nome, cpf, /* ... */ };
    
    // Configurar requisição POST
    const request = new Request('URL_API/alunos', {
        method: 'POST',
        body: JSON.stringify(aluno),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    
    // Enviar
    const response = await fetch(request);
    
    if (response.ok) {
        alert('Cadastrado!');
        window.location.href = './alunos.html';
    }
}
```

### 3. Editar Aluno (UPDATE)

**Arquivo:** `edicao.html` + `edicao.js`

**Fluxo:**
1. Usuário clica em "Editar" na listagem
2. Vai para `edicao.html?id=5`
3. JavaScript pega ID da URL
4. Faz GET para `/alunos/5`
5. Preenche formulário com dados
6. Usuário altera e clica em "Salvar"
7. Faz PATCH para `/alunos/5`

**Código base:**
```javascript
// Pegar ID da URL
let urlParams = new URLSearchParams(document.location.search);
let idAluno = urlParams.get('id');

// Buscar dados para preencher formulário
async function buscarAluno() {
    const response = await fetch(`URL_API/alunos/${idAluno}`);
    const aluno = await response.json();
    
    document.getElementById('nome').value = aluno.nome;
    // ... preencher outros campos
}

// Salvar alterações
async function editarAluno(event) {
    event.preventDefault();
    
    const aluno = { /* dados atualizados */ };
    
    const request = new Request(`URL_API/alunos/${idAluno}`, {
        method: 'PATCH',
        body: JSON.stringify(aluno),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    
    const response = await fetch(request);
    
    if (response.ok) {
        alert('Atualizado!');
    }
}

buscarAluno(); // Executar ao carregar
```

### 4. Excluir Aluno (DELETE)

**Arquivo:** `alunos.html` + `aluno.js`

**Fluxo:**
1. Usuário clica em "Excluir" na listagem
2. Confirma ação
3. JavaScript faz DELETE para `/alunos/5`
4. Remove linha da tabela
5. Atualiza listagem

**Código base:**
```javascript
async function excluirAluno(id) {
    if (confirm('Deseja excluir?')) {
        const request = new Request(`URL_API/alunos/${id}`, {
            method: 'DELETE'
        });
        
        const response = await fetch(request);
        
        if (response.ok) {
            // Limpar tabela
            document.getElementById('tabelaResultado').innerHTML = '';
            
            // Recarregar lista
            listarAlunos();
        }
    }
}
```

---

## Exercício Prático: CRUD de Autores

Agora é sua vez! Você vai criar o **CRUD completo de Autores** seguindo o mesmo padrão do CRUD de Alunos.

### 🎯 Objetivo

Criar 3 páginas para gerenciar autores:
1. **autores.html** - Listagem
2. **cadastro-autor.html** - Cadastro
3. **edicao-autor.html** - Edição

### 📋 Campos do Autor

```javascript
{
    "id": "1",
    "nomeAutor": "Machado de Assis",
    "descricao": "Escritor brasileiro, considerado um dos maiores nomes da literatura nacional"
}
```

### ✅ Passo 1: Página de Listagem (autores.html)

**O que fazer:**
1. Copie a estrutura do `alunos.html`
2. Altere o título para "Gerenciamento de Autores"
3. Crie uma tabela com colunas: ID, Nome do Autor, Descrição, Ações
4. Botão "Novo Autor" que leva para cadastro
5. Crie o arquivo `autor.js`

**Estrutura da tabela:**
```html
<table class="table table-hover table-striped">
    <thead class="table-light">
        <tr>
            <th>ID</th>
            <th>Nome do Autor</th>
            <th>Descrição</th>
            <th>Ações</th>
        </tr>
    </thead>
    <tbody id="tabelaAutores">
        <!-- Linhas serão inseridas aqui -->
    </tbody>
</table>
```

**Dicas:**
- Endpoint da API: `http://localhost:3000/autores`
- Use `forEach` para percorrer os autores
- Botões: Editar (warning) e Excluir (danger)

### ✅ Passo 2: Função Listar Autores

No arquivo `autor.js`, crie:

```javascript
async function listarAutores() {
    // 1. Fazer GET para /autores
    // 2. Converter para JSON
    // 3. Selecionar elemento tabelaAutores
    // 4. Usar forEach para percorrer
    // 5. Inserir HTML de cada autor
}

// Chamar ao carregar página
listarAutores();
```

**HTML da linha (exemplo):**
```html
<tr>
    <td>${autor.id}</td>
    <td class="fw-bold">${autor.nomeAutor}</td>
    <td>${autor.descricao}</td>
    <td>
        <a href="./edicao-autor.html?id=${autor.id}" 
           class="btn btn-sm btn-warning text-white">
            <i class="bi bi-pencil-fill"></i>
        </a>
        <button onclick="excluirAutor('${autor.id}')" 
                class="btn btn-sm btn-danger">
            <i class="bi bi-trash-fill"></i>
        </button>
    </td>
</tr>
```

### ✅ Passo 3: Página de Cadastro (cadastro-autor.html)

**O que fazer:**
1. Copie estrutura do `cadastro.html`
2. Altere título e descrição
3. Crie formulário com 2 campos:
   - Nome do Autor (input text, id="nomeAutor")
   - Descrição (textarea, id="descricao", rows="4")
4. Botão "Cadastrar Autor"

**Estrutura do formulário:**
```html
<form onsubmit="cadastrarAutor(event)">
    <div class="row mb-4">
        <div class="col-md-6">
            <label for="nomeAutor" class="form-label fw-bold">
                Nome do Autor
            </label>
            <input type="text" 
                   id="nomeAutor" 
                   class="form-control form-control-lg"
                   placeholder="Digite o nome do autor" 
                   required>
        </div>
        
        <div class="col-md-6">
            <label for="descricao" class="form-label fw-bold">
                Descrição
            </label>
            <textarea id="descricao" 
                      class="form-control form-control-lg"
                      rows="4"
                      placeholder="Breve descrição do autor" 
                      required></textarea>
        </div>
    </div>
    
    <button type="submit" class="btn btn-success btn-lg">
        Cadastrar Autor
    </button>
</form>
```

### ✅ Passo 4: Função Cadastrar Autor

No arquivo `autor.js`, crie:

```javascript
async function cadastrarAutor(event) {
    // 1. Prevenir reload (event.preventDefault)
    // 2. Capturar valores dos campos
    // 3. Montar objeto autor
    // 4. Criar Request com método POST
    // 5. Fazer fetch
    // 6. Se ok, redirecionar para autores.html
}
```

**Objeto autor:**
```javascript
const autor = {
    nomeAutor: document.getElementById('nomeAutor').value,
    descricao: document.getElementById('descricao').value
};
```

### ✅ Passo 5: Página de Edição (edicao-autor.html)

**O que fazer:**
1. Copie estrutura do `edicao.html`
2. Mesmos campos do cadastro
3. Formulário chama `editarAutor(event)`
4. Crie arquivo `edicao-autor.js`

### ✅ Passo 6: Funções de Edição

No arquivo `edicao-autor.js`:

**Buscar autor para editar:**
```javascript
// Pegar ID da URL
let urlParams = new URLSearchParams(document.location.search);
let idAutor = urlParams.get('id');

async function buscarAutorPorId() {
    // 1. Fazer GET para /autores/:id
    // 2. Converter para JSON
    // 3. Preencher campos do formulário
}

buscarAutorPorId();
```

**Salvar alterações:**
```javascript
async function editarAutor(event) {
    // 1. Prevenir reload
    // 2. Capturar valores
    // 3. Montar objeto
    // 4. Criar Request com PATCH
    // 5. Fazer fetch
    // 6. Mostrar mensagem de sucesso
}
```

### ✅ Passo 7: Função Excluir Autor

No arquivo `autor.js`:

```javascript
async function excluirAutor(id) {
    // 1. Confirmar com usuário
    // 2. Criar Request com DELETE
    // 3. Fazer fetch
    // 4. Limpar tabela
    // 5. Recarregar lista
}
```

---

## Checklist do Exercício

Antes de considerar completo, verifique:

### Listagem
- [ ] Página `autores.html` criada
- [ ] Tabela com colunas: ID, Nome, Descrição, Ações
- [ ] Função `listarAutores()` implementada
- [ ] Autores aparecem na tabela ao carregar
- [ ] Botão "Novo Autor" funciona
- [ ] Botão "Editar" redireciona com ID correto
- [ ] Botão "Excluir" funciona

### Cadastro
- [ ] Página `cadastro-autor.html` criada
- [x] Formulário com 2 campos
- [ ] Função `cadastrarAutor(event)` implementada
- [ ] `event.preventDefault()` impede reload
- [ ] Valores são capturados corretamente
- [ ] POST é enviado para API
- [ ] Redireciona após cadastro

### Edição
- [ ] Página `edicao-autor.html` criada
- [ ] ID é capturado da URL
- [ ] Função `buscarAutorPorId()` implementada
- [ ] Campos são preenchidos com dados existentes
- [ ] Função `editarAutor(event)` implementada
- [ ] PATCH é enviado para API
- [ ] Mensagem de sucesso aparece

### Exclusão
- [ ] Função `excluirAutor(id)` implementada
- [ ] Confirmação antes de excluir
- [ ] DELETE é enviado para API
- [ ] Tabela é atualizada após exclusão

### Geral
- [ ] Sem erros no Console (F12)
- [ ] Navbar igual às outras páginas
- [ ] Design consistente com Bootstrap
- [ ] Código organizado e comentado

---

## Desafios Extras

### 🌟 Desafio 1: Validação de Campos

Não permita cadastrar se os campos estiverem vazios:

```javascript
function validarCampos() {
    const nome = document.getElementById('nomeAutor').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
    
    if (nome === '' || descricao === '') {
        alert('Preencha todos os campos!');
        return false;
    }
    return true;
}
```

### 🌟 Desafio 2: Busca por Nome

Adicione um campo de busca que filtra autores pelo nome:

```javascript
function buscarPorNome() {
    const termo = document.getElementById('campoBusca').value.toLowerCase();
    
    const linhas = document.querySelectorAll('#tabelaAutores tr');
    linhas.forEach(linha => {
        const nome = linha.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (nome.includes(termo)) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });
}
```

### 🌟 Desafio 3: Loading

Mostre um spinner enquanto carrega os dados:

```html
<div id="loading" class="text-center my-5">
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Carregando...</span>
    </div>
</div>
```

```javascript
async function listarAutores() {
    // Mostrar loading
    document.getElementById('loading').style.display = 'block';
    
    const response = await fetch('URL');
    const autores = await response.json();
    
    // Esconder loading
    document.getElementById('loading').style.display = 'none';
    
    // Inserir dados
}
```

### 🌟 Desafio 4: Ordenação

Ordene autores por nome alfabeticamente:

```javascript
autores.sort((a, b) => a.nomeAutor.localeCompare(b.nomeAutor));
```

### 🌟 Desafio 5: Contador