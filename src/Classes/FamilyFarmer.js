"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyFarmer = void 0;
const Producer_1 = require("./Producer");
const main_1 = require("../main");
class FamilyFarmer extends Producer_1.Producer {
    constructor(name, CPF, food, propertySize) {
        super(name, CPF, food);
        this.propertySize = propertySize;
    }
    getPropertySize() {
        return this.propertySize;
    }
    setPropertySize(newPropertySize) {
        this.propertySize = newPropertySize;
    }
    present() {
        (0, main_1.logger)(`===========================`);
        (0, main_1.logger)(`INFORMATION FROM PRODUCER ${this.getName}`);
        (0, main_1.logger)(`===========================`);
        (0, main_1.logger)(`
                Name: ${this.getName}
                CPF: ${this.getCPF}
                Quantity of food produced: ${this.getFood}
                `);
    }
}
exports.FamilyFarmer = FamilyFarmer;
