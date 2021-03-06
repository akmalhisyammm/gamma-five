import { Heading } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from 'lib/firebase';
import { ContactMessage } from 'types/contact';
import { baseUrl } from 'constants/baseUrl';
import { ContactForm } from 'components/contact';
import Layout from 'components/layout';

const Contact = () => {
  const handleSendMessage = async (data: ContactMessage) => {
    const db = getFirestore(firebaseApp);
    const messagesCollectionRef = collection(db, 'messages');

    await addDoc(messagesCollectionRef, data);
  };

  return (
    <Layout>
      <NextSeo
        title="Contact"
        canonical={`${baseUrl}/contact`}
        openGraph={{
          title: 'Contact | Gamma-5',
          description: 'Contact page of Gamma-5',
        }}
      />

      <Heading textAlign="center">Kontak Kami</Heading>
      <hr
        style={{
          borderBottom: '2px solid',
          width: 100,
          margin: '12px auto 0',
        }}
      />
      <ContactForm sendMessage={handleSendMessage} />
    </Layout>
  );
};

export default Contact;
