import {logger} from "../main";
import {Producer} from "./Producer";
import {Institutions} from "./Institutions";
import {Food} from "./Food";


export class Registry<T> {
    private food: Food[] = [];
    private producers: Producer[] = [];
    private institutions: Institutions[] = [];

    public addFood(food: Food): void {
        this.food.push(food);
    }

    public addProducer(producer: Producer): void {
        this.producers.push(producer);
    }

    public addInstitution(institution: Institutions): void {
        this.institutions.push(institution);
    }

    /*public listFood(): void {
        for (const food of this.food) {
            logger(`===========================`);
            logger(`INFORMATION FROM FOOD ${food.getName()}`)
            logger(`===========================`);
            logger(`
                Name: ${food.getName()}
                Category: ${food.getCategory()}
                Quantity: ${food.getquantity()}
                `);
        }
    }

    public listProducers(): void {
        for (const producer of this.producers) {
            logger(`===========================`);
            logger(`INFORMATION FROM PRODUCER ${producer.getName()}`)
            logger(`===========================`);
            logger(`
                Name: ${producer.getName()}
                CPF: ${producer.getCPF()}
                Quantity of food produced: ${producer.getFood()}
                `);
        }
    }

    public listInstitutions(): void {
        for (const institution of this.institutions) {
            logger(`===========================`);
            logger(`INFORMATION FROM INSTITUTION ${institution.getName()}`)
            logger(`===========================`);
            logger(`
                Name: ${institution.getName()}
                Address: ${institution.getAddres()}
                People Served: ${institution.getPeopleServed()}
                `);
        }
    }

    public findFoodByName(name: string): Food | undefined {
        return this.food.find(food => food.getName() === name);
    }*/

    public list<T>(items: T[]): void {
        for (const item of items) {
            logger(item);
        }
    }

    public findByName<T extends { getName(): string }>(items: T[], name: string): void {
        const item = items.find(item => item.getName() === name);
        if (item) {
            logger(`The item ${name} appears in the records.`);
        } else {
            logger(`The item ${name} does not appear in the records.`);
        }
    }

}