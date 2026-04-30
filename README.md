-# EBS Construcoes & Reforma

Site institucional pronto para editar, vender e apresentar ao cliente.

## Arquivos principais

- `index.html`: textos, secoes, links, telefone, e-mail e conteudo do site.
- `styles.css`: cores, layout, responsividade e visual.
- `script.js`: menu mobile, filtros de obras, simulador e formulario.
- `assets/`: imagens usadas no site.

## Como abrir no Visual Studio Code

1. Abra o Visual Studio Code.
2. Clique em `File > Open Folder`.
3. Selecione esta pasta:

```text
C:\Users\ScooB\Documents\Codex\2026-04-30\gere-um-site-completo-par-uma
```

Tambem pode abrir pelo terminal com:

```powershell
code .
```

## Como rodar o site

No terminal, dentro da pasta do projeto, execute:

```powershell
python dev_server.py
```

Depois abra:

```text
http://localhost:5500
```

## Responsividade

O site esta configurado para funcionar em:

- Celular: menu compacto, botoes em largura total e secoes em uma coluna.
- Tablet/notebook: grades em duas colunas e layout com leitura confortavel.
- Computador/monitor grande: conteudo centralizado, mantendo as secoes em largura completa.

Os ajustes ficam no final do arquivo `styles.css`, nas regras `@media`.

## Hospedagem no GitHub

Este projeto esta pronto para GitHub Pages usando a raiz do repositorio.

Consulte o passo a passo em:

```text
GITHUB_PAGES.md
```

## O que editar antes de vender

- Trocar telefone, WhatsApp e e-mail na secao `Contato`.
- Trocar os links das redes sociais na secao `Redes sociais`.
- Substituir os textos por dados reais da empresa.
- Trocar as imagens da pasta `assets` por fotos reais de obras.
- Ajustar valores do simulador no arquivo `script.js`, se necessario.
