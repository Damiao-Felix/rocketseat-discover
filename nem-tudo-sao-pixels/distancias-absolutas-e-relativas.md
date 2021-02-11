# Distâncias absolutas <length>

São fixas e não alteram seu valor.

Unidade     Nome                Equivalência
cm          Centímentros        1cm = 96px/2.54
in          Inches (polegadas)  1in = 2.54cm = 96px
px          Pixels              1px = 1/96th of lin

* O mais comum é mais utilizado eo **px**
* não recomendado usar cm

## Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

* Benefícios: Maior adaptação aos diferentes tipos de tela

Unidade         Relativo a
em              Tamanho da font pai.
rem             Tamanho do elemento raiz (root/html)
vw              !% da viewport width.
vh              1% da viewport height.