import express from 'express';
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import services from './services';

const app = express();

const ROOT = path.join(__dirname, '../../');

app.use(compression());

app.use(cors());

app.use('/', express.static(path.join(ROOT, 'dist/client')));

app.use('/uploads', express.static(path.join(ROOT, 'uploads')));

app.use(helmet());

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "*.amazonaws.com"]
  }
}));

app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

for (const name in services) {
  if (name === 'graphql') {
    (async () => {
      await services[name].start();
      await services[name].applyMiddleware({ app });
    })();
  } else {
    app.use(`/${name}`, services[name]);
  }
}

app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT, '/dist/client/index.html'));
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});