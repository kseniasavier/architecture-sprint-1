import React from 'react';
import Card from './Card';

function Listing({ cards, onAddPlace, onCardClick, onCardLike, onCardDelete }) {
  return (
    <main className="content">
      <section className="places page__section">
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Listing;
