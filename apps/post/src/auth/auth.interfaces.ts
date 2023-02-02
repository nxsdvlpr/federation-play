export type AuthenticatedUser = {
  id: string;
  email: string;
  role: any;
};

export type JwtPayload = {
  sub: string;
  email: string;
  role: any;
};

export type UserContext = {
  req: {
    user: AuthenticatedUser;
  };
};
