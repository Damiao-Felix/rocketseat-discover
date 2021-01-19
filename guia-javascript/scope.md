# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block statement

```js
// Vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco, também criára um escopo. Chamamos de `block-scoped`



# Var

```js
// var é global e poderá funcionar fora de um escopo de bloco

console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)
```

# let const

```js
// const e let são locais e só funcionam no escopo onde foi criado
console.log('< existe y antes do bloco? ', y)

{
    let y = 0
}

console.log('< existe y antes do bloco? ', y)
```