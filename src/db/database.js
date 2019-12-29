import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    'bank',
    'postgres',
    '123',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)

export default sequelize;