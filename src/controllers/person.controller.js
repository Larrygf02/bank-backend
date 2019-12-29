import Persons from '../models/persons'

export async function createPerson(req, res) {
    const { name, surname, dni, birth_date } = req.body
    try {
        let newPerson = await Persons.create({
            name,
            surname,
            dni,
            birth_date
        }, {
            fields: ['name', 'surname', 'dni', 'birth_date']
        })
    
        if (newPerson) {
            res.json({
                message: 'Created Successfully',
                data: newPerson
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}