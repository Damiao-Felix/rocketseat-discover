# Como funcionar a comunicação entre os browser

* Recurso
    * Local que irei enviar o pedido
    * Usarei uma URL para acessar o recurso
    * Exemplo
        * https://google.com/
        * http://localhost:3000/posts?q=oracle

* Message
    * Pedido
        * Methods
            * Definição do tipo do pedido
            * Qual ação eu quero fazer no servidor
            * Exemplo 
                * Get -> Pegar recurso
                * Post -> Criar recurso
        * Headers
        * Body
    * Resposta (response)
        * Satus code
            * Resposta do servidor sobre o estado do pedido/resposta
            * Exemplo
                * 200
                * 301
                * 404
                * 500
        * Headers
        * Body
    * Request / Response
        * Headers
            * Campos informativos
            * Propriedade: Valor
            * Exemplo
                * Content-Type: application/json
                * User-Agent: Chorme
                * Request URL: www.google.com
        * Body
            * HTML
            * Conteúdo
            * JSON


### REQUEST MESSGE
GET /index.html HTTP/1.1
User-Agent: Mozilla/4.0
Accept: text/html

### RESPONSE MESSAGE
HTTP/1.1 200 OK
Server: Express
Content-Type: text/html
```html
<html>...</html> 
```