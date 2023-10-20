import express from 'express';
import dotenv from 'dotenv';
import AlunoRouter from './routes/AlunoRoutes';
import AvaliacaoRouter from './routes/AvaliacaoRoutes';
import CriterioRouter from './routes/CriterioRoutes';
import EstandeRouter from './routes/EstandeRoutes';
import GrupoRouter from './routes/GrupoRoutes';
import ProfRouter from './routes/ProfRoutes';

dotenv.config({ path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env' });

const app = express();
app.use(express.json());
app.use('/api', AlunoRouter);
app.use('/api', AvaliacaoRouter);
app.use('/api', CriterioRouter);
app.use('/api', EstandeRouter);
app.use('/api', GrupoRouter);
app.use('/api', ProfRouter);

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} else {
  console.log('Fail to load environment');
}
