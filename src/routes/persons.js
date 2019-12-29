import { Router } from 'express'
const router = Router()

import { createPerson } from '../controllers/person.controller'

// api/persons/
router.post('/', createPerson)
export default router;