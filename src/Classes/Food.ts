import { Producer } from "./Producer";

export class Food {

    private name: string;

    private category: string;

    private kilograms: number;

    private producers: Producer[] = [];

    constructor(
        name: string,
        category: string,
        kilograms: number,
        producers: Producer[] = []
    ) {
        this.name = name;
        this.category = category;
        this.kilograms = kilograms;
        this.producers = producers;
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

    public getKilograms(): number {
        return this.kilograms;
    }

    public setKilograms(kilograms: number): void {
        this.kilograms = kilograms;
    }

    public getProducers(): Producer[] {
        return this.producers;
    }

    public setProducers(producers: Producer[]): void {
        this.producers = producers;
    }
}