# Festa DJ Salvador — Site Oficial

Site institucional em HTML/CSS/JS puro, pronto para hospedar no GitHub Pages com domínio próprio (`www.festadjsalvador.com.br`).

## Estrutura de arquivos

```
festadjsalvador/
├── index.html              → todo o conteúdo do site (uma página só)
├── css/style.css            → cores, tipografia, layout
├── js/script.js              → menu mobile, galeria (lightbox), formulário, cliques rastreados
├── images/
│   ├── logo/logo.png         → logo oficial
│   └── kits/kit01–04.jpg     → fotos dos 4 kits
├── favicon/                  → ícones do site e manifest.webmanifest
├── robots.txt                → regras para buscadores
├── sitemap.xml                → mapa do site para o Google
└── CNAME                      → domínio personalizado do GitHub Pages
```

## Onde alterar cada coisa

| O que mudar | Onde |
|---|---|
| Textos gerais (títulos, parágrafos) | `index.html`, direto no texto entre as tags |
| Preço ou itens de um kit | `index.html`, dentro de `<section id="kits">`, procure `Kit Essencial`, `Kit Clássico`, `Kit Premium` ou `Kit Master` |
| Adicionar um novo kit | Copie um bloco `<article class="kit-card">...</article>` inteiro, edite nome/preço/itens/imagem/link do WhatsApp |
| Telefone/WhatsApp | Busque `5571982285062` no `index.html` (aparece em vários botões) e no `js/script.js` |
| E-mail | Busque `atende@festadjsalvador.com.br` no `index.html` |
| Links do Instagram/Facebook | Busque `instagram.com/festadjsalvador` e `facebook.com/festadjsalvador` |
| Trocar uma imagem | Substitua o arquivo dentro de `images/` mantendo o mesmo nome, ou aponte o `src=""` para o novo arquivo |
| Adicionar fotos na Galeria | Dentro de `<section id="galeria">`, copie um bloco `<button class="gallery-item" ...>` e aponte para a nova imagem |
| Depoimentos reais | Dentro de `<section id="depoimentos">`, substitua os blocos `testimonial-placeholder` pelo texto e nome reais |
| Cores do site | `css/style.css`, bloco `:root` no topo (variáveis `--purple`, `--gold`, `--bg` etc.) |

## Google Analytics 4

No `index.html`, dentro do `<head>`, há um bloco comentado com o script do GA4. Quando você tiver o ID de medição (formato `G-XXXXXXXXXX`), remova os comentários `<!-- -->` e substitua `G-XXXXXXXXXX` pelo seu ID nas duas ocorrências.

## Sobre os preços e informações dos kits

Todos os preços e itens dos 4 kits foram retirados exatamente dos materiais enviados (KIT01–KIT04). Nenhum valor foi inventado. Se algum preço mudar, atualize apenas no `index.html`, na seção do respectivo kit.

Informações **não incluídas** nos materiais enviados (e por isso não foram inventadas) e que ficaram como espaço reservado, para você preencher quando tiver os dados reais:
- Depoimentos de clientes
- Fotos adicionais de eventos reais na galeria
- Vídeos de eventos
- Tempo de mercado / quantidade de eventos realizados
- Condições detalhadas de pagamento

Veja o manual de publicação completo enviado na conversa para os passos de GitHub Pages, GoDaddy, HTTPS, Google Search Console, Analytics e Google Business Profile.
