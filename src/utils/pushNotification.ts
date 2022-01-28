import { toaster } from 'evergreen-ui';

export default function pushNotification(message: string, type: string): void {
  (toaster as any)[type](message, { duration: 1 });
}
