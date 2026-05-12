import { create } from 'zustand';
import type { User } from '../types/auth.types';

// Ojo Eze, por ahora simulamos la base de datos de usuarios hasta que Mati termine la API
const MOCK_USERS: Record<string, User> = {
  'eze@test.com': { id: '1', name: 'Ezequiel', email: 'eze@test.com' },
  'edgar@test.com': { id: '2', name: 'Edgar', email: 'edgar@test.com' },
};

// 1. Definimos QUÉ vamos a guardar en nuestro estado global (Estado + Funciones)
interface AuthState {
  user: User | null; // Guardamos el usuario logueado (si es null, no hay nadie)
  isAuth: boolean;   // Un booleano rápido para saber si está logueado
  login: (email: string) => boolean; // Función para intentar entrar
  logout: () => void;                // Función para salir
}

// 2. Creamos el Store (la caja donde guardamos los datos)
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuth: false,

  // Cuando alguien quiere entrar, ejecutamos esta función
  login: (email: string) => {
    const foundUser = MOCK_USERS[email];
    
    if (foundUser) {
      // Si el email existe, usamos "set" para actualizar el estado global
      set({ 
        user: foundUser, 
        isAuth: true 
      });
      return true; // Pudo loguearse
    }
    
    return false; // El mail no existe
  },

  // Cuando quiere salir, limpiamos la caja
  logout: () => {
    set({ 
      user: null, 
      isAuth: false 
    });
  }
}));
