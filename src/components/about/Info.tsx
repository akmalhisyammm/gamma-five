import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut' }}>
      <Image src="/assets/illustrations/teamwork.png" alt="teamwork" marginX="auto" />

      <p>
        Web Sistem Pakar Gamma-5 merupakan web untuk menentukan jurusan kuliah berdasarkan
        kepribadian calon mahasiswa dengan menggunakan metode Certainty Factor.
      </p>
    </motion.div>
  );
};

export default Info;
