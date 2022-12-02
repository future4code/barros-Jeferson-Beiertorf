###Exercício 1

<!-- a)Explique o que é uma chave estrangeira -->
é o campo que estabelece o relacionamento entre duas tabelas

<!-- b)Crie a tabela e, ao menos, uma avaliação para cada um dos filmes -->

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
)

<!-- c)Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query. -->
INSERT INTO Rating  (id, comment, rate, movie_id) 
VALUES (
        "001",
    "Muito bom!",
    7,
        "004"
);

INSERT INTO Rating  (id, comment, rate, movie_id) 
VALUES (
        "002",
    "Excelente!",
    9,
        "001"
);

INSERT INTO Rating  (id, comment, rate, movie_id) 
VALUES (
        "003",
    "Excelente!",
    10,
        "003"
);

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails CONSTRAINT Rating_ibfk_1 FOREIGN KEY (movie_id) REFERENCES Movies (id)) -- Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira 

<!-- d)Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.  -->
ALTER TABLE  Movies DROP COLUMN  rating;

<!-- e)Tente apagar um filme que possua avaliações. Anote e explique o resultado da query. -->
 Code: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha