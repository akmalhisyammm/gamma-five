import { Heading } from '@chakra-ui/react';
import { ContactMessage } from 'models';
import { insertContactMessage } from 'services/firebase';
import { ContactForm } from 'components/contactSections';
import Layout from 'components/layout';

const Contact = () => {
  const sendMessageHandler = async (data: ContactMessage) => {
    await insertContactMessage(
      data.firstName,
      data.lastName,
      data.email,
      data.subject,
      data.message
    );
  };

  return (
    <Layout title="Kontak">
      <Heading textAlign="center">Kontak Kami</Heading>
      <hr
        style={{
          border: '1px solid',
          width: 100,
          margin: '12px auto 0',
        }}
      />

      <ContactForm sendMessage={sendMessageHandler} />
    </Layout>
  );
};

export default Contact;
