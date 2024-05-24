import express from 'express';
import { JSONFilePreset } from 'lowdb/node';
import { nanoid } from 'nanoid';

const app = express();
const port = 3000;
const staticToken = 'static-token';

const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === staticToken) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
};

app.use(express.json());

// Lowdb config and start
const defaultData = { products: [], users: [] };
const db = await JSONFilePreset('db.json', defaultData)

async function initDb() {
    await db.read();
    db.data = db.data || defaultData;
    await db.write();
}

await initDb();

// auth req
app.post('/auth', (req, res) => {
    const { username, password } = req.body;
    //TODO Validation
    if (username && password) {
      res.json({ token: staticToken });
    } else {
      res.status(400).json({ message: 'Invalid username or password' });
    }
});

// get product list
app.get('/products', async (req, res) => {
  await db.read();
  res.json(db.data.products);
});

// add product
app.post('/products', async (req, res) => {
  var product = { id: nanoid(), ...req.body };
  db.data.products.push(product);
  await db.write();
  res.status(201).json(product);
});

// get product details
app.get('/products/:id', async (req, res) => {
    const productId = req.params.id;
    await db.read();
    const product = db.data.products.find(p => p.id === productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
});

// Inserção de usuários
app.post('/users', async (req, res) => {
    const user = { id: nanoid(), ...req.body };
    db.data.users.push(user);
    await db.write();
    res.status(201).json(user);
});

// server start
app.listen(port, () => {
  console.log(`Server runing: http://localhost:${port}`);
});