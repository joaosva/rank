
# Ranking Frontend (No Backend)
Este é um template frontend em **Next.js** que reproduz a tela de "Ranking" mostrada no screenshot.
O projeto inclui:
- Next.js pages (index e páginas de participantes)
- TanStack Query configurado (com dados mockados)
- Zustand para gerenciamento global
- CSS manual para visual parecido com a imagem

**Observações**
- Não há backend incluído (conforme solicitado). As chamadas estão mockadas localmente para demonstrar uso do TanStack Query.
- Instale dependências com `npm install` e rode com `npm run dev`.

Arquivos principais:
- `pages/index.js` — tela principal do ranking
- `pages/participants/[id].js` — páginas individuais (modelo)
- `store/useStore.js` — Zustand store
- `lib/mockApi.js` — dados mock e "fetchers"
- `styles/globals.css` — estilos
