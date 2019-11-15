# Teste SCCON

Este projeto foi desenvolvido por [Kelvin Marques](http://www.kelvinmarques.com.br), gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 6.1.3.

Elaborado para fins de teste de aptidão em desenvolvimento de aplicações web utilizando Angular 2+ e dependências.

## Requisitos

### Requisitos atendidos

- Desenvolvimento em Angular2+ (typeScript), versão 5 ou 6;
- Desenvolver HTML 5, usando as novas tags de forma semântica e seguindo os padrões web;
- Desenvolver o CSS usando SaSS ou Less;
- Aplicar um GRID de layout responsívo, usando Bootstrap 4 ou Angular Material;
- Usar Angular Material para criar componentes de formuário (e navegação se necessário);
- Integração com o serviço ViaCEP (viacep.com.br).

### Diferenciais atendidos

- Animações em CSS3;
- Logo extraído de material em PDF e usado como SVG no projeto;
- CSS aplicado de forma inteligente, reaproveitando estilos denidos quando necessário;
- Uso de variáveis, pseudo e-ementos no SaSS/Less para denir atributos reutilizáveis (cores, bordas, etc...).

### Requisitos obrigatórios para a criação de telas atendidos

- Use o Logo da SCCON (contido no cabeçalho do gui em PDF) no header da aplicação;
- O menu deve ter a cor de fundo #670000;
- Os botões de Cadastro/Edição devem ter a cor: #088C45 e no :hover ele deve escurecer 5%;
- Todos os botões internos dos formulários devem ter cantos arredondados;

### Requisitos obrigatórios para a arquitetura Angular atendidos

- A estrutura angular deve ter ao menos os módulos e componentes separados conforme instruído no guia em PDF;
- Fica a seu critério a arquitetura de serviços;
- O Módulo Home e de Clientes devem ser carregados apenas quando invocados pelo usuário;
- No formulário, a estrutura Reative Forms deve ser usada;

## Dependências instaladas do NPM

- Twitter Bootstrap 4.1.3.
    - jQuery 3.3.1.
    - Popper.js" 1.14.4.
- Font Awesome 4.7.0.
- json-server 0.14.0.
- ngx-mask 6.1.2.
- Angular Material 6.4.5.

## Observações importantes

- Utilizei os recursos do Bootstrap 4 (que por sua vez, para esta tarefa, utiliza o jQuery e o Popper.js), para construir o menu com submenus, apenas para demonstrar minha aptidão com o framework, mas normalmente eu utilizaria CSS3 e JS/TS puros;
- Pensei em usar localStorage, mas não fez sentido gerar cache visto que se trata de um CSM;
- Foi a primeira vez que usei Reactive forms (usava ngModel) e Angular Material (usava apenas o Twitter bootstrap);
- Eu quis usar algum plugin para caixas de diálogos mais amigáveis, mas no limite do prazo optei por usar o padrão do navegador.

## Rodando o projeto

### Fork on GitHub
https://github.com/Chelvis/scconTestApp

Obs: É necessário rodar o comando `json-server --watch db.json` para simular um serviço de API.

### Live demo

https://chelvis.github.io/scconTestApp/
