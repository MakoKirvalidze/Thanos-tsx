import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { facts } from '../data/fact';

const Fact: React.FC = () => {
  const { factId } = useParams<{ factId: string }>();
  const fact = facts.find(f => f.id === parseInt(factId || ''));

  if (!fact) {
    return <div>ფაქტი ვერ მოიძებნა</div>;
  }

  return (
    <div>
      <h2>ფაქტი #{fact.id}</h2>
      <p>{fact.text}</p>
      <Link to="/">დაბრუნება მთავარზე</Link>
    </div>
  );
}

export default Fact;