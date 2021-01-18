# Comentários

* Não irá afetar o seu código
* Ajuda a lembra blocos de código
* Deixa dicas para a leitura
* Ajuda outros a entenderem
* Nunca esqueça de fecha um comentário aberto

Comentários começam com`/*` e terminam com `*/` .

```css
/* Básico */
/* ------------------------------------------------------ */
body {
    font: 1em/150% Helvetica, Arial, sans-serif;
    padding: 1em;
    margin: 0 auto;
    max-width: 33em;
}

@media (min-width: 70em){
    /* comentários */
    body {
        font-size: 130%;
    }
}

h1 {
    font-size: 1.5em;
}

/* Elementos esperficios */
div, p, #id:first-line {
    background-color: red;
    border-radius: 3px;
}

div, p {
    margin: 0;
    padding: 1em;
}
div, p + p {
    paddiing-top: 0;
}
```

* Você pode usar para desabilitar partes do seu código

```css
/* .special {
    color: red;
} */

p {
    color: blue;
}


```