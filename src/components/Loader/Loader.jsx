import React from 'react';
import { LineWave } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LineWave
      height="100"
      width="100"
      color="#437aa5"
      ariaLabel="line-wave"
      viewBox="80 80"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClass=""
      visible={true}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};
