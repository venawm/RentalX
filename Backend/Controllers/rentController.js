const pool = require('../db')

async function rentalGetter(req,res){
  pool.query('SELECT users.username AS username,users.email as email,users.user_id as userid,cars.car_id as id,cars.name AS carname, cars.url as url,rentals.start_date AS start_date,rentals.end_date AS end_date  FROM rentals INNER JOIN cars ON rentals.car_id = cars.car_id INNER JOIN users ON rentals.user_id = users.user_id WHERE rentals.is_accepted = false;', (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  })
  
    
}
async function salesGetter(req,res){
  if(req.query.id){
    console.log(req.query.id)
    pool.query(`SELECT    users.username AS username,    users.email AS email,    users.user_id AS userid,    cars.car_id AS id,    cars.name AS carname,    cars.url AS url,    rentals.start_date AS start_date,    rentals.end_date AS end_date  FROM    rentals    INNER JOIN cars ON rentals.car_id = cars.car_id    INNER JOIN users ON rentals.user_id = users.user_id  WHERE    rentals.is_accepted = true    AND users.user_id = ${req.query.id} `, (err, result) => {
      if (err) throw err;
      res.status(200).json(result.rows);
    })
  }
  else{
  pool.query('SELECT users.username AS username,users.email as email,users.user_id as userid,cars.car_id as id,cars.name AS carname, cars.url as url,rentals.start_date AS start_date,rentals.end_date AS end_date  FROM rentals INNER JOIN cars ON rentals.car_id = cars.car_id INNER JOIN users ON rentals.user_id = users.user_id WHERE rentals.is_accepted = true;', (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  })
}
  
    
}

async function dashboard(req,res){
   pool.query(
    `SELECT 'users' as table_name, COUNT(*) as count FROM users
     UNION ALL
     SELECT 'rentals' as table_name, COUNT(*) as count FROM rentals
     UNION ALL
     SELECT 'sales' as table_name, COUNT(*) as count FROM sales`,
    (err, result) => {
      if (err) {
        console.error(err)
      } else {
        res.status(200).json(result.rows)
      }
    }
  )
  
}

async function acceptRent(req,res){   
  
  const data = req.body;
  const userId = data.userid;
  const carId = data.id;

  try {
    // Update the rental with the given userId and carId
    pool.query('UPDATE rentals SET is_accepted = true WHERE user_id = $1 AND car_id = $2',[userId, carId]);
    const query = {
      text: 'SELECT price FROM cars WHERE car_id = $1',
      values: [carId]
    };
    const price = await pool.query(query).then((data)=>{
    const prices = data.rows[0].price
    const saleDate =  new Date();


      pool.query('INSERT INTO sales (car_id, user_id, price,sale_date) VALUES ($1, $2, $3,$4)',[carId, userId, prices,saleDate])
    })

    res.status(200).json('success');
  }

  
  catch (err) {
    // If there was an error, rollback the transaction
    console.error(err);
    res.status(500).json('error');
  }
  
  
}
async function rejectRent(req,res){
  const data = req.body;
  const userId = data.userid;
  const carId = data.id;
  pool.query('DELETE FROM rentals  WHERE user_id = $1 AND car_id = $2',[userId, carId]);
  const query = {
    text: 'UPDATE cars SET is_rented = false WHERE car_id = $1',
    values: [carId]
  };
    await pool.query(query)
  res.status(200).json('success');
 
}

async function deleteCars(req,res){
  const data = req.body;
  try{
  const query = {
    text: 'Delete FROM cars  WHERE car_id = $1',
    values: [data.id]
  };
    await pool.query(query)
  res.status(200).json(data)
}
catch(err){
  res.status(501).json('server error')
}
}

module.exports={rentalGetter,dashboard,acceptRent,rejectRent,deleteCars,salesGetter};
