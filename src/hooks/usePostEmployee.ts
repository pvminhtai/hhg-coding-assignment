import { useCallback, useState } from 'react';
import { addEmployeeAPI } from '../api/employeeAPI';
import { NotificationType } from '../constants';
import { IAddEmployeeData } from '../interfaces';
import { pushNotification } from '../utils';

interface IUsePostEmployee {
  isLoading: boolean;
  postEmployee: (body: IAddEmployeeData) => Promise<void>;
}

export default function usePostEmployee(): IUsePostEmployee {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postEmployee = useCallback(async (body: IAddEmployeeData) => {
    setIsLoading(true);

    try {
      await addEmployeeAPI(body);
      pushNotification('Add employee successfully!', NotificationType.SUCCESS);
    } catch (error) {
      pushNotification('Add employee fail!', NotificationType.ERROR);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    postEmployee,
  };
}
