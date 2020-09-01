import React from 'react';
import tw from 'twin.macro';

const Container = tw.div`
  p-12
`;

const Heading = tw.h1`
  font-sans
  text-3xl
`;

export const IndexPage: React.FC = () => {
  return (
    <Container>
      <Heading>Hi there</Heading>
    </Container>
  );
};

export default IndexPage;
