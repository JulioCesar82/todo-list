## Visão Geral do Projeto

Este repositório, `todo-list`, foi criado para demonstrar a separação entre a camada de negócios (o "Core") e a camada de apresentação (o "FrontEnd"). O objetivo é ter uma base de código de negócios que seja independente de qualquer framework de UI, permitindo que a lógica principal seja reutilizada em diferentes tecnologias de frontend.

## Arquitetura

A arquitetura deste projeto foi desenhada para ser:

- ** desacoplada:** A lógica de negócios não tem conhecimento sobre qual framework a está consumindo.
- ** reutilizável:** O pacote `TodoListPackage` pode ser publicado e consumido por qualquer aplicação JavaScript/TypeScript.
- ** escalável:** Novos frameworks de frontend podem ser adicionados sem a necessidade de reescrever a lógica de negócios.

## Estrutura do Repositório

O monorepo está organizado da seguinte forma:

- **`TodoListPackage/`**: O coração da aplicação. É um pacote TypeScript puro que contém toda a lógica para gerenciar tarefas (adicionar, remover, etc.). Ele é compilado para JavaScript (ES5/CommonJS) para ser compatível com diversos ambientes.
- **`AngularTodoApp/`**: Uma implementação do frontend utilizando **Angular 18**.
- **`ReactTodoApp/`**: Uma implementação do frontend utilizando **React 18** com **Next.js 14**.
- **`VueTodoApp/`**: Uma implementação do frontend utilizando **Vue 3** com **Vite**.

## Como Começar

### Pré-requisitos

- **Node.js** (versão 20 ou superior)
- **npm** (versão 10 ou superior)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/JulioCesar82/todo-list.git
    cd todo-list
    ```

2.  **Construa o pacote principal:**
    O `TodoListPackage` precisa ser construído primeiro, pois os outros projetos dependem dele.
    ```bash
    cd TodoListPackage
    npm install
    npm run build
    cd ..
    ```

3.  **Instale as dependências dos frontends:**
    Você pode instalar as dependências para cada frontend individualmente.
    ```bash
    # Para Angular
    cd AngularTodoApp
    npm install
    cd ..

    # Para React
    cd ReactTodoApp
    npm install
    cd ..

    # Para Vue
    cd VueTodoApp
    npm install
    cd ..
    ```

## `TodoListPackage`

Este é o pacote que contém a lógica de negócios.

### Scripts Disponíveis

- **`npm run build`**: Compila o código TypeScript para JavaScript.
- **`npm run test`**: Executa os testes unitários com Jest.

## Aplicações Frontend

Cada aplicação frontend se conecta ao `TodoListPackage` para gerenciar os dados.

### AngularTodoApp

- **Para iniciar em modo de desenvolvimento:**
  ```bash
  cd AngularTodoApp
  npm start
  ```
- **Para executar os testes:**
  ```bash
  cd AngularTodoApp
  npm test
  ```
- **Para executar o Storybook:**
  ```bash
  cd AngularTodoApp
  npm run storybook
  ```

### ReactTodoApp

- **Para iniciar em modo de desenvolvimento:**
  ```bash
  cd ReactTodoApp
  npm start
  ```
- **Para executar os testes:**
  ```bash
  cd ReactTodoApp
  npm test
  ```
- **Para executar o Storybook:**
  ```bash
  cd ReactTodoApp
  npm run storybook
  ```

### VueTodoApp

- **Para iniciar em modo de desenvolvimento:**
  ```bash
  cd VueTodoApp
  npm start
  ```
- **Para executar os testes:**
  ```bash
  cd VueTodoApp
  npm test
  ```
- **Para executar o Storybook:**
  ```bash
  cd VueTodoApp
  npm run storybook
  ```

## Como Contribuir

1.  **Faça um Fork** do repositório.
2.  **Crie uma Branch** para a sua feature (`git checkout -b feature/nova-feature`).
3.  **Faça o Commit** das suas mudanças (`git commit -m 'Adiciona nova feature'`).
4.  **Faça o Push** para a sua branch (`git push origin feature/nova-feature`).
5.  **Abra um Pull Request**.

---

Este `README.md` é um ponto de partida. Se você aprovar, eu o substituirei no repositório.
