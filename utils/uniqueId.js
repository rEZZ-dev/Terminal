export default function () {
  const uniqueID = `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    uniqueID
  }
}
