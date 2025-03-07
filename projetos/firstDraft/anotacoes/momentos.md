# Quando Criar um Componente

Criar componentes é uma prática essencial no desenvolvimento de interfaces modernas. Abaixo estão as principais situações em que você deve considerar a criação de um componente:

---

## 1. Quando algo se repete muito em tela

Crie um componente quando identificar que um mesmo bloco de código, estrutura ou funcionalidade está sendo repetido em várias partes da aplicação. Isso não só reduz a duplicação de código, mas também facilita a manutenção e a consistência visual/comportamental.

### Exemplo prático:
Se você tem vários botões com o mesmo estilo e comportamento em diferentes páginas, crie um componente `Button` reutilizável.

---

## 2. Quando você consegue isolar algo de um componente maior sem afetar seu funcionamento

Crie um componente quando perceber que uma parte específica de um componente maior pode ser isolada sem afetar o funcionamento do todo. Isso ajuda a dividir componentes complexos em partes menores, mais gerenciáveis e reutilizáveis.

### Exemplo prático:
Se você tem um componente `Card` que contém um cabeçalho, um corpo e um rodapé, e o cabeçalho pode ser usado em outros lugares, extraia o cabeçalho para um componente `Header` separado.

---

## 3. Quando uma parte da interface tem uma responsabilidade única

Crie um componente quando uma parte da interface tiver uma responsabilidade clara e bem definida. Isso segue o princípio da **responsabilidade única**, que facilita a manutenção e o entendimento do código.

### Exemplo prático:
Se você tem um formulário com campos de entrada, validação e submissão, divida-o em componentes menores, como `InputField`, `ValidationMessage` e `SubmitButton`.

---

## Resumo das Definições

1. **Repetição**: Crie componentes para evitar duplicação de código e garantir consistência.
2. **Isolamento**: Extraia partes de componentes maiores que possam funcionar de forma independente.
3. **Responsabilidade única**: Divida a interface em componentes com funções claras e específicas.

---