// break
for (let i = 0; i < 5; i++) {
  if (i > 3) {
    break;
  }
  console.log(i);
}

// continue
for (let i = 0; i < 5; i++) {
  if (i == 2) {
    continue;
  }
  console.log(i);
}

// label
testLabel: {
  console.log('hi');
  console.log('hello');
  break testLabel;
  console.log('how');
  console.log('bye');
}
