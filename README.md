# Checklist

API de checklist de atividades.
Stack: Node.js, Express e Mongoose (MongoDB).

## Pré-requisitos

- Node.js 18+
- MongoDB local ou MongoDB Atlas

## Como rodar

```bash
git clone <https://github.com/luzvsc/checklist-backend>
cd checklist
npm install
cp .env.example .env
npm run dev
```

A API sobe em `http://localhost:3000`.

## Endpoints

| Método | Rota            | Descrição                              |
| ------ | --------------- | -------------------------------------- |
| POST   | /atividades     | Cria atividade                         |
| GET    | /atividades     | Lista atividades                       |
| PUT    | /atividades/:id | Edita título e/ou marca como concluída |
| DELETE | /atividades/:id | Exclui atividade                       |

### Exemplos de body

```json
{ "titulo": "Treinar pernas" }
{ "concluida": true }
```
