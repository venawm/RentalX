const pool = require('../db')

async function carsGetter (req,res){
  if(req.query.searchtext){
    const searchTerm = req.query.searchtext;
    const querys = 'SELECT * FROM cars WHERE is_rented = false AND name LIKE $1';
    // use the pool to query the database
     pool.query(querys, [`%${searchTerm}%`], (error, results) => {
      if (error) {
        throw error;
      }
      // send the response with the fetched data
      res.status(200).json(results.rows);
    });
  }
  else{

  const querys = 'SELECT * FROM cars WHERE is_rented = false';
    // use the pool to query the database
    await pool.query(querys, (error, results) => {
      if (error) {
        throw error;
      }
      // send the response with the fetched data
      res.status(200).json(results.rows);
    });
  }

}
async function addCar (req,res){
  const carData = req.body
  // Inserting the data into the "cars" table
  pool.query(
    'INSERT INTO cars(name, year, engine, price, description, mileage, top_speed, is_rented, created_at, updated_at, url) VALUES($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW(), $9)',
    [
      carData.carName,
      carData.year,
      carData.engine,
      carData.price, // Setting the initial price as 0
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

async function rentCars (req,res){
  const data = req.body;
  const rentalQuery = 'INSERT INTO rentals (car_id, user_id, start_date, end_date) VALUES ($1, $2, $3, $4)';
  const carUpdateQuery = 'UPDATE cars SET is_rented = true WHERE car_id = $1';
  
  const values = [data.carId, data.userId, data.startDate, data.endDate];

  pool.query(rentalQuery, values, (rentalError, rentalResult) => {
    if (rentalError) {
      console.error(rentalError);
      res.status(500).send('Error inserting data into the database');
    } else {
      pool.query(carUpdateQuery, [data.carId], (carError, carResult) => {
        if (carError) {
          console.error(carError);
          res.status(500).send('Error updating car data in the database');
        } else {
          res.status(200).send('Data inserted and car data updated successfully');
        }
      });
    }
  });
}


module.exports={carsGetter,addCar,rentCars};