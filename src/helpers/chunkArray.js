export default function chunkArray(array, chunkSize, chunks = []) {
  if (array.length === 0) {
    return chunks;
  }

  if (array.length <= chunkSize) {
    return [...chunks, array];
  }

  const thisChunk = array.slice(0, chunkSize);
  const rest = array.slice(chunkSize, array.length);

  return chunkArray(rest, chunkSize, [...chunks, thisChunk]);
}
