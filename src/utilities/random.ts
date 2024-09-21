function getRandomValue(
  min: number = 1,
  max: number = 10,
  asMiliseconds = true
): number {
  return (
    (Math.floor(Math.random() * (max - min + 1)) + min) *
    (asMiliseconds ? 1000 : 1)
  );
}

export { getRandomValue };
