import express, { request, response } from "express"; // Se tiver com três pontinhos, quer dizer que: você instalou a sua biblioteca, mas agora necessita instalar as suas tipagens. Algumas bibliotecas criam as tipagens separadas e a representação disso são os três pontinhos. Para resolver, abra o terminal e coloque: yarn add @types/express -D. -D -> porque todas as tipagens serão colocadas como dependência de desenvolvimento porque só iremos utilizar em ambiente de desenvolvimento. 
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path"; // Permite que a gente crie um arquivo para passar para o interior da aplicação;

import "./database"; // O JS reconhece que queremos importar o file index :D
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public"))); //Pedindo para acessar a pasta Public
app.set("views", path.join(__dirname, "..", "public")); // Fazendo alterações
app.engine("html", require("ejs").renderFile); // Informando que a engine que iremos usar é html, que por padrão é a .js 
app.set("view engine", "html");


app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
    return response.render("html/admin.html")
});

const http = createServer(app); // Criando protocolo HTTP
const io = new Server(http); // Criando protocolo WS

io.on("connection", (socket: Socket) => {
    // console.log("Se conectou", socket.id);
});

app.use(express.json());

app.use(routes);

export { http, io };