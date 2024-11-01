import {createPool} from 'mysql2/promise' ;

const pool = createPool({
    host: 'localhost',
    user: 'ssjjang',
    password: 'rkflWkd091!',
    database: 'ssjang',
    port: 3106,
})


pool.getConnection()
.then((connection) => {
    console.log('Connected to MySQL database');
    connection.release();
})
.catch((err) => {
    console.error('Error connecting to MySQL database:', err);
});

const executeQuery = async (query: string) => {
    const [rows] = await pool.query(query);
    return rows;
};

export default executeQuery;