# DOCUMENTAÇÃO api-cozinha-criativa
**Ao utilizar esta API, leia com atenção toda a documentação.**


# Descrição  
A API Cozinha Criativa oferece funcionalidades de CRUD para cadastro, login e gerenciamento de receitas. Os usuários podem adicionar e salvar suas receitas
favoritas, com sua respectiva descrição e ingredientes.


# EndPoints
* `/`  - Home
* `/api/receitas` - Mostra todas as receitas
* `api/receitas/:id` - Mostra a receita buscando pelo ID


# Parâmetros

### - receitas
  Retorna todos as receitas.


# Response

**Pode retornar objetos JSON com as seguintes propriedades:**

Exemplo das propiedades quando é buscado "`/receitas`"
    
  - `receitas`: retorna todas as receitas.
  - `nome_receita`: nome da receita.
  - `apresentacao`: apresentação da receita.
  - `tempo_preparo`: retorna um vetor de 'horas_receita' e 'minutos'.
  - `ingredientes`: retorna os ingredientes da receita que o usuário adicionou em 'quantidade', 'unidade' e 'descricao'.
  - `modo_de_preparo`: retorna o modo de preparo da receita com o vetor 'passo'.
  - `categoria`: retorna a categoria da receita.


# Erros
- `404 Not Found:` Erro na requisição.
- `500 Internal Server Error:` Erro no servidor.
