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

export interface Idea {
  id: string;
  name?: string;
  leanCanvas: {
    name?: string;
    problem?: string;
    customer?: string;
    solution?: string;
    uvp?: string;
    revenue?: string;
    channels?: string;
    keyMetrics?: string;
    costs?: string;
    unfairAdvantage?: string;
  };
}
