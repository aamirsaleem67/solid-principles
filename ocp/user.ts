export class User {
    id: number;
    name: string;
    email: string;
    countryCode: string;

    constructor(id: number, name: string, email: string, countryCode: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.countryCode = countryCode;
    }
}