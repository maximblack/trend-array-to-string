export default function (array) {
  return new Promise(resolve => {
    const sequences = [];

    for (let i = 0, len = array.length; i < len; i++) {
      const start = array[i];
      let end = start;

      while (array[i] + 1 === array[i + 1]) {
        end = array[i + 1];
        i++;
      }

      if (start === end) {
        sequences.push(start);
      } else {
        if (start + 1 === end) {
          sequences.push(`${start},${end}`);
        } else {
          sequences.push(`${start}-${end}`);
        }
      }
    }

    resolve(sequences.join(','));
  });
}
