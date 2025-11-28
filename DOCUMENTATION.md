# 📚 Documentação da API SpeedAuto

## 🎯 Visão Geral

Esta pasta contém a documentação completa da API SpeedAuto, um sistema SaaS para gestão de concessionárias de veículos.

## 📁 Arquivos

- **`swagger.yaml`** - Especificação OpenAPI 3.0 completa da API
- **`docs.html`** - Visualizador interativo da documentação (Swagger UI)

## 🚀 Como Usar

### Opção 1: Visualização Local (Recomendado)

1. Abra o arquivo `docs.html` em seu navegador
2. A documentação interativa será carregada automaticamente
3. Você pode testar os endpoints diretamente pela interface

### Opção 2: Swagger Editor Online

1. Acesse [editor.swagger.io](https://editor.swagger.io/)
2. Clique em "File" → "Import file"
3. Selecione o arquivo `swagger.yaml`

### Opção 3: Swagger UI Local

```bash
# Instale o Swagger UI globalmente
npm install -g swagger-ui-watcher

# Execute na pasta do projeto
swagger-ui-watcher swagger.yaml
```

## 📖 Conteúdo da Documentação

### Backend API

#### 🔐 Autenticação
- `POST /login/login` - Realizar login
- `POST /login/register` - Registrar novo usuário

#### 🚗 Veículos
- `GET /veiculos` - Listar todos os veículos
- `GET /veiculos/{id}` - Buscar veículo por ID
- `POST /veiculos` - Adicionar novo veículo
- `PUT /veiculos/{id}` - Atualizar veículo
- `DELETE /veiculos/{id}` - Deletar veículo

#### 👥 Clientes
- `GET /clientes` - Listar todos os clientes
- `GET /clientes/{id}` - Buscar cliente por ID
- `POST /clientes` - Adicionar novo cliente
- `PUT /clientes/{id}` - Atualizar cliente
- `DELETE /clientes/{id}` - Deletar cliente

#### 💰 Vendas
- `GET /vendas` - Listar todas as vendas
- `GET /vendas/{id}` - Buscar venda por ID
- `POST /vendas` - Adicionar nova venda
- `PUT /vendas/{id}` - Atualizar venda
- `DELETE /vendas/{id}` - Deletar venda

#### 📊 Dashboard
- `GET /api/dashboard/stats` - Obter estatísticas do dashboard

#### 🤖 Chatbot
- `POST /api/chatbot` - Enviar mensagem para o chatbot IA

### Frontend

#### Páginas Principais
- **Login/Registro** - Autenticação de usuários
- **Dashboard** - Visão geral com estatísticas e gráficos
- **Veículos** - Cadastro e gestão de veículos
- **Clientes** - Cadastro e gestão de clientes
- **Vendas** - Registro e acompanhamento de vendas
- **Relatórios** - Análises e relatórios detalhados
- **Financiamento** - Simulação de financiamento
- **Configurações** - Configurações do sistema
- **Admin** - Painel administrativo

## 🛠️ Tecnologias

### Backend
- **Node.js** + **Express.js** + **TypeScript**
- **Supabase** (PostgreSQL)
- **bcrypt** para criptografia
- **Google Generative AI** (Gemini 2.0 Flash)
- **CORS** habilitado

### Frontend
- **React.js** + **TypeScript**
- **Tailwind CSS**
- **React Router**
- **Recharts**
- **Axios**

## 🌐 Servidores

- **Desenvolvimento:** `http://localhost:5000`
- **Produção:** `https://api.speedauto.com`

## 📝 Schemas Principais

### Veículo
```json
{
  "id": 1,
  "marca": "Toyota",
  "modelo": "Corolla",
  "ano": 2023,
  "cor": "Prata",
  "combustivel": "Flex",
  "placa": "ABC-1234",
  "valor_venda": 125000.00,
  "status": "Disponível"
}
```

### Cliente
```json
{
  "id": 1,
  "nome": "Maria Santos",
  "email": "maria@email.com",
  "telefone": "(11) 98765-4321",
  "status": "Cliente Ativo"
}
```

### Venda
```json
{
  "id": 1,
  "veiculo": "Toyota Corolla 2023",
  "cliente": "Maria Santos",
  "data": "2024-01-15",
  "valor": 125000.00,
  "status": "Concluída",
  "observacoes": "Venda à vista com desconto"
}
```

## 🔒 Autenticação

Atualmente utiliza autenticação básica com bcrypt para hash de senhas.
JWT será implementado em versões futuras.

## 📞 Suporte

Para dúvidas ou sugestões sobre a API:
- Email: contato@speedauto.com
- Documentação: Abra `docs.html` no navegador

## 📄 Licença

MIT License
