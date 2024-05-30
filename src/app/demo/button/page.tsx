import React from 'react';
import Button from '@/components/button/index'; // Importing the Button component

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      {/* Rendering the Button component with specific props */}
      <Button
        color="primary"
        textColor="light"
        label="Delete"
        onClick={() => console.log('Item deleted!')}
      />
    </div>
  );
};

export default Page;
