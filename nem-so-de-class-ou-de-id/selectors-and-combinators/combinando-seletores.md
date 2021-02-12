# Combinators

Combinators, pois ele trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre seletores
* Busca um elemento dentro do outro

```css
body article h1
```

## Child combinator

* Identificador pelo sinal `>` entre seletores
* Selecionar somente o elemento que é filhoe direto do pai
* Elemento depois do filho direto serão desconsideradoss

```css
body > ul > li
```

## Adjacent sbling combinator

* Identificado pelo sinal `+` entro dois seletores
* Selecione somente o elemento do lado direito que é irmão direto na hierarquia

```css
h1 + p
```

## General sibling combinator

* Identificador pelo sinal `~` entre dois seletores
* Selecione todos os elementos irmãos

```css
h1 ~ p
```

## Utilizando combinadores

```css
ul > li[class="red"]
```

## Dica

* Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.