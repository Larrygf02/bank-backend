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

export async function getPersons(req, res) {
    const persons = await Persons.findAll()
    res.json({
        data: persons
    })
}

export async function getOnePerson(req, res) {
    try {
        const { id } = req.params;
        const person = await Persons.findOne({
            where: {
                id
            }
        })
        res.json({
            data: person
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export async function deletePerson(req, res) {
    try {        
        const { id } = req.params
        const deleteRowCount = Persons.destroy({
            where: {
                id
            }
        })
        res.json({
            message: 'Project Deleted Succesfully',
            count: deleteRowCount
        })
    } catch (error) {
        res.json({
            message: 'Something was wrong'
        })
    }
}

export async function updatePerson(req, res) {
    const { id } = req.params
    const { name, surname, dni, birth_date } = req.body
    const person = await Persons.findOne({
        where: {
            id
        }
    })
    if (person) {
        person.update({
            name,
            surname,
            dni,
            birth_date
        })
        return res.json({
            data: person,
            message: 'Updated succesfully'
        })
    }else{
        return res.json({
            data: null,
            message: `Person not found with id ${id}`
        })
    }
}