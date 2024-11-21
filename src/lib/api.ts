import { auth, db, storage, geoFirestore } from './firebase';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as turf from '@turf/turf';

// User Management
export const createUser = async (userData: any) => {
  try {
    const userRef = collection(db, 'users');
    const docRef = await addDoc(userRef, {
      ...userData,
      createdAt: new Date(),
      isVerified: false,
      subscriptionStatus: 'free'
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Location-based Services
export const getNearbyUsers = async (coordinates: [number, number], radius: number) => {
  try {
    const center = turf.point(coordinates);
    const options = {
      center: coordinates,
      radius: radius,
      limit: 50
    };

    const nearbyUsers = await geoFirestore
      .collection('users')
      .near(options)
      .get();

    return nearbyUsers.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting nearby users:', error);
    throw error;
  }
};

// Service Discovery
export const getNearbyServices = async (
  coordinates: [number, number],
  radius: number,
  category?: string
) => {
  try {
    let servicesQuery = geoFirestore.collection('services');
    
    if (category) {
      servicesQuery = query(
        collection(db, 'services'),
        where('category', '==', category)
      ) as any;
    }

    const nearbyServices = await servicesQuery
      .near({
        center: coordinates,
        radius: radius,
        limit: 50
      })
      .get();

    return nearbyServices.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting nearby services:', error);
    throw error;
  }
};

// Messaging System
export const sendMessage = async (
  senderId: string,
  receiverId: string,
  content: string
) => {
  try {
    const messageRef = collection(db, 'messages');
    await addDoc(messageRef, {
      senderId,
      receiverId,
      content,
      timestamp: new Date(),
      read: false
    });
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Media Upload
export const uploadMedia = async (file: File, path: string) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading media:', error);
    throw error;
  }
};

// Subscription Management
export const updateSubscription = async (userId: string, plan: string) => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      subscriptionStatus: plan,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating subscription:', error);
    throw error;
  }
};

// Analytics
export const trackEvent = async (userId: string, eventType: string, data: any) => {
  try {
    const analyticsRef = collection(db, 'analytics');
    await addDoc(analyticsRef, {
      userId,
      eventType,
      data,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Error tracking event:', error);
    throw error;
  }
};