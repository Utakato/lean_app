export interface SignUpData {
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface SignUpReturnDTO {
  email: string;
  uid: string;
}

export interface LoginReturnDTO {
  email: string;
  uid: string;
}
