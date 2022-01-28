import { IRoute } from '../interfaces';
import { Employee, Home } from '../pages';

const routes: IRoute[] = [
  {
    name: 'Home',
    path: '/',
    isExact: true,
    component: Home,
  },
  {
    name: 'Employees',
    path: '/employees',
    component: Employee,
  },
];

export default routes;
