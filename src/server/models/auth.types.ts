export type UserRequest = {
  userName: string;
  userPassword: string;
  userEmail: string;
};

export type UserResponse = {
  success: boolean;
  message: string;
};
