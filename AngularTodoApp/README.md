# História do Angular

Usava o zonejs, depois migrou para o RxJs e agora Signals.

Usa o Vite: Servidor de desenvolvimento local escrito por Evan You, o criador do Vue.js, e usado por padrão pelo Vue e para modelos de projeto React. Possui suporte para TypeScript e JSX. Ele usa Rollup e esbuild internamente para empacotamento.
O servidor Vite entrega o código bruto em ESM para o navegador (<script type="module">), mas isso não é bom para ambiente de Produção.  


# Pré Requisito

Primeiro é preciso buildar o pacote 'TodoListPackage'


# Configuração de debug completa. Para usar:

No VSCode:

1) Feche o VSCode

- Abra o diretório AngularTodoApp
- Use "File > Add Folder to Workspace" e adicione o diretório TodoListPackage
- Salve o workspace (File > Save Workspace As...)

2) Para iniciar a depuração:

- Coloque breakpoints no código do TodoListPackage (src/todoItem/element-definition.ts)
- Pressione F5 ou selecione "Debug Full Stack" no menu Run and Debug
- O Chrome abrirá automaticamente
- O TodoListPackage será compilado antes do debug (via tasks.json)
- Os breakpoints serão ativados quando o código for executado

3) Configurações implementadas:

- Source maps configurados para mapear corretamente o código do pacote
- Skip patterns configurados para não ignorar os arquivos do pacote
- Build automático do pacote antes do debug
- Mapeamento correto dos caminhos do workspace

Você pode agora depurar o código do TodoListPackage junto com o código Angular, com os breakpoints funcionando em ambos os projetos.



-----

# AngularTodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
