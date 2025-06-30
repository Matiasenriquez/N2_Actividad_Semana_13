import { createPool } from 'mysql2/promise';

 const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'clinica',
    password: 'admin123',
    waitForConnections: true
});

export default pool;