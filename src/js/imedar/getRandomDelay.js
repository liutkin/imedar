const getRandomDelay = state => {
  return (
    Math.floor(Math.random() * (state.maxDelay - state.minDelay + 1)) +
    state.minDelay
  );
};

export default getRandomDelay;
