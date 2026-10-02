export abstract class Producer {

    private name: string;
    private CPF: string;
    private food: number;

    constructor(name: string, CPF: string, food: number) {
        this.name = name;
        this.CPF = CPF;
        this.food = food;
    }

    // Getter and Setter for name
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    // Getter and Setter for CPF
    public getCPF(): string {
        return this.CPF;
    }

    public setCPF(CPF: string): void {
        this.CPF = CPF;
    }

    // Getter and Setter for food
    public getFood(): number {
        return this.food;
    }

    public setFood(food: number): void {
        this.food = food;
    }

    public abstract present(): void;
}