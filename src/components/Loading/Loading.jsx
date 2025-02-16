import React from 'react';

const Loading = () => {
    return (
      <div className="h-screen flex justify-center items-center w-full">
        <span className="loading loading-lg loading-spinner text-success"></span>
      </div>
    );
};

export default Loading;