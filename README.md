# Arquivo Atmosférico

Protótipo acadêmico sobre poluição atmosférica e saúde cardiovascular, preparado para publicação como site estático no GitHub Pages.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

O projeto usa `HashRouter`, então as rotas também funcionam quando o site é servido diretamente pelo GitHub Pages.

## Publicação no GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` compila o projeto e publica a pasta `dist/`.

No repositório do GitHub, abra **Settings > Pages** e selecione **GitHub Actions** como fonte de publicação. Não selecione “Deploy from a branch” apontando para a raiz, pois a raiz contém o código-fonte e não o bundle pronto para o navegador.
