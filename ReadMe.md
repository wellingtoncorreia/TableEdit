# Tabela Editável com Bootstrap e LocalStorage

Este projeto é uma aplicação web simples que exibe uma tabela editável usando Bootstrap e JavaScript, com persistência de dados no `localStorage` do navegador. As informações são carregadas automaticamente do `localStorage` e atualizadas em tempo real conforme o usuário edita as células da tabela.

## Funcionalidades

- **Tabela Editável**: Cada célula da tabela pode ser editada diretamente pelo usuário.
- **Persistência de Dados**: Os dados da tabela são salvos no `localStorage` do navegador, garantindo que as informações permaneçam mesmo após a página ser recarregada.
- **Carregamento Automático**: Ao carregar a página, os dados são automaticamente recuperados do `localStorage` e exibidos na tabela.
- **Bootstrap**: A tabela utiliza o Bootstrap para estilização, garantindo um layout responsivo e visualmente agradável.

## Tecnologias Utilizadas

- HTML
- JavaScript
- Bootstrap 5
- `localStorage` do navegador para armazenamento de dados

## Como Usar

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/wellingtoncorreia/TableEdit.git
## Como Usar

2. **Abrir o arquivo `index.html`**:
   - Navegue até o diretório do projeto clonado e abra o arquivo `index.html` diretamente no navegador.
   - Ou, se preferir, use uma extensão de servidor local como o **Live Server** no VS Code para abrir o projeto em um servidor local.

3. **Editar as células da tabela**:
   - Clique em qualquer célula da tabela para editá-la. 
   - Ao clicar fora da célula (evento `blur`), as alterações serão salvas automaticamente no `localStorage`.
   - A tabela será atualizada imediatamente com os dados salvos.

4. **Visualizar os dados armazenados**:
   - Abra o console do navegador (pressione `F12` ou `Ctrl+Shift+I`).
   - Navegue até a aba `Application` > `Local Storage` para ver os dados armazenados.
   - Os dados da tabela estarão armazenados na chave `tabelaEditavelDados`.

5. **Recarregar os dados do `localStorage`**:
   - Sempre que a página for carregada, a função `loadData()` buscará os dados do `localStorage` e preencherá a tabela com as informações salvas.
   - Caso a tabela esteja vazia, você pode adicionar dados manualmente e eles serão salvos no `localStorage` para a próxima vez que você abrir a página.

6. **Resetar os dados do `localStorage`**:
   - Para limpar todos os dados armazenados, execute o seguinte comando no console do navegador:
     ```javascript
     localStorage.removeItem('tabelaEditavelDados');
     ```
   - Isso limpará todos os dados da tabela armazenados no `localStorage`. Recarregue a página para visualizar uma tabela vazia.

## Comandos Úteis

- **Salvar dados diretamente no `localStorage` pelo console**:
   Se desejar adicionar dados diretamente pelo console do navegador, use o seguinte comando:
   ```javascript
   localStorage.setItem('tabelaEditavelDados', JSON.stringify([
       { nome: 'João', idade: '25', email: 'joao@example.com' },
       { nome: 'Maria', idade: '30', email: 'maria@example.com' },
       { nome: 'Pedro', idade: '22', email: 'pedro@example.com' }
   ]));
