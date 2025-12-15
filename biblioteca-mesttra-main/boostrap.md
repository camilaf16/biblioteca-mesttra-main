# Apostila: Introdução ao Bootstrap 5.3

## Índice
1. [O que é Bootstrap?](#o-que-é-bootstrap)
2. [Por que usar Bootstrap?](#por-que-usar-bootstrap)
3. [Como incluir Bootstrap no projeto](#como-incluir-bootstrap-no-projeto)
4. [Sistema de Grid](#sistema-de-grid)
5. [Principais Classes Utilitárias](#principais-classes-utilitárias)
6. [Componentes Essenciais](#componentes-essenciais)
7. [Exemplo Prático Completo](#exemplo-prático-completo)
8. [Referência Rápida](#referência-rápida)

---

## O que é Bootstrap?

Bootstrap é um poderoso toolkit frontend repleto de recursos que facilita a criação de sites responsivos e modernos de forma rápida e profissional.

### Em palavras simples:

Imagine que você precisa construir uma casa. Você pode:
- **Sem Bootstrap**: Cortar cada tábua, fazer cada prego, criar cada janela do zero
- **Com Bootstrap**: Usar peças pré-fabricadas (janelas prontas, portas prontas, paredes prontas) e apenas montar

**Bootstrap é como um "kit de construção" para sites** que já vem com:
- ✅ Botões estilizados
- ✅ Menus de navegação
- ✅ Formulários bonitos
- ✅ Sistema de grade (grid) responsivo
- ✅ Cards, modais, carrosséis e muito mais

### Versão Atual
Estamos usando o **Bootstrap 5.3** (versão mais recente e moderna).

---

## Por que usar Bootstrap?

### Vantagens:

1. **⚡ Rapidez no Desenvolvimento**
   - Não precisa escrever CSS do zero
   - Componentes prontos para usar

2. **📱 Responsividade Automática**
   - Funciona perfeitamente em celulares, tablets e desktops
   - Sem precisar escrever muitas media queries

3. **🎨 Design Profissional**
   - Visual moderno e consistente
   - Segue boas práticas de design

4. **🔧 Fácil Customização**
   - Pode personalizar cores e estilos
   - Funciona junto com seu CSS próprio

5. **📚 Documentação Excelente**
   - Muitos exemplos e tutoriais
   - Grande comunidade para ajudar

### Quando usar Bootstrap?

- ✅ Projetos que precisam ser desenvolvidos rapidamente
- ✅ Sites que precisam funcionar em todos os dispositivos
- ✅ Quando você quer focar na funcionalidade, não no design básico
- ✅ Protótipos e MVPs (Produto Mínimo Viável)

---

## Como incluir Bootstrap no projeto

Existem duas formas principais de adicionar Bootstrap ao seu projeto HTML:

### Método 1: Via CDN (Recomendado para Iniciantes)

**CDN** significa "Content Delivery Network" - é como pegar o Bootstrap emprestado da internet ao invés de baixar.

**Vantagens:**
- ✅ Não precisa baixar nada
- ✅ Carrega rápido
- ✅ Sempre atualizado

#### Passo a passo:

1. Adicione estas linhas no `<head>` do seu HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site com Bootstrap</title>
    
    <!-- CSS do Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet">
</head>
<body>
    <!-- Seu conteúdo aqui -->
    
    <!-- JavaScript do Bootstrap (antes de fechar o body) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Importante:** 
- O CSS vai no `<head>`
- O JavaScript vai antes de fechar o `</body>`

### Método 2: Download Local

1. Acesse: https://getbootstrap.com/docs/5.3/getting-started/download/
2. Baixe os arquivos
3. Coloque na pasta do seu projeto
4. Referencie localmente:

```html
<link href="css/bootstrap.min.css" rel="stylesheet">
<script src="js/bootstrap.bundle.min.js"></script>
```

---

## Sistema de Grid

O **Grid System** é uma das funcionalidades mais importantes do Bootstrap. Ele divide a tela em **12 colunas** e permite criar layouts responsivos facilmente.

### Conceito Básico

```
┌─────────────────────────────────────────┐
│  1  2  3  4  5  6  7  8  9  10 11 12   │ ← 12 colunas
└─────────────────────────────────────────┘
```

### Estrutura Básica

```html
<div class="container">
    <div class="row">
        <div class="col">Coluna 1</div>
        <div class="col">Coluna 2</div>
        <div class="col">Coluna 3</div>
    </div>
</div>
```

### Classes Principais:

- **`container`**: Container com largura fixa (centralizado)
- **`container-fluid`**: Container com largura total (100%)
- **`row`**: Linha que contém colunas
- **`col`**: Coluna que se ajusta automaticamente

### Controlando Tamanho das Colunas

```html
<!-- Cada coluna ocupa espaço específico (total = 12) -->
<div class="row">
    <div class="col-8">Ocupa 8 colunas (66%)</div>
    <div class="col-4">Ocupa 4 colunas (34%)</div>
</div>
```

### Responsividade no Grid

Bootstrap usa **breakpoints** (pontos de quebra) para diferentes tamanhos de tela:

| Classe | Tela | Largura |
|--------|------|---------|
| `col-` | Extra pequena | < 576px |
| `col-sm-` | Pequena (Small) | ≥ 576px |
| `col-md-` | Média (Medium) | ≥ 768px |
| `col-lg-` | Grande (Large) | ≥ 992px |
| `col-xl-` | Extra grande | ≥ 1200px |
| `col-xxl-` | Extra extra grande | ≥ 1400px |

**Exemplo prático:**

```html
<div class="row">
    <div class="col-12 col-md-6 col-lg-4">
        <!-- 
        Mobile (col-12): ocupa 100% da tela
        Tablet (col-md-6): ocupa 50% da tela
        Desktop (col-lg-4): ocupa 33% da tela
        -->
        Conteúdo
    </div>
</div>
```

---

## Principais Classes Utilitárias

Bootstrap oferece centenas de classes prontas. Aqui estão as essenciais:

### 1. Espaçamentos (Margin e Padding)

**Formato:** `{propriedade}{lado}-{tamanho}`

**Propriedades:**
- `m` = margin (margem externa)
- `p` = padding (espaço interno)

**Lados:**
- `t` = top (topo)
- `b` = bottom (baixo)
- `s` = start (esquerda)
- `e` = end (direita)
- `x` = horizontal (esquerda e direita)
- `y` = vertical (topo e baixo)
- *(nada)* = todos os lados

**Tamanhos:** 0, 1, 2, 3, 4, 5 (onde 0=0px e 5=3rem)

**Exemplos:**
```html
<div class="m-3">Margem em todos os lados</div>
<div class="mt-5">Margem grande no topo</div>
<div class="px-4">Padding horizontal</div>
<div class="mb-2">Margem pequena embaixo</div>
```

### 2. Cores

**Texto:**
```html
<p class="text-primary">Texto azul (cor primária)</p>
<p class="text-success">Texto verde (sucesso)</p>
<p class="text-danger">Texto vermelho (perigo)</p>
<p class="text-warning">Texto amarelo (aviso)</p>
<p class="text-info">Texto ciano (informação)</p>
<p class="text-dark">Texto escuro</p>
<p class="text-light">Texto claro</p>
```

**Fundos:**
```html
<div class="bg-primary">Fundo azul</div>
<div class="bg-success">Fundo verde</div>
<div class="bg-danger">Fundo vermelho</div>
```

### 3. Tipografia

```html
<h1 class="display-1">Título muito grande</h1>
<p class="lead">Parágrafo de destaque</p>
<p class="text-center">Texto centralizado</p>
<p class="text-start">Texto à esquerda</p>
<p class="text-end">Texto à direita</p>
<p class="fw-bold">Texto em negrito</p>
<p class="fst-italic">Texto em itálico</p>
<p class="text-uppercase">TEXTO EM MAIÚSCULAS</p>
```

### 4. Display e Visibilidade

```html
<div class="d-none">Oculto</div>
<div class="d-block">Exibido como bloco</div>
<div class="d-flex">Flexbox ativado</div>
<div class="d-none d-md-block">Oculto no mobile, visível no tablet+</div>
```

### 5. Flexbox

```html
<div class="d-flex justify-content-center">
    <!-- Conteúdo centralizado horizontalmente -->
</div>

<div class="d-flex align-items-center">
    <!-- Conteúdo centralizado verticalmente -->
</div>

<div class="d-flex justify-content-between">
    <!-- Espaço distribuído entre itens -->
</div>
```

### 6. Bordas

```html
<div class="border">Borda em todos os lados</div>
<div class="border-top">Borda apenas no topo</div>
<div class="rounded">Bordas arredondadas</div>
<div class="rounded-circle">Círculo perfeito</div>
<div class="border-0">Sem borda</div>
```

### 7. Tamanhos

```html
<div class="w-25">Largura 25%</div>
<div class="w-50">Largura 50%</div>
<div class="w-75">Largura 75%</div>
<div class="w-100">Largura 100%</div>

<div class="h-50">Altura 50%</div>
```

---

## Componentes Essenciais

### 1. Botões

```html
<!-- Estilos de botões -->
<button class="btn btn-primary">Botão Primário</button>
<button class="btn btn-success">Botão Sucesso</button>
<button class="btn btn-danger">Botão Perigo</button>
<button class="btn btn-warning">Botão Aviso</button>
<button class="btn btn-outline-primary">Botão Contorno</button>

<!-- Tamanhos -->
<button class="btn btn-primary btn-sm">Pequeno</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Grande</button>
```

### 2. Cards

```html
<div class="card" style="width: 18rem;">
    <img src="imagem.jpg" class="card-img-top" alt="Descrição">
    <div class="card-body">
        <h5 class="card-title">Título do Card</h5>
        <p class="card-text">Descrição do conteúdo do card.</p>
        <a href="#" class="btn btn-primary">Saiba mais</a>
    </div>
</div>
```

### 3. Navbar (Barra de Navegação)

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sobre</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contato</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### 4. Formulários

```html
<form>
    <div class="mb-3">
        <label for="nome" class="form-label">Nome</label>
        <input type="text" class="form-control" id="nome" placeholder="Seu nome">
    </div>
    
    <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <input type="email" class="form-control" id="email" placeholder="email@exemplo.com">
    </div>
    
    <div class="mb-3">
        <label for="mensagem" class="form-label">Mensagem</label>
        <textarea class="form-control" id="mensagem" rows="3"></textarea>
    </div>
    
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

### 5. Alertas

```html
<div class="alert alert-success" role="alert">
    Operação realizada com sucesso!
</div>

<div class="alert alert-danger" role="alert">
    Erro! Algo deu errado.
</div>

<div class="alert alert-warning" role="alert">
    Atenção! Verifique os dados.
</div>
```

### 6. Badge (Distintivo)

```html
<h1>Notificações <span class="badge bg-danger">5</span></h1>

<button class="btn btn-primary">
    Carrinho <span class="badge bg-light text-dark">3</span>
</button>
```

---

## Exemplo Prático Completo

Vamos criar uma página de portfólio simples usando Bootstrap:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio com Bootstrap</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet">
</head>
<body>
    
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">Meu Portfólio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#sobre">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projetos">Projetos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contato">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="bg-light py-5">
        <div class="container text-center">
            <h1 class="display-4 fw-bold">Olá, eu sou João Silva</h1>
            <p class="lead text-muted">Desenvolvedor Front-end | Designer</p>
            <button class="btn btn-primary btn-lg">Ver Projetos</button>
        </div>
    </section>

    <!-- SOBRE -->
    <section id="sobre" class="py-5">
        <div class="container">
            <h2 class="text-center mb-4">Sobre Mim</h2>
            <div class="row align-items-center">
                <div class="col-md-4 text-center mb-3">
                    <img src="https://via.placeholder.com/200" 
                         class="rounded-circle img-fluid" alt="Foto de perfil">
                </div>
                <div class="col-md-8">
                    <p class="lead">
                        Sou desenvolvedor front-end apaixonado por criar 
                        experiências web incríveis e responsivas.
                    </p>
                    <p>
                        Com conhecimento em HTML, CSS, JavaScript e frameworks 
                        modernos, busco sempre entregar projetos de qualidade.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- HABILIDADES -->
    <section class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-4">Habilidades</h2>
            <div class="row text-center">
                <div class="col-6 col-md-3 mb-3">
                    <div class="p-3 bg-white rounded shadow-sm">
                        <h5>HTML5</h5>
                    </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                    <div class="p-3 bg-white rounded shadow-sm">
                        <h5>CSS3</h5>
                    </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                    <div class="p-3 bg-white rounded shadow-sm">
                        <h5>JavaScript</h5>
                    </div>
                </div>
                <div class="col-6 col-md-3 mb-3">
                    <div class="p-3 bg-white rounded shadow-sm">
                        <h5>Bootstrap</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- PROJETOS -->
    <section id="projetos" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Meus Projetos</h2>
            <div class="row">
                <!-- Projeto 1 -->
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="https://via.placeholder.com/300x200" 
                             class="card-img-top" alt="Projeto 1">
                        <div class="card-body">
                            <h5 class="card-title">Site Corporativo</h5>
                            <p class="card-text">
                                Website moderno e responsivo para empresa de tecnologia.
                            </p>
                            <a href="#" class="btn btn-primary">Ver Projeto</a>
                        </div>
                    </div>
                </div>
                
                <!-- Projeto 2 -->
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="https://via.placeholder.com/300x200" 
                             class="card-img-top" alt="Projeto 2">
                        <div class="card-body">
                            <h5 class="card-title">E-commerce</h5>
                            <p class="card-text">
                                Loja virtual completa com carrinho e checkout.
                            </p>
                            <a href="#" class="btn btn-primary">Ver Projeto</a>
                        </div>
                    </div>
                </div>
                
                <!-- Projeto 3 -->
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="https://via.placeholder.com/300x200" 
                             class="card-img-top" alt="Projeto 3">
                        <div class="card-body">
                            <h5 class="card-title">Landing Page</h5>
                            <p class="card-text">
                                Página de captura com design atrativo e conversão otimizada.
                            </p>
                            <a href="#" class="btn btn-primary">Ver Projeto</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTATO -->
    <section id="contato" class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-4">Entre em Contato</h2>
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <form class="bg-white p-4 rounded shadow-sm">
                        <div class="mb-3">
                            <label for="nome" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="nome" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">E-mail</label>
                            <input type="email" class="form-control" id="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="mensagem" class="form-label">Mensagem</label>
                            <textarea class="form-control" id="mensagem" 
                                      rows="4" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-dark text-white text-center py-4">
        <div class="container">
            <p class="mb-0">© 2024 Meu Portfólio. Todos os direitos reservados.</p>
            <p class="mb-0 mt-2">
                <a href="#" class="text-white me-3">LinkedIn</a>
                <a href="#" class="text-white me-3">GitHub</a>
                <a href="#" class="text-white">E-mail</a>
            </p>
        </div>
    </footer>

    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### O que este exemplo demonstra:

1. **Navbar responsiva** que vira menu hambúrguer no mobile
2. **Sistema de Grid** com diferentes tamanhos de colunas
3. **Cards** para exibir projetos
4. **Formulário** estilizado com Bootstrap
5. **Classes utilitárias** para espaçamento, cores e tipografia
6. **Responsividade automática** - funciona em todos os dispositivos

---

## Referência Rápida

### Estrutura Básica

```html
<!-- No <head> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Antes de fechar </body> -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

### Grid System

```html
<div class="container">
    <div class="row">
        <div class="col-md-6">Metade da tela no tablet+</div>
        <div class="col-md-6">Outra metade</div>
    </div>
</div>
```

### Classes Mais Usadas

| Categoria | Classes | Uso |
|-----------|---------|-----|
| **Container** | `container`, `container-fluid` | Envolve conteúdo |
| **Grid** | `row`, `col`, `col-md-6` | Layout em colunas |
| **Botões** | `btn`, `btn-primary`, `btn-lg` | Botões estilizados |
| **Cores** | `text-primary`, `bg-success` | Cores de texto e fundo |
| **Espaçamento** | `m-3`, `p-4`, `mt-5`, `px-2` | Margens e padding |
| **Texto** | `text-center`, `fw-bold` | Alinhamento e peso |
| **Display** | `d-flex`, `d-none`, `d-md-block` | Controle de exibição |

### Breakpoints (Pontos de Quebra)

| Prefixo | Dispositivo | Largura |
|---------|-------------|---------|
| (nenhum) | Mobile | < 576px |
| `sm` | Tablet pequeno | ≥ 576px |
| `md` | Tablet | ≥ 768px |
| `lg` | Desktop | ≥ 992px |
| `xl` | Desktop grande | ≥ 1200px |
| `xxl` | Desktop extra grande | ≥ 1400px |

### Componentes Essenciais

```html
<!-- Botão -->
<button class="btn btn-primary">Clique aqui</button>

<!-- Card -->
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Texto</p>
    </div>
</div>

<!-- Alerta -->
<div class="alert alert-success">Sucesso!</div>

<!-- Badge -->
<span class="badge bg-primary">Novo</span>
```

---

## Dicas e Boas Práticas

### ✅ Faça:

1. **Sempre use o Grid System** para layouts responsivos
2. **Combine classes Bootstrap** com seu CSS personalizado
3. **Teste em diferentes tamanhos** de tela
4. **Use classes semânticas** (btn-success, text-danger)
5. **Consulte a documentação** oficial quando tiver dúvidas
6. **Use container** para centralizar e organizar conteúdo

### ❌ Evite:

1. **Não misture Grid System** com outros sistemas de layout
2. **Não use inline styles** quando existir classe Bootstrap
3. **Não ignore a responsividade** - sempre teste no mobile
4. **Não use muitas classes** em um único elemento (mantenha simples)
5. **Não esqueça** de incluir o JavaScript quando usar componentes interativos

---

## Próximos Passos

Depois de dominar o básico, explore:

1. **Componentes Avançados**
   - Modal (janelas popup)
   - Carousel (carrossel de imagens)
   - Accordion (sanfona/FAQ)
   - Dropdown (menus suspensos)
   - Tooltips e Popovers

2. **Customização**
   - Personalizar cores e temas
   - Usar variáveis CSS do Bootstrap
   - Criar componentes próprios

3. **JavaScript do Bootstrap**
   - Entender os plugins JavaScript
   - Usar data attributes
   - Trabalhar com eventos

4. **Integração**
   - Usar Bootstrap com JavaScript frameworks
   - Combinar com outras bibliotecas

---

## Recursos Úteis

### Documentação Oficial
- **Site Principal**: https://getbootstrap.com/
- **Documentação 5.3**: https://getbootstrap.com/docs/5.3/
- **Exemplos**: https://getbootstrap.com/docs/5.3/examples/

### Ferramentas
- **Bootstrap Icons**: https://icons.getbootstrap.com/
- **Bootstrap Themes**: https://themes.getbootstrap.com/
- **Layoutit (Builder Visual)**: https://www.layoutit.com/build

### Aprendizado
- **W3Schools Bootstrap 5**: https://www.w3schools.com/bootstrap5/
- **FreeCodeCamp**: Tutoriais gratuitos sobre Bootstrap
- **YouTube**: Diversos tutoriais em vídeo