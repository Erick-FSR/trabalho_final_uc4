import { Producer } from "./Producer";
import { logger } from "../main";

export class ComunityGardenProducer extends Producer {
    private producers: Producer[] = [];
    private Volunteers: number;

    constructor(
        name: string,
        CPF: string,
        food: number,
        Volunteers: number
    ) {
        super(name, CPF, food);
        this.Volunteers = Volunteers;
    }

    public getVolunteers(): number {
        return this.Volunteers;
    }

    public setVolunteers(Volunteers: number): void {
        this.Volunteers = Volunteers;
    }

    public present(): void{
        logger(`===========================`);
        logger(`INFORMATION FROM PRODUCER ${this.getName}`)
        logger(`===========================`);
        logger(`
            Name: ${this.getName}
            CPF: ${this.getCPF}
            Quantity of food produced: ${this.getFood}
            `);
    }


}