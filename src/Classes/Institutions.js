"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institutions = void 0;
class Institutions {
    constructor(name, addres, peopleServed) {
        this.name = name;
        this.addres = addres;
        this.peopleServed = peopleServed;
    }
    toString() {
        return `Name: ${this.name}, Address: ${this.addres}, People Served: ${this.peopleServed}`;
    }
    // Getter and Setter for name
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    // Getter and Setter for addres
    getAddres() {
        return this.addres;
    }
    setAddres(addres) {
        this.addres = addres;
    }
    // Getter and Setter for peopleServed
    getPeopleServed() {
        return this.peopleServed;
    }
    setPeopleServed(peopleServed) {
        this.peopleServed = peopleServed;
    }
}
exports.Institutions = Institutions;
