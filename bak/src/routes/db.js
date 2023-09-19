import cliente from 'pg';

const { Pool } = cliente ;

/*const pool = new Pool ({

    user:'postgres',
    host:'localhost',
    database:'clase',
    password:'Gato2809',
    port: 5050

}); */

const pool = new Pool({
    conectionString: process.env.DATABASE_URL,
    ssl: true

});

 
export {

    pool

};