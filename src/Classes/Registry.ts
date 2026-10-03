import {logger} from "../main";
import {Producer} from "./Producer";
import {Institutions} from "./Institutions";
import {Food} from "./Food";


export class Registry<T> {
    private items: T[] = [];
   

    public addItem(item: T): void{
        this.items.push(item);
    }

    public listItems(): void {
        for (const [index, item] of this.items.entries()) {
            logger(`[${index + 1}] ${item}`);
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