// import res from 'express/lib/response';
import pkg from 'pg';
const { Pool }=pkg;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydatabase',
    password: '123456',
    port: 5432,
    max:20
});
export default pool;
// client.connect();
// const query = `
// select * from users;
// `;
// export const f2 = async () =>
// {
//     try {
          
//           const res =   await client.query(query);
//           console.log('select query is executed');
//           console.log(res.rows);
//           client.end();
//           return res.rows;
          
//       } catch (err) {
//           console.log(err.stack);
//           client.end();
//       } 
// }
