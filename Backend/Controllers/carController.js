const pool = require('../db')

async function carsGetter (req,res){
    const query = 'SELECT * FROM cars';
    // use the pool to query the database
    await pool.query(query, (error, results) => {
      if (error) {
        throw error;
      }
      // send the response with the fetched data
      res.status(200).json(results.rows);
      console.log(json(results.rows))
    });

}

module.exports={carsGetter};