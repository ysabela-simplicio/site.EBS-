# Publicar no GitHub Pages usando GitHub Desktop

O GitHub Desktop envia o projeto para o GitHub. A hospedagem do site fica no GitHub Pages.

## 1. Publicar pelo GitHub Desktop

1. Abra o GitHub Desktop.
2. Clique em `File > Add Local Repository`.
3. Escolha esta pasta:

```text
C:\Users\ScooB\Documents\Codex\2026-04-30\gere-um-site-completo-par-uma
```

4. Clique em `Publish repository`.
5. Deixe o repositorio como publico se quiser usar GitHub Pages gratuito com uma conta comum.
6. Confirme a publicacao.

## 2. Ativar a hospedagem no GitHub Pages

1. No GitHub, abra o repositorio publicado.
2. Entre em `Settings`.
3. Clique em `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Em `Branch`, selecione `main` e a pasta `/(root)`.
6. Clique em `Save`.

Depois de alguns minutos, o GitHub vai mostrar o link publico do site.

## 3. Atualizar o site depois

1. Edite os arquivos no Visual Studio Code.
2. Volte ao GitHub Desktop.
3. Escreva um resumo em `Summary`.
4. Clique em `Commit to main`.
5. Clique em `Push origin`.

O GitHub Pages atualiza automaticamente depois do push.
