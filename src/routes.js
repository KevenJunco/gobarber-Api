import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'biziga da Silva',
    email: 'asdasd@fasfsad.com.br',
    password_hash: 'dadsad',
  });

  return res.json(user);
});

export default routes;
