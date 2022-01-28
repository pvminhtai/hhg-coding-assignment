import { AxiosPromise } from 'axios';
import { IAddEmployeeData, IGetEmployeesParams } from '../interfaces';
import axiosClient from './axiosClient';

export const getEmployeesAPI = (params?: IGetEmployeesParams): AxiosPromise =>
  axiosClient.get('/employees', params);

export const addEmployeeAPI = (data: IAddEmployeeData): AxiosPromise =>
  axiosClient.post('/employees', data);
