const pool = require('../db')

async function rentalGetter(req,res){
    await pool.query('SELECT users.username AS username,      cars.name AS carname, cars.url as url,      rentals.start_date AS start_date,      rentals.end_date AS end_date  FROM      rentals      INNER JOIN cars ON rentals.car_id = cars.car_id      INNER JOIN users ON rentals.user_id = users.user_id;', (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
      })
    
}

module.exports={rentalGetter};
