import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <main className="not-found-page">
      <figure className="not-found-figure">
        <h2 className="loading-not-found-message">Error 404: esta página no existe.</h2>
      </figure>
    </main>
  );
};

export default NotFound;
