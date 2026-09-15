import {Pool} from 'pg'
import 'dotenv/config'

export const pool = new Pool()

pool.on('error', (err,cliente) => {
    console.error ('Unexpected error on idle client', err)
    process.exit(-1)
})