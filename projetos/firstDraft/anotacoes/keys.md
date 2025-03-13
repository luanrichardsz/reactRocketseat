# Key no React

## Por que única?
A `key` deve ser única para que o React possa identificar corretamente quais elementos já existiam e quais são novos. Isso evita recriações desnecessárias e melhora a eficiência da renderização.

---

## 3 momentos em que um componente é renderizado novamente no React:

1. Quando o **estado** (`useState`) do componente muda.  
2. Quando a **propriedade (prop)** do componente recebe um novo valor.  
3. Quando o **componente pai** renderiza novamente.  

---

## Por que adicionar `key`?
A `key` permite ao React atualizar apenas os itens que mudaram na lista, em vez de recriar todos os elementos, otimizando o desempenho.

---

## Por que não usar o índice do array como `key`?

```js
const posts = [1, 2, 3, 4, 5];
const postsUpdated = [1, 2, 5, 4, 3]; // Precisa renderizar novamente
```
Se usarmos o índice como `key`, o React pode não detectar corretamente as mudanças quando a ordem dos itens for alterada, resultando em comportamento inesperado.

✅ O ideal é usar um **ID único** para cada item, garantindo que o React identifique corretamente os elementos que precisam ser atualizados.