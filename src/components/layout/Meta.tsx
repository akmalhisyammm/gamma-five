import Head from 'next/head';

type MetaProps = {
  title?: string;
};

const Meta = ({ title }: MetaProps) => {
  return (
    <Head>
      <title>{title && `${title} | `}Gamma-5</title>
      <link rel="icon" href="/assets/logo.png" />
    </Head>
  );
};

export default Meta;
