export default interface ILogin {
  username: string;
  password: string;
}
export interface ILoginResponse {
  username: string;
  token: string;
}

export interface IRegisterRequest {
  firstName?:string;
  lastName?:string;
  username: string;
  password: string;
  email?: string;
  nickname?: string;
  phone?: string;
  address?:string;
  classes?:string;
  army_rank?:string;
  avatar?:string;
}
