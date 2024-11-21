import { create } from 'zustand';
import { type Notification } from './types';

interface AppState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showProfile: boolean;
  setShowProfile: (show: boolean) => void;
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markNotificationAsRead: (id: string) => void;
  showNotifications: boolean;
  setShowNotifications: (show: boolean) => void;
  bookmarks: string[];
  toggleBookmark: (serviceId: string) => void;
  showChat: boolean;
  setShowChat: (show: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  showProfile: false,
  setShowProfile: (show) => set({ showProfile: show }),
  notifications: [],
  showNotifications: false,
  setShowNotifications: (show) => set({ showNotifications: show }),
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        {
          ...notification,
          id: Math.random().toString(36).substring(7),
          timestamp: new Date(),
          read: false,
        },
        ...state.notifications,
      ],
    })),
  markNotificationAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),
  bookmarks: [],
  toggleBookmark: (serviceId) =>
    set((state) => ({
      bookmarks: state.bookmarks.includes(serviceId)
        ? state.bookmarks.filter((id) => id !== serviceId)
        : [...state.bookmarks, serviceId],
    })),
  showChat: false,
  setShowChat: (show) => set({ showChat: show }),
}));