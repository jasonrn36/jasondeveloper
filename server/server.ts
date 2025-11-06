import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts'; // rotas das postagens

// Area das constantes
const app = express();
app.use(cors());
app.use(express.json());


