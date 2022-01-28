import { useState } from 'react';
import { addEmployeeAPI } from '../api/employeeAPI';
import { NotificationType } from '../constants';
import { IAddEmployeeData } from '../interfaces';
import { pushNotification } from '../utils';

export default function usePostEmployee() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function postEmployee(body: IAddEmployeeData) {
    setIsLoading(true);

    try {
      await addEmployeeAPI(body);
      setIsLoading(false);
      pushNotification('Add employee successfully!', NotificationType.SUCCESS);
    } catch (error) {
      setIsLoading(false);
      pushNotification('Add employee failed!', NotificationType.ERROR);
    }
  }

  return {
    isLoading,
    postEmployee,
  };
}
