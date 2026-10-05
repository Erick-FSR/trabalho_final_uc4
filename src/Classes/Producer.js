"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producer = void 0;
class Producer {
    constructor(name, CPF, food) {
        this.name = name;
        this.CPF = CPF;
        this.food = food;
    }
    toString() {
        return `Name: ${this.name}, CPF: ${this.CPF}, Food: ${this.food}`;
    }
    // Getter and Setter for name
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    // Getter and Setter for CPF
    getCPF() {
        return this.CPF;
    }
    setCPF(CPF) {
        this.CPF = CPF;
    }
    // Getter and Setter for food
    getFood() {
        return this.food;
    }
    setFood(food) {
        this.food = food;
    }
}
exports.Producer = Producer;
