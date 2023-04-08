const pool = require('../db');

async function signup(req, res) {
  const formData = req.body;

  // Check if user with same email or username already exists
  const checkUser = async (userData) => {
    const { username, email } = userData;
    try {
      const client = await pool.connect();
      const query = `
        SELECT * FROM users WHERE email = $1 OR username = $2
      `;
      const values = [email, username];
      const result = await client.query(query, values);
      client.release();
      return result.rows[0];
    } catch (err) {
      console.error(err);
    }
  };

  const existingUser = await checkUser(formData);

  if (existingUser) {
    res.status(400).json({ message: 'User already exists' });
  } else {
    // Insert new user
    const addUser = async (userData) => {
      const { username, email, password, number } = userData;
      try {
        const client = await pool.connect();
        const query = `
          INSERT INTO users (username, email, password, number, created_at)
          VALUES ($1, $2, crypt($3, gen_salt('bf')), $4, NOW())
          RETURNING *
        `;
        const values = [username, email, password, number];
        const result = await client.query(query, values);
        console.log(result.rows[0]); // print the newly added user
        client.release(); // release the client back to the pool
        res.status(201).json({ message: 'User created successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
    };

    addUser(formData);
  }
}
async function login(req, res) {
  res.status(200).json({ message: 'hello' });
}


module.exports = { signup,login };
