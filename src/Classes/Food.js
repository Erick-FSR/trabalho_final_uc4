"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const main_1 = require("../main");
class Food {
    constructor(name, category, quantity, producers) {
        this.producers = [];
        this.name = name;
        this.category = category;
        this.quantity = quantity;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCategory() {
        return this.category;
    }
    setCategory(category) {
        this.category = category;
    }
    getquantity() {
        return this.quantity;
    }
    setquantity(quantity) {
        this.quantity = quantity;
    }
    getProducers() {
        this.producers;
    }
    setProducers(producers) {
        this.producers.push(producers);
    }
    addQuantity(amount) {
        this.quantity += amount;
    }
    removeQuantity(amount) {
        if (amount < 0) {
            throw new Error("Invalid quantity to remove.");
        }
        this.quantity -= amount;
    }
    showQuantity() {
        (0, main_1.logger)(`===========================`);
        (0, main_1.logger)(`INFORMATION FROM FOOD ${this.getName}`);
        (0, main_1.logger)(`===========================`);
        (0, main_1.logger)(`
            Name: ${this.getName}
            Category: ${this.getCategory}
            Quantity: ${this.getquantity}
            `);
    }
    toString() {
        return `Name: ${this.name}, Category: ${this.category}, Quantity: ${this.quantity}`;
    }
    donate(quantity) {
        if (quantity <= 0) {
            throw new Error("Invalid quantity to donate.");
        }
    }
}
exports.Food = Food;
