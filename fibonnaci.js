function fibs(n) {
  let sequence = [];
  if (n === 0) {
    return sequence;
  }

  for (let i = 0; i < n; i++) {
    if (sequence.length === 0) {
      sequence.push(0);
    } else if (sequence.length === 1) {
      sequence.push(1);
    } else {
      const current =
        sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(current);
    }
  }
  return sequence;
}

function fibsRec(n, sequence = [0, 1]) {
  if (sequence.length >= n) {
    return sequence.slice(0, n);
  }
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);

  return fibsRec(n, sequence);
}

console.log(fibs(10));
console.log(fibsRec(10));
