"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunityGardenProducer = void 0;
const Producer_1 = require("./Producer");
const main_1 = require("../main");
class ComunityGardenProducer extends Producer_1.Producer {
    constructor(name, CPF, food, Volunteers) {
        super(name, CPF, food);
        this.producers = [];
        this.Volunteers = Volunteers;
    }
    getVolunteers() {
        return this.Volunteers;
    }
    setVolunteers(Volunteers) {
        this.Volunteers = Volunteers;
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
exports.ComunityGardenProducer = ComunityGardenProducer;
