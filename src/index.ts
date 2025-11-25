import express, { Request, Response } from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

interface Product {
  id: string;
  name: string;
  price: number;
}

const products: Product[] = [];

app.get('/products', (req: Request, res: Response) => {
  return res.json(products);
});

app.post('/products', (req: Request, res: Response) => {
  const { name, price } = req.body;
  
  if (!name || !price) {
    return res.status(400).json({ error: 'Nome e preço são obrigatórios' });
  }

  const newProduct: Product = { 
    id: uuidv4(), 
    name, 
    price: Number(price) 
  };
  
  products.push(newProduct);
  return res.status(201).json(newProduct);
});

app.put('/products/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex < 0) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  const updatedProduct: Product = { 
    id: id,
    name: name, 
    price: Number(price) 
  };

  products[productIndex] = updatedProduct;
  return res.json(updatedProduct);
});

app.delete('/products/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex < 0) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  products.splice(productIndex, 1);
  return res.status(204).send();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});