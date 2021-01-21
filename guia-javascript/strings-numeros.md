# Strings em números

Manipulando strings e números

Transformando String em Número e Número em String

```js
let string = "123"
console.log(string)
let number = 321
console.log(number)
```

Contar quantos caracteres tem um palavra e quantos digitos tem um número

```js
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
```

Transformando um número quebrado com 2 casa decimais e trocar ponto por vírgulas

```js
let number = 345.333132
console.log(number.toFixed(2).replace(".", ","))
```

Transforma letras minúsculas em maiúsculas. Faça o contrário disso também

```js
let word = "Programar é muito bacana!"
console.log(word.toUpperCase())

let word2 = "PROGRAMAR É MUITO BACANA!"
console.log(word2.toLowCase())
```

Verificar se o texto contém a palavra Amor

```js
let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))
```

Separar um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transform o array em um texto e onde eram espaçõs, coloque _

```js
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
```

Criar Aray com construtor

```js
let myArray = new Array('a', 'b', 'c')
console.log(myArray)
```

Contar elementos de um array

```js
console.log(['a', 'b', 'c'].length)
```

Transformar um cadeira de caracteres em elementos de um array

```js
let word = "manipulação"
console.log(Array.from(word))
```

### Manipulação de Arrays

```js
let techs = ["html", "css", "js"]
```
Adicionar um item no fim
```js
console.log(techs.push("nodejs"))
```
Adicionar no começo
```js
console.log(techs.unshift("sql"))
```
Remover do fim
```js
console.log(techs.pop())
```
Remover do começo
```js
console.log(techs.shift())
```
Pegar somente alguns elementos do array
```js
console.log(techs.slice(1, 2))
```
Remover 1 ou mais itens em qualquer posição do array
```js
console.log(techs.splice(1, 1))
```
Encontrar posição de um elemento no array
```js
let index = tehcs.indexOf('html')
tehcs.splice(index, 1)
```