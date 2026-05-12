import { create } from 'zustand';

interface User {
  email: string;
  nombre: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  login: (credentials: { email: string; pass: string }) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,

  login: (credentials) => {
    if (credentials.email === 'admin@admin.com' && credentials.pass === '1234') {
      set({ 
        user: { email: credentials.email, nombre: 'Administrador' }, 
        isAuthenticated: true, 
        error: null 
      });
      return true;
    } else {
      set({ error: 'Credenciales incorrectas', isAuthenticated: false });
      return false;
    }
  },

  logout: () => set({ user: null, isAuthenticated: false, error: null }),
}));