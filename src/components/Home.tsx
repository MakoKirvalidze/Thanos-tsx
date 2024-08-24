import React from 'react';
import { Link } from 'react-router-dom';
import thanosImage from './thanos.jpg'; 
import { facts } from '../data/fact'; 

const Home: React.FC = () => {
  return (
    <div>
      <h1>თანოსი</h1>
      <img src={thanosImage} alt="თანოსი" style={{ maxWidth: '300px' }} />
      
      <h2>ფაქტები თანოსის შესახებ:</h2>
      <ul>
        {facts.map((fact) => (
          <li key={fact.id}>
            <Link to={`/fact/${fact.id}`}>ფაქტი #{fact.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;