# Image

* IMG
  * src
  * alt
  * title
  * width
  * height
  * adicionando link

```html
<a href="https://google.com">
  <iimg src="https://source.unsplash.com/random" alt="imagem de alguma coisa" title="Colocar um título na imagem" height="250px">
</a>
```

* BACKGROUND-IMAGE
  * com a tag style
  * somente para estilo
  * não é semântica e falta significa

```html
<p style="background-image: url('./icon.png')">Imagem</p>
```

Criando título visíveis para imagens

`<figure>` e `<figcapition>`

### SVG

É uma marcação, estilo html, mas não é textos, e sim para fazer imagens.

Possuimos elementos para gerar formas.

Para entender melhor
* Imagem rasterizada x Imagem vetorizada

### Benefícios
* Mais leve
* Mais detalhada
* Maior acessibilidade e SEO
* Pode ser editada via CSS ou atributos

### Desvantagens
* Pode ser mais complicado de trabalhar
* Quanto mais complexa a imagem, mais trabalho para o navegador
* Navegadores mais antigos não possuem suporte a essa tag

Para fotografias, ainda prefiro usar imagens rasterizadas

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```