// Import Third-Party Dependencies
import { Request, Response } from 'express';

let generatedId = 0;

let users: User[] = [];

interface User {
    id: number;
    name: string;
    age: number;
}

export function getUsers(req: Request, res: Response) {
    res.send({ users });
    res.end();
};

export function getUser(req: Request, res: Response) {
    const resquestedUserId = Number (req.params.id);
    let userFound;

    for (const user of users) {
        if (user.id === resquestedUserId){
            userFound = user;
        }
    }

    if (!userFound) {
        throw new Error("No user found");
    }
    else {
        res.send({ userFound });
    }

    res.end();
};

export function createUser(req: Request, res: Response) {
    const id = generatedId;

    const user = {
        id: id,
        name: req.body.name,
        age: req.body.age
    }

    users.push(user);

    generatedId++;

    res.send({ id });
    res.end();

};

export function deleteUser(req: Request, res: Response) {
    let userFound;

    if (isNaN(Number(req.params.id))) {
        throw new Error("I'd must be a number")
    }

    for (let index = 0; index < users.length; index++) {
        if (users[index].id === Number(req.params.id)) {

            userFound = users[index];

            users = users.splice(index, 1);
            
            continue;
        }
    }

    res.end();
};

