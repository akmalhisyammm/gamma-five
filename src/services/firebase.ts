import { firebaseApp } from 'config/firebase-config';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
import { Characteristic, Personality, Rule } from 'models/inference';

const db = getFirestore(firebaseApp);

const personalitiesCollectionRef = collection(db, 'personalities');
const characteristicsCollectionRef = collection(db, 'characteristics');
const rulesCollectionRef = collection(db, 'rules');

export const getPersonalities = async () => {
  const personalities = await getDocs(personalitiesCollectionRef);

  return personalities.docs.map((doc) => ({
    ...(doc.data() as Personality),
    id: doc.id,
  }));
};

export const getCharacteristics = async () => {
  const characteristics = await getDocs(characteristicsCollectionRef);

  return characteristics.docs.map((doc) => ({
    ...(doc.data() as Characteristic),
    id: doc.id,
  }));
};

export const getRules = async () => {
  const rules = await getDocs(rulesCollectionRef);

  return rules.docs.map((doc) => ({
    ...(doc.data() as Rule),
    id: doc.id,
  }));
};

export const getPersonalityById = async (requestId: string) => {
  const personalitiesDocRef = doc(db, 'personalities', requestId);
  const personality = await getDoc(personalitiesDocRef);

  if (!personality.exists()) {
    return;
  }

  return { ...(personality.data() as Personality), id: personality.id };
};

export const getRuleByPersonalityId = async (requestId: string) => {
  const rulesDocRef = doc(db, 'rules', requestId);
  const rule = await getDoc(rulesDocRef);

  if (!rule.exists()) {
    return;
  }

  return { ...(rule.data() as Rule), id: rule.id };
};