import Sequelize from "sequelize";
import sequelize from '../db/database';

const Persons = sequelize.define('persons', {
    id: { 
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    surname: {
        type: Sequelize.TEXT
    },
    dni: {
        type: Sequelize.TEXT
    },
    birth_date: {
        type: Sequelize.DATE
    },
    country: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
})

export default Persons

