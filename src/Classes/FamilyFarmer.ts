import { Producer } from "./Producer";
import { logger } from "../main";

export class FamilyFarmer extends Producer {

    private propertySize: number;

    constructor(
        name: string,
        CPF: string,
        food: number,
        propertySize: number
    ) {
        super(name, CPF, food);
        this.propertySize = propertySize;
    }

    public getPropertySize(): number {
        return this.propertySize;
    }

    public setPropertySize(newPropertySize: number): void {
        this.propertySize = newPropertySize;
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