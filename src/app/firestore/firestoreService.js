import cuid from 'cuid';
import firebase from '../config/firebase';

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function listenToEventsFromFirestore() {
  return db.collection('events').orderBy('date');
}

export function listenToEventFromFirestore(eventID) {
  return db.collection('events').doc(eventID);
}

export function addEventToFirestore(event) {
  return db.collection('events').add({
    ...event,
    hostedBy: 'Diana',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
    attendees: firebase.firestore.FieldValue.arrayUnion({
      id: cuid(),
      displayName: 'Diana',
      photoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
    }),
  });
}

export function updateEventInFirestore(event) {
  return db.collection('events').doc(event.id).update(event);
}

export function deleteEventInFirestore(eventID) {
  return db.collection('events').doc(eventID).delete();
}

export function cancelEventToggle(event) {
  return db.collection('events').doc(event.id).update({
    isCancelled: !event.isCancelled,
  });
}

export function setUserProfileData(user) {
  return db
    .collection('users')
    .doc(user.uid)
    .set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      isBanned: false,
      isStudent: false,
      isTutor: false,
      rating: -1,
      courses: {
        student: {},
        tutor: {},
      },
      institutions: {},
    });
}

export function getUserProfile(userID) {
  console.log(userID);
  return db.collection('users').doc(userID);
}

export async function updateUserProfile(profile) {
  const user = firebase.auth().currentUser;
  try {
    if (user.displayName !== profile.displayName) {
      await user.updateProfile({
        displayName: profile.displayName,
      });
    }
    return await db.collection('users').doc(user.uid).update(profile);
  } catch (error) {
    throw error;
  }
}
