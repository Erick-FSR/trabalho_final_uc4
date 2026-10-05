"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
const main_1 = require("../main");
class Registry {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    listItems() {
        for (const [index, item] of this.items.entries()) {
            (0, main_1.logger)(`[${index + 1}] ${item}`);
        }
    }
    findByName(items, name) {
        const item = items.find(item => item.getName() === name);
        if (!item) {
            throw new Error(`The item ${name} does not appear in the records.`);
        }
        return item;
    }
}
exports.Registry = Registry;
