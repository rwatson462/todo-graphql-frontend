
export type RegisterForm = {
  name: String
  email: String;
  password: String;
}

export type LoginForm = {
  email: String;
  password: String;
}

export type User = {
  id: string
  name: string
  email: string
}
