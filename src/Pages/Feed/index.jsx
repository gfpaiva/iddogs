import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import Grid from '../../Components/Grid';

import { getFeed } from '../../Utils/API';

export default function Feed({ match: { params: { category } } }) {
  const [dogs, setDogs] = useState([]);
  const [loading, seLoading] = useState(true);

  useEffect(() => {
    async function fetchDogs() {
      seLoading(true);

      const { list } = await getFeed(category);

      setDogs(list);
      seLoading(false);
    }

    fetchDogs();
  }, [category]);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner name="three-bounce" />
      </div>
    );
  }

  if (!dogs || !dogs.length) {
    return (
      <h3 className="text-center">
        Não encontramos nenhum cachorro nesta categoria.
        <span role="img" aria-label="Cachorro">🐶</span>
      </h3>
    );
  }

  return (
    <div>
      <Grid items={dogs} />
    </div>
  );
}

Feed.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
