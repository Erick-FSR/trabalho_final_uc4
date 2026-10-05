"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.question = exports.logger = exports.ask = void 0;
const Registry_1 = require("./Classes/Registry");
const Institutions_1 = require("./Classes/Institutions");
const Food_1 = require("./Classes/Food");
const ComunityGardenProducer_1 = require("./Classes/ComunityGardenProducer");
const FamilyFarmer_1 = require("./Classes/FamilyFarmer");
exports.ask = require(`readline-sync`);
exports.logger = console.log;
exports.question = exports.ask.question;
const producerRegistry = new Registry_1.Registry();
const institutionRegistry = new Registry_1.Registry();
const foodRegistry = new Registry_1.Registry();
const fFarmer1 = new FamilyFarmer_1.FamilyFarmer("Robert", "123.456.789-11", 500, 100);
const cGProducer1 = new ComunityGardenProducer_1.ComunityGardenProducer("Alejandro", "987.654.321-12", 1000, 2000);
const fFarmer2 = new FamilyFarmer_1.FamilyFarmer("Maria", "111.222.333-44", 300, 50);
const cGProducer2 = new ComunityGardenProducer_1.ComunityGardenProducer("Carlos", "555.666.777-88", 800, 1500);
const fFarmer3 = new FamilyFarmer_1.FamilyFarmer("Ana", "999.888.777-66", 200, 30);
const cgProducer3 = new ComunityGardenProducer_1.ComunityGardenProducer("Lucia", "444.555.666-77", 600, 1000);
const institution1 = new Institutions_1.Institutions("Food Bank", "123 Main Street", 5000);
const institution2 = new Institutions_1.Institutions("Little Hope", "456 Elm Street", 3000);
const institution3 = new Institutions_1.Institutions("Community Kitchen", "789 Oak Avenue", 2000);
const institution4 = new Institutions_1.Institutions("Helping Hands", "321 Pine Road", 4000);
const rice = new Food_1.Food("Rice", "Cereals", 500, fFarmer1);
const beans = new Food_1.Food("Beans", "Legumes", 1000, cGProducer1);
const potatos = new Food_1.Food("Potatos", "Vegetables", 300, fFarmer2);
const carots = new Food_1.Food("Carrots", "Vegetables", 800, cGProducer2);
const tomato = new Food_1.Food("Tomato", "Vegetables", 200, fFarmer3);
const lettuce = new Food_1.Food("Lettuce", "Vegetables", 600, cgProducer3);
let choice;
do {
    console.clear();
    (0, exports.logger)(`===========================`);
    (0, exports.logger)(`WELCOME TO RAIZES DA TERRA COOPERATIVE!`);
    (0, exports.logger)(`===========================`);
    (0, exports.logger)(`
        [1] - Register a Producer
        [2] - Register an Institution
        [3] - Register a Food
        [4] - List Producers
        [5] - List Institutions
        [6] - List Foods
        [7] - Make donation
        [0] - Exit
        `);
    choice = Number((0, exports.question)(`Choose an option: `));
    console.clear();
    switch (choice) {
        case 1:
            (0, exports.logger)(`===========================`);
            (0, exports.logger)(`REGISTER A PRODUCER`);
            (0, exports.logger)(`===========================`);
            const producerType = (0, exports.question)(`What type of producer you are?
                [1] - Family Farmer
                [2] - Community Garden Producer
                `);
            switch (producerType) {
                case "1":
                    console.clear();
                    (0, exports.logger)(`===========================`);
                    (0, exports.logger)(`REGISTER A FAMILY FARMER`);
                    (0, exports.logger)(`===========================`);
                    const name = (0, exports.question)(`Enter your name: `);
                    const CPF = (0, exports.question)(`Enter your CPF: `);
                    const food = Number((0, exports.question)(`Enter the quantity of food produced: `));
                    const propertySize = Number((0, exports.question)(`Enter the size of your property (in hectares): `));
                    const familyFarmer = new FamilyFarmer_1.FamilyFarmer(name, CPF, food, propertySize);
                    producerRegistry.addItem(familyFarmer);
                    (0, exports.logger)(`Producer ${name} registered successfully!`);
                    (0, exports.question)(`Press ENTER to continue...`);
                    break;
                case "2":
                    console.clear();
                    (0, exports.logger)(`===========================`);
                    (0, exports.logger)(`REGISTER A COMMUNITY GARDEN PRODUCER`);
                    (0, exports.logger)(`===========================`);
                    const name2 = (0, exports.question)(`Enter your name: `);
                    const CPF2 = (0, exports.question)(`Enter your CPF: `);
                    const food2 = Number((0, exports.question)(`Enter the quantity of food produced: `));
                    const volunteers = Number((0, exports.question)(`Enter the number of volunteers: `));
                    const communityGardenProducer = new ComunityGardenProducer_1.ComunityGardenProducer(name2, CPF2, food2, volunteers);
                    producerRegistry.addItem(communityGardenProducer);
                    (0, exports.logger)(`Producer ${name2} registered successfully!`);
                    (0, exports.question)(`Press ENTER to continue...`);
                    break;
            }
            break;
        case 2:
            console.clear();
            (0, exports.logger)(`===========================`);
            (0, exports.logger)(`REGISTER AN INSTITUTION`);
            (0, exports.logger)(`===========================`);
            const institutionName = (0, exports.question)(`Enter the name of the institution: `);
            const institutionAddress = (0, exports.question)(`Enter the address of the institution: `);
            const institutionCapacity = Number((0, exports.question)(`Enter the capacity of the institution: `));
            const institution = new Institutions_1.Institutions(institutionName, institutionAddress, institutionCapacity);
            institutionRegistry.addItem(institution);
            (0, exports.logger)(`Institution ${institutionName} registered successfully!`);
            (0, exports.question)(`Press ENTER to continue...`);
            break;
        case 3:
            console.clear();
            (0, exports.logger)(`===========================`);
            (0, exports.logger)(`REGISTER A FOOD`);
            (0, exports.logger)(`===========================`);
            const foodName = (0, exports.question)(`Enter the name of the food: `);
            const foodCategory = (0, exports.question)(`Enter the category of the food: `);
            const foodQuantity = Number((0, exports.question)(`Enter the quantity of the food (in kg): `));
            const foodProducer = (0, exports.question)(`Enter the name of the producer: `);
            const food = new Food_1.Food(foodName, foodCategory, foodQuantity, foodProducer);
            foodRegistry.addItem(food);
            (0, exports.logger)(`Food ${foodName} registered successfully!`);
            (0, exports.question)(`Press ENTER to continue...`);
            break;
        case 4:
            console.clear();
            (0, exports.logger)(`===========================`);
            (0, exports.logger)(`LIST PRODUCERS`);
            (0, exports.logger)(`===========================`);
            producerRegistry.listItems();
            (0, exports.question)(`Press ENTER to continue...`);
            break;
        case 5:
            console.clear();
            (0, exports.logger)(`===========================`);
            (0, exports.logger)(`LIST INSTITUTIONS`);
            (0, exports.logger)(`===========================`);
            institutionRegistry.listItems();
            (0, exports.question)(`Press ENTER to continue...`);
            break;
        case 6:
            console.clear();
            (0, exports.logger)(`===========================`);
            (0, exports.logger)(`LIST FOODS`);
            (0, exports.logger)(`===========================`);
            foodRegistry.listItems();
            (0, exports.question)(`Press ENTER to continue...`);
            break;
        case 7:
            console.clear();
            (0, exports.logger)(`===========================`);
            (0, exports.logger)(`MAKE DONATION`);
            (0, exports.logger)(`===========================`);
            const donationFoodName = (0, exports.question)(`Enter the name of the food to donate: `);
            const donationQuantity = Number((0, exports.question)(`Enter the quantity to donate (in kg): `));
            const donationInstitutionName = (0, exports.question)(`Enter the name of the institution to donate to: `);
            try {
                const donationFood = foodRegistry.findByName(foodRegistry['items'], donationFoodName);
                const donationInstitution = institutionRegistry.findByName(institutionRegistry['items'], donationInstitutionName);
            }
            catch (error) {
                if (error instanceof Error) {
                    (0, exports.logger)(`Error: ${error.message}`);
                    (0, exports.question)(`Press ENTER to continue...`);
                    break;
                }
            }
        case 0:
            (0, exports.logger)(`Exiting the program...`);
            break;
    }
} while (choice !== 0);
