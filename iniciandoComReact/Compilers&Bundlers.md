# Compilers & Bundlers

## Compilers
Ferramentas que convertem nosso código de um formato para outro. Em algumas linguagens de programação, os compilers podem transformar código escrito em uma versão mais moderna da linguagem para uma versão mais antiga, garantindo compatibilidade com navegadores que não suportam recursos mais recentes.

### Babel
**Babel** é uma ferramenta que converte código JavaScript moderno para versões mais antigas, compatíveis com navegadores mais antigos. É uma ferramenta de transpilação muito usada no desenvolvimento web.     

O que o Babel faz? 
- Transforma sintaxe
- Adiciona recursos Polyfill que faltam no ambiente de destino
- Transforma código-fonte (codemods)
- Garante que o código funcione corretamente para todos os usuários, independentemente do navegador utilizado

## Bundlers
**Bundlers** são ferramentas que combinam múltiplos arquivos de um projeto web (JavaScript, CSS, imagens, etc.) em um ou mais arquivos otimizados, chamados bundles. Esse processo melhora o desempenho do site, reduzindo o número de requisições HTTP e otimizando o tamanho dos arquivos através de técnicas como minificação e tree shaking.

### Webpack
O **Webpack** é um dos bundlers mais populares para aplicações web. Ele pega os arquivos do seu projeto (JavaScript, CSS, imagens, fontes, etc.), processa e combina tudo em um ou mais arquivos otimizados, chamados bundles. Isso melhora o desempenho do site, reduzindo o número de requisições e o tamanho dos arquivos carregados pelo navegador.

### Vite
O **Vite** é uma ferramenta de construção (build tool) para aplicações web modernas, criada como uma alternativa mais rápida e eficiente aos bundlers tradicionais como Webpack. Ele melhora o desempenho no desenvolvimento e na produção ao usar ES Modules (ESM) e um servidor de desenvolvimento otimizado.

- Suporte nativo para ES Modules → Código moderno, sem precisar transpilar tudo.
- HMR ultrarrápido → Mudanças refletem no navegador instantaneamente.
- Compatível com Vue, React, Svelte e mais → Possui templates prontos.
- Suporte nativo a TypeScript, CSS Modules, PostCSS e mais.
- Build otimizado com Rollup → Menos tempo de espera para produção.

1. 🔹 Se você quer algo rápido e fácil de usar, use o Vite.
2. 🔹 Se precisar de controle granular e suporte a sistemas legados, o Webpack ainda é útil.