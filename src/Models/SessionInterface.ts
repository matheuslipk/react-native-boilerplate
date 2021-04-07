export interface SessionInterface {
  token: string;
  logged: boolean;
  user: {
    id: number;
    name: string;
    phone: string;
    token: string;
  };
}
