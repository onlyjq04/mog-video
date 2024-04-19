import { app } from 'electron'
import path from 'path'
import Sqlite3 from 'sqlite3'

const sqlite3 = Sqlite3.verbose()
const dbPath = path.join(app.getPath('userData'), 'data.db')

const db = new sqlite3.Database(dbPath)

db.serialize(function () {
    db.run('CREATE TABLE if not exists user_data (info TEXT)')

    var stmt = db.prepare('INSERT INTO user_data VALUES (?)')
    for (let i = 0; i < 10; i++) {
        stmt.run('Data ' + i)
    }
    stmt.finalize()

    db.each('SELECT rowid AS id, info FROM user_data', function (err, row) {
        console.log(row.id + ': ' + row.info)
    })
})

db.close()

export default db
