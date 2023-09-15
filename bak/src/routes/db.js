import cliente from 'pg';

const { Pool } = cliente ;

const pool = new Pool ({

    user:'postgres',
    host:'localhost',
    database:'clase',
    password:'Gato2809',
    port: 5050

});

export {

    pool

};