# DCCommerce
Plataforma web para compra e venda de produtos - Trabalho de Engenharia de Software

### Grupo
- Davi Braga Tolentino Veloso
- Júlia Fonseca de Sena
- Lucas Paulo Martins Mariz
- Thales Aparecido Silva Elias
- Victor Hugo Silva Moura

## Sprint Planning

### Histórias
- Autenticação do usuário
- Listagem de produtos
- Cadastro de produtos
- Carrinho
- Avaliar compras
- Comentários sobre os produtos
- Sugestões de produtos
- Pedidos em andamento

### Tarefas
1. Autenticação do usuário (Lucas e Victor)
    - Configuração:
        - Configuração do projeto no firebase
        - Configuração do projeto no Facebook Developers Panel
    - Estruturação:
        - Tela de login
        - Tela de esqueci a senha
        - Tela de recuperação da senha
        - Tela de cadastro
     - Funcionalidades:
        - Login com o Facebook
        - Login com o Google
        - Login com email e senha
        - Logout
        - Email de recuperação de senha
        - Cadastro de usuário

2. Listagem de produtos (Thales)
    - Estruturação:
        - Tela principal da listagem de produtos
        - Tela do detalhe de cada produto
        - Componentização dos itens da listagem de produtos
    - Funcionalidades:
        - GET da listagem de produtos
        - Filtragem de produtos
        - Redirecionamento para o detalhe de cada produto

3. Cadastro de produtos (Victor)
    - Estruturação:
        - Formulário de cadastro de produtos
    - Funcionalidades: 
        - Enviar para o servidor o produto cadastrado

4. Carrinho (Lucas)
    - Estruturação:
        - Tela do carrinho
    - Funcionalidades:
        - Adicionar / Remover produtos do carrinho
        - Alterar a quantidade de itens
        - Finalizar a compra

5. Avaliar compras (Júlia)
    - Estruturação:
        - Formulário de avaliação de produtos
    - Funcionalidades:
        - CRUD de avaliação

6. Comentários sobre os produtos (Júlia)
    - Estruturação:
        - Formulário de comentário de produtos
    - Funcionalidades:
        - CRUD de comentário

7. Sugestões de produtos (Davi)
    - Estruturação:
        - Listagem de produtos sugeridos
    - Funcionalidades:
        - GET da listagem de produtos sugeridos

8. Pedidos em andamento (Davi e Thales)
    - Estruturação:
        - Listagem de pedidos em andamento
        - Tela do detalhe do pedido em andamento
    - Funcionalidades:
        - GET da listagem de produtos sugeridos
