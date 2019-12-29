import { Router } from 'express'
const router = Router()

import { createPerson, getPersons ,getOnePerson, deletePerson, updatePerson } from '../controllers/person.controller'

// api/persons/
router.post('/', createPerson)
router.get('/', getPersons)
router.get('/:id', getOnePerson)
router.delete('/:id', deletePerson)
router.patch('/:id', updatePerson)

export default router;