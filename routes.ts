import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);


routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };


/*
* Tipos de Parametros:

* Routes Params => Parametros de Rotas
* http://localhost:3333/settings/1 => settings: nome do recurso. 1: id. Parametros que vem na própria rota.

* Query Params => Filtros e buscas
* http://localhost:3333/settings/1?search=algumacoisa => Vem depois da rota. Pode-se passar vários parametros usando o &

* Body Params (Os parametros que vem no corpo da requisição) => {
    Passa-se objetos dentro das requisições. JSON
}
*/