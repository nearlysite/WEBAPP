import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';
import { useAppStore } from '../lib/store';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '../lib/utils';

export default function NotificationPanel() {
  const { notifications, showNotifications, setShowNotifications, markNotificationAsRead } = useAppStore();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <AnimatePresence>
      {showNotifications && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={() => setShowNotifications(false)}
          />
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-purple-900 shadow-[0_0_50px_rgba(139,92,246,0.3)] backdrop-blur-sm"
          >
            <div className="p-4 border-b border-purple-800">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Notifications</h2>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="p-2 hover:bg-purple-800 rounded-full text-purple-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto h-full pb-32">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64">
                  <Bell className="h-12 w-12 text-purple-400 mb-4" />
                  <p className="text-purple-300">No notifications yet</p>
                </div>
              ) : (
                <div className="divide-y divide-purple-800">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "p-4 hover:bg-purple-800/50 cursor-pointer transition-colors",
                        !notification.read && "bg-purple-800/30"
                      )}
                      onClick={() => markNotificationAsRead(notification.id)}
                    >
                      <div className="flex justify-between">
                        <p className="font-medium text-white">{notification.title}</p>
                        <span className="text-sm text-purple-300">
                          {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                        </span>
                      </div>
                      <p className="text-purple-200 mt-1">{notification.message}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}