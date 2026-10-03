import { Producer } from "./Producer";
import {logger} from "../main";
import { Donatable } from "../Interfaces/Donatable";

export class Food implements Donatable {

    private name: string;

    private category: string;

    private quantity: number;

    private producers: Producer[] = []

    constructor(
        name: string,
        category: string,
        quantity: number,
        producers: Producer
    ) {
        this.name = name;
        this.category = category;
        this.quantity = quantity;

    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getCategory(): string {
        return this.category;
    }

    public setCategory(category: string): void {
        this.category = category;
    }

    public getquantity(): number {
        return this.quantity;
    }

    public setquantity(quantity: number): void {
        this.quantity = quantity;
    }

    public getProducers(): void {
         this.producers;
    }

    public setProducers(producers: Producer): void {
        this.producers.push(producers);
    }

    public addQuantity(amount: number): void {
        this.quantity += amount;
    }

    public removeQuantity(amount: number): void {
        if (amount < 0) {
            throw new Error("Invalid quantity to remove.");
        }
        this.quantity -= amount;
    }

    public showQuantity(): void {

        logger(`===========================`);
        logger(`INFORMATION FROM FOOD ${this.getName}`)
        logger(`===========================`);
        logger(`
            Name: ${this.getName}
            Category: ${this.getCategory}
            Quantity: ${this.getquantity}
            `);
    }

    public donate(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Invalid quantity to donate.");
        }
        
    }

    
}