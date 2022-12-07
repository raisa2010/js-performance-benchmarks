import  { suite, add, cycle, save, complete } from 'benny'
import { randomBytes } from 'crypto'
import { nanoid } from 'nanoid'

suite(
    'Unique ID Generator',

    add('Use NanoID', () => {
        ;const id = nanoid(10)
    }),

    add('Use Crypto', () => {
        ;const id = randomBytes(10).toString('hex')
    }),

    cycle(),
    complete(),
    save({ file: 'unique_id', version: '1.0.0' }),
    save({ file: 'unique_id', format: 'chart.html' }),
)