# Methods

* Methods
    * OPTIONS
        - informação sobre disponibilidades da requisição
            - OPTIONS / index.html HTTP/1.1
            OPTIONS * HTTP/1.1
        - Características
            - Seguro: SIM
            - Idempotente: SIM
            - BODY
                - Request: NÂO
                - Response: NÂO
            Uso em formulários HTML: NÂO
            - Cacheable: NÂO
    * GET
        - Pegar um Recurso
        - Somente recebe dados
        - Características
            - Seguro: SIM
            - Idempotente: SIM
            - BODY
                - REQUESTE: NÃO
                - RESPONSE: NÃO
            - Cacheable: SIM
            - Uso em formulários HTML: SIM
    * HEAD
        - Semelhante ao GET, porém...
        - ...recebemos somente o cabeçalho --------> HEAD/posts
        - Características
            - Seguro: SIM
            - Idempotente: SIM
            - BODY
                - REQUESTE: NÃO
                - RESPONSE: NÃO
            - Cacheable: NÂO
            - Uso em formulários HTML: SIM
    * POST
        - Publicar/Cadastrar um Recurso
        - Características
            - Seguro: NÂO
                - Idempotente: NÂO
                - BODY
                    - REQUESTE
                    - RESPONSE
                - Uso em formulários HTML: SIM
                - Poderá ser cacheable
    * PUT
        - Cria um novo ou Atualiza um Recurso
            - PUT /profile HTTP/1.1
            - Diferença entre POST?
            - Criação ------------> Status code 201
            - Atualização -----------> Status code 204 ou 200
        - Características
            - Seguro: NÂO
            - Idempotente: NÂO
            - BODY
                - REQUESTE: NÃO
                - RESPONSE: NÃO
            - Uso em formulários HTML: Não
            - Cacheable: NÂO
    * PATCH
        - Modificação parcial de um recurso
            - Diferença entre o PUT?
            - PATCH /posts/1 HTTP/1.1
        - Características
            - Seguro: NÂO
            - Idempotente: NÂO
            - BODY
                - REQUESTE: NÃO
                - RESPONSE: NÃO
            - Uso em formulários HTML: Não
            - Cacheable: NÂO
    * DELETE
        - Removeer um Recurso
            - DELETE /post HTTP/1.1
            - Status code 
                - 202: Accepted
                - 204: No content
                - 200: Ok
        - Características
            - Seguro: NÂO
            - Idempotente: SIM
            - BODY
                - REQUESTE: POSIBLIDADE
                - RESPONSE: POSIBLIDADE
            - Uso em formulários HTML: Não
            - Cacheable: NÂO

- HTTP Methods
    - Define um conjunto de métodops HTTP
    - Indica a ação chamados de Verbos HTTP
    - Cada um possui a sua semântica
    - Características
        - Seguro
            - Não altera o estado do servidor
            - Somente leitura
            - Cliente não solicita alterações
            - Não há carga extra para o servidor
            - O servidor é responsável em manter o método seguro
            - Quais são?
                - GET ------> GET /search.html HTTP/1.1
                - HEAD
                - OPTIONS
        - Idempotente
            - Ao executar o método, a resposata deverá ser sempre a mesma
            - Quais são?
                - Todos os seguros são idempotentes
                - PUT
                - DELETE
            - Status code poderá ser diferente
            - O servidor tem a responsabilidade de retorna dados da mesma maneira
            - Essa especificação não é garantia de que todos os servidores irão aplicar o conceito corretamente