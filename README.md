# Ipepeca

Ipepeca é um aplicativo profissional desenvolvido para profissionais de beleza e estética, especialmente manicures e pedicures, gerenciarem seus negócios de forma eficiente e profissional.

![Ipepeca Preview](https://images.unsplash.com/photo-1610992015732-2449b0bb0a86?w=800&q=80)

## 🌟 Funcionalidades

### 📱 Painel Principal
- Visão geral dos agendamentos do dia
- Resumo financeiro
- Estatísticas de clientes

### 📅 Agenda
- Gerenciamento de horários
- Visualização por dia/semana
- Status de agendamentos (confirmado/pendente)
- Histórico de atendimentos

### 💅 Serviços
- Cadastro de serviços
- Definição de preços
- Duração dos procedimentos
- Personalização do catálogo

### 👤 Perfil Profissional
- Informações pessoais
- Histórico profissional
- Avaliações de clientes
- Métricas de desempenho

## 🚀 Tecnologias

- React Native
- Expo Router
- TypeScript
- Expo SDK 52
- React Navigation
- Expo Vector Icons
- Linear Gradient

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ipepeca.git

# Entre no diretório
cd ipepeca

# Instale as dependências
npm install

# Inicie o projeto
npm run dev
```

## 🔧 Configuração

O projeto utiliza Expo Router para navegação. A estrutura de arquivos está organizada da seguinte forma:

```
app/
├── _layout.tsx              # Layout principal
├── +not-found.tsx          # Página 404
└── (tabs)/                 # Navegação por tabs
    ├── _layout.tsx         # Configuração das tabs
    ├── index.tsx           # Tela inicial
    ├── schedule.tsx        # Agenda
    ├── services.tsx        # Serviços
    └── profile.tsx         # Perfil
```

## 🎨 Design

O aplicativo segue um design moderno e profissional, com:
- Paleta de cores focada em tons de rosa (#E91E63)
- Interface limpa e intuitiva
- Elementos visuais consistentes
- Feedback visual para interações
- Suporte a tema claro/escuro

## 📱 Compatibilidade

- iOS
- Android
- Web (PWA)

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👩‍💻 Autores

- Seu Nome - [@seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- [Expo](https://expo.dev)
- [React Native](https://reactnative.dev)
- [Unsplash](https://unsplash.com) - Imagens utilizadas no projeto
