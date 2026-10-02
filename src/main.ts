import readlineSync from "readline-sync";
import {Registry} from "./Classes/Registry";
import {Producer} from "./Classes/Producer";
import {Institutions} from "./Classes/Institutions";
import {Food} from "./Classes/Food";
import {ComunityGardenProducer} from "./Classes/ComunityGardenProducer";
import {FamilyFarmer} from "./Classes/FamilyFarmer";

export const ask = require(`readline-sync`)
export const logger = console.log
export const question = ask.question


const producerRegistry = new Registry<FamilyFarmer>("Robert", "123.456.789-00", 100, 50);