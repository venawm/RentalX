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
    });

}
async function addCar (req,res){
  const carData = req.body
  console.log(carData)
  
  // Inserting the data into the "cars" table
  pool.query(
    'INSERT INTO cars(name, year, engine, price, description, mileage, top_speed, is_rented, created_at, updated_at, url) VALUES($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW(), $9)',
    [
      carData.carName,
      carData.year,
      carData.engine,
      0, // Setting the initial price as 0
      carData.description,
      carData.mileage,
      carData.topSpeed,
      false, // Initially not rented
      carData.imageUrl,
    ],
    (error, results) => {
      if (error) {
        console.error(error);
        // Return an error response to the client
      } else {
        // Return a success response to the client
      }
    }
  );

}

module.exports={carsGetter,addCar};