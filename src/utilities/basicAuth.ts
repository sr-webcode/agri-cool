const SESSION_KEY = 'app_session';

export type Account = {
  email: string;
  password: string;
};

/**
 * Log in ANY email/password
 */
export function login({ email, password }: Account) {
  const user = {
    id: crypto.randomUUID(),
    email,
    password, // just stored for demo
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
}

/**
 * Logout
 */
export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

/**
 * Get current user
 */
export function getUser() {
  const data = localStorage.getItem(SESSION_KEY);
  return data ? JSON.parse(data) : null;
}

/**
 * Check auth
 */
export function isAuthenticated() {
  return getUser() !== null;
}
