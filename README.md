# LAB03 - Sistema de Reservas de Hotel

## Descrição

Aplicação desenvolvida em TypeScript que simula o gerenciamento de reservas
de um hotel. O sistema permite registrar reservas, cancelá-las e consultar
o status de um quarto específico.

## Tecnologias utilizadas

- TypeScript
- Node.js
- ts-node

## Como executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Execute o programa

```bash
npm start
```

## Testes realizados

- Registro de 2 reservas (quartos 101 e 202)
- Cancelamento da reserva do quarto 101
- Consulta do quarto 101 → Disponível (reserva cancelada)
- Consulta do quarto 202 → Reservado
- Consulta do quarto 303 → Disponível (nunca reservado)

## Saída esperada no console

```
Reserva do quarto 101 para "João Pereira" registrada com sucesso.
Reserva do quarto 202 para "Fernanda Lima" registrada com sucesso.
Reserva do quarto 101 cancelada com sucesso.
Status do quarto 101: Disponível
Status do quarto 202: Reservado
Status do quarto 303: Disponível
```