export class userDTO {
    email;
    idUser;
    domain;
    phone;
    post;
    groups;

    constructor(model) {
        this.email = model.email;
        this.domain = model.domain;
        this.idUser = model.idUser;
        this.post = model.post;
        this.email = model.email;
        this.groups = model.groups;
    }
}