export const calculateDotPosition = (engagement) => {
  const { physical, emotional, mental, spiritual } = engagement;

  const x = (emotional - physical) * 0.5;
  const y = (spiritual - mental) * 0.5;

  return { x: 50 + x, y: 50 - y };
};
