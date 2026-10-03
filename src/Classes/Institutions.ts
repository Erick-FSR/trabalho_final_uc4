import { logger } from "../main";

export class Institutions {

    private name: string;
    private addres: string;
    private peopleServed: number;

    constructor(name: string, addres: string, peopleServed: number) {
        this.name = name;
        this.addres = addres;
        this.peopleServed = peopleServed;
    }

    // Getter and Setter for name
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    // Getter and Setter for addres
    public getAddres(): string {
        return this.addres;
    }

    public setAddres(addres: string): void {
        this.addres = addres;
    }

    // Getter and Setter for peopleServed
    public getPeopleServed(): number {
        return this.peopleServed;
    }

    public setPeopleServed(peopleServed: number): void {
        this.peopleServed = peopleServed;
    }
}