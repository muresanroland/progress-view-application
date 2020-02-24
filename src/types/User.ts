export default interface User {
  id?: number;
  username: string;
  avatar: string;
}

export const checkUserType = (object: any): object is User => {
  return 'username' in object && 'avatar' in object;
};
