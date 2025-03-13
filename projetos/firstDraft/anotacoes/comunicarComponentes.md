# Comunicando Componentes no React

Para que os componentes possam se comunicar e enviar informações entre si, podemos passar **funções como propriedades (props)**. Isso permite que um componente filho chame essa função e envie dados para o componente pai.

## Exemplo de comunicação entre componentes:

```jsx
function Pai() {
  const receberMensagem = (mensagem) => {
    console.log("Mensagem do filho:", mensagem);
  };

  return <Filho enviarMensagem={receberMensagem} />;
}

function Filho({ enviarMensagem }) {
  return (
    <button onClick={() => enviarMensagem("Olá, Pai!")}>
      Enviar Mensagem
    </button>
  );
}
```

✅ **Explicação:**
- O **componente pai** (`Pai`) define a função `receberMensagem`.
- Ele passa essa função como **prop** (`enviarMensagem`) para o **componente filho** (`Filho`).
- O **componente filho** chama essa função ao clicar no botão, enviando a mensagem para o pai.

