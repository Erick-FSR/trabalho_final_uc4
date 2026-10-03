import readlineSync from "readline-sync";
import {Registry} from "./Classes/Registry";
import {Producer} from "./Classes/Producer";
import {Institutions} from "./Classes/Institutions";
import {Food} from "./Classes/Food";
import {ComunityGardenProducer} from "./Classes/ComunityGardenProducer";
import {FamilyFarmer} from "./Classes/FamilyFarmer";
import { log } from "node:console";
import { register } from "node:module";

export const ask = require(`readline-sync`)
export const logger = console.log
export const question = ask.question

const producerRegistry = new Registry<Producer>();
const institutionRegistry = new Registry<Institutions>();
const foodRegistry = new Registry<Food>();

const fFarmer1 = new FamilyFarmer("Robert", "123.456.789-11", 500, 100);
const cGProducer1 = new ComunityGardenProducer("Alejandro", "987.654.321-12", 1000, 2000)
const fFarmer2 = new FamilyFarmer("Maria", "111.222.333-44", 300, 50);
const cGProducer2 = new ComunityGardenProducer("Carlos", "555.666.777-88", 800, 1500);
const fFarmer3 = new FamilyFarmer("Ana", "999.888.777-66", 200, 30);
const cgProducer3 = new ComunityGardenProducer("Lucia", "444.555.666-77", 600, 1000);
const institution1 = new Institutions("Food Bank", "123 Main Street", 5000);
const institution2 = new Institutions("Little Hope", "456 Elm Street", 3000);
const institution3 = new Institutions("Community Kitchen", "789 Oak Avenue", 2000);
const institution4 = new Institutions("Helping Hands", "321 Pine Road", 4000);

const rice = new Food("Rice", "Cereals", 500, fFarmer1);
const beans = new Food("Beans", "Legumes", 1000, cGProducer1);
const potatos = new Food("Potatos", "Vegetables", 300, fFarmer2);
const carots = new Food("Carrots", "Vegetables", 800, cGProducer2);
const tomato = new Food("Tomato", "Vegetables", 200, fFarmer3);
const lettuce = new Food("Lettuce", "Vegetables", 600, cgProducer3);

let choice: number

do {
    console.clear();

    logger(`===========================`);
    logger(`WELCOME TO RAIZES DA TERRA COOPERATIVE!`);
    logger(`===========================`);
    logger(`
        [1] - Register a Producer
        [2] - Register an Institution
        [3] - Register a Food
        [4] - List Producers
        [5] - List Institutions
        [6] - List Foods
        [7] - Make donation
        [0] - Exit
        `)
    choice = Number(question(`Choose an option: `));

    console.clear();

    switch (choice) {
        case 1:
            logger(`===========================`);
            logger(`REGISTER A PRODUCER`);
            logger(`===========================`);
            const producerType = question(`What type of producer you are?
                [1] - Family Farmer
                [2] - Community Garden Producer
                `);
            switch (producerType) {
                case "1":
                    const name = question(`Enter your name: `);
                    const CPF = question(`Enter your CPF: `);
                    const food = Number(question(`Enter the quantity of food produced: `));
                    const propertySize = Number(question(`Enter the size of your property (in hectares): `));
                    const familyFarmer = new FamilyFarmer(name, CPF, food, propertySize);
                    producerRegistry.addItem(familyFarmer);
                    logger(`Producer ${name} registered successfully!`);
                    break;

                case "2":
                    const name2 = question(`Enter your name: `);
                    const CPF2 = question(`Enter your CPF: `);
                    const food2 = Number(question(`Enter the quantity of food produced: `));
                    const volunteers = Number(question(`Enter the number of volunteers: `));
                    const communityGardenProducer = new ComunityGardenProducer(name2, CPF2, food2, volunteers);
                    producerRegistry.addItem(communityGardenProducer);
                    logger(`Producer ${name2} registered successfully!`);
                    break;
            }
            break;

        case 2:
            logger(`===========================`);
            logger(`REGISTER AN INSTITUTION`);
            logger(`===========================`);
            const institutionName = question(`Enter the name of the institution: `);
            const institutionAddress = question(`Enter the address of the institution: `);
            const institutionCapacity = Number(question(`Enter the capacity of the institution: `));
            const institution = new Institutions(institutionName, institutionAddress, institutionCapacity);
            institutionRegistry.addItem(institution);
            logger(`Institution ${institutionName} registered successfully!`);
            break;

        case 3:
            logger(`===========================`);
            logger(`REGISTER A FOOD`);
            logger(`===========================`);
            const foodName = question(`Enter the name of the food: `);
            const foodCategory = question(`Enter the category of the food: `);
            const foodQuantity = Number(question(`Enter the quantity of the food (in kg): `));
            const foodProducer = question(`Enter the name of the producer: `);
            const food = new Food(foodName, foodCategory, foodQuantity, foodProducer);
            foodRegistry.addItem(food);
            logger(`Food ${foodName} registered successfully!`);
            break;

        case 4:
            logger(`===========================`);
            logger(`LIST PRODUCERS`);
            logger(`===========================`);
            producerRegistry.listItems();
            break;

        case 5:
            logger(`===========================`);
            logger(`LIST INSTITUTIONS`);
            logger(`===========================`);
            institutionRegistry.listItems();
            break;

        case 6:
            logger(`===========================`);
            logger(`LIST FOODS`);
            logger(`===========================`);
            foodRegistry.listItems();
            break;
    }


} while (choice !== 0)

