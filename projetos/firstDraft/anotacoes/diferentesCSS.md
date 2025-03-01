# Modelos de CSS

## CSS Modules
CSS Modules é uma abordagem para estilização em React (e outras aplicações JavaScript) que permite o escopo local de estilos, evitando conflitos globais de classes.

Principais características:
- Escopo local: Classes definidas em um arquivo CSS Module (.module.css ou .module.scss) são automaticamente transformadas em nomes únicos, evitando colisões entre estilos.
- Importação direta no componente: Os estilos são importados como um objeto JavaScript e aplicados via className.
- Manutenção facilitada: Como os estilos são encapsulados no componente, facilita a modularização e reutilização do código.

## CSS Global

CSS global funciona de maneira semelhante ao CSS tradicional, onde os estilos são aplicados a toda a aplicação sem escopo específico para componentes individuais.

Características do CSS Global em React:
- Aplicado a toda a aplicação
- Fácil de usar para estilos comuns (ex.: reset, temas)
- Pode gerar conflitos de classe entre componentes
- Dificulta a manutenção conforme o projeto cresce

## Por que usar rem?

Usar o rem(unidade de medida relativa) é melhor do que px(pixel) porque melhora a acessibilidade, a responsividade e a consistência do design. Aqui estão os principais motivos:

Por que usar rem?
- Acessibilidade – Se o usuário mudar o tamanho da fonte no navegador, os elementos ajustam automaticamente.
- Responsividade – Basta mudar o font-size do html para escalar todo o layout.
- Consistência – Mantém proporções entre elementos sem precisar ajustar cada um separadamente.

