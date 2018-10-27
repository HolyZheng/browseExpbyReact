declare module 'react-router-dom';
declare module 'fastclick';

interface User {
  name: string;
  picture: string;
  user_id: number;
}
interface Exp {
  experiment_id: number;
  publisher_id: number;
  publisher_name: string;
  title: string;
  type: string;
  duration: string;
  pay: string;
  position: string;
  request: string;
  period: string;
  others: string;
  time: Date;
  application: string;
  content: string;
  user: User;
}
