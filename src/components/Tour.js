import React, { useState } from 'react';

const Tour = ({ id, image, info, description, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const tourInfo = info || description || '';

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? tourInfo : `${tourInfo.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Remove
        </button>
      </footer>
    </article>
  );
};

export default Tour;
