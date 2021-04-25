import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log("Server is running on port 3333"));

/*
TIPOS DE MÉTODOS PARA CRIAR ROTAS:
* GET = Buscas;
* POST = Criação;
* PUT = Alteração;
* DELETE = Deletar;
* PATCH = Alterar uma informação específica. Por exemplo, mudar a senha de um usuário x


app.get("/", (request, response) => {
    //return response.send("Olá, NLW 05!");
    return response.json({
        message: "Olá, NLW 05!"
    });
});

// Podemos colocar a mesma rota porque estamos usando metódos diferentes.
// Por padrão os navegadores sempre irão fazer requisições get, para usar o metódo post utilizamos o insomnia;
app.post("/", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso!" })
})
app.listen(3333, () => console.log("Server is running on port 3333"));
*/