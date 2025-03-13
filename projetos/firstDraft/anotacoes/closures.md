# 🚀 Closures no React

## 📌 Exemplo de Closure em um Componente React

O código abaixo demonstra um problema comum com closures em React:

```jsx
import { useState } from "react";

function Comment(props) {
    const [likes, setLikes] = useState(0);

    function addLike() {
        setLikes(likes + 1); // ❌ Pode estar usando um valor antigo de likes!
    }

    return (
        <div>
            <p>{props.text}</p>
            <p>Likes: {likes}</p>
            <button onClick={addLike}>Curtir</button>
        </div>
    );
}
```

## ⚠️ Problema com Closures
No código acima, quando `addLike` é chamado, ele **captura** o valor atual de `likes` no momento em que a função foi definida. Se a função for usada em um `setTimeout` ou evento assíncrono, pode acabar usando um **valor desatualizado**.

## ✅ Solução: Função Atualizadora do `setState`
Para garantir que estamos sempre usando o valor mais recente do estado, usamos a **função dentro de `setState`**:

```jsx
import { useState } from "react";

function Comment(props) {
    const [likes, setLikes] = useState(0);

    function addLike() {
        setLikes(prevLikes => prevLikes + 1); // ✅ Usa o estado atualizado
    }

    return (
        <div>
            <p>{props.text}</p>
            <p>Likes: {likes}</p>
            <button onClick={addLike}>Curtir</button>
        </div>
    );
}
```

## 🔥 Resumo
- **Closures** podem capturar valores antigos do estado.
- **Problema:** Chamadas a `setState` dentro de funções assíncronas podem usar valores desatualizados.
- **Solução:** Usar a versão com função `setState(prevState => prevState + 1)` para garantir a atualização correta.