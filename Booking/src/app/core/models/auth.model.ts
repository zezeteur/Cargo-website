export interface User {
  id?: string | number
  userName?: string
  password?: string
  name?: string
  firstName?: string
  lastName?: string
  email?: string
  avatar?: string
  role?: 'admin' | 'user'
  token?: string
}
