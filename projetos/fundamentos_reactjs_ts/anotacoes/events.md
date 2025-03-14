# Eventos no TypeScript

No TypeScript, ao contrário do JavaScript, precisamos tipar corretamente os eventos para garantir mais segurança e previsibilidade no código. Isso significa que devemos declarar explicitamente o tipo do evento ao usá-lo.

## Exemplos

### Input Change (`onChange`)
Quando trabalhamos com inputs, usamos `ChangeEvent` e especificamos o tipo do elemento HTML:

```tsx
const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};
```

### Formulário (`onSubmit`)
Eventos de formulário utilizam `FormEvent`:

```tsx
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log("Formulário enviado!");
};
```

### Clique em Botão (`onClick`)
Eventos de clique geralmente usam `MouseEvent`:

```tsx
const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
  console.log("Botão clicado!");
};
```

### Eventos de Teclado (`onKeyDown`, `onKeyUp`)
Para eventos de teclado, utilizamos `KeyboardEvent`:

```tsx
const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter") {
    console.log("Enter pressionado!");
  }
};
```

## Conclusão
No TypeScript, devemos sempre declarar os tipos corretos dos eventos para evitar erros e melhorar a experiência de desenvolvimento. Isso garante que o código seja mais previsível e fácil de manter.

