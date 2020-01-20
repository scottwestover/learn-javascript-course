// errors
// try/catch
try {
  console.log('1');
  help('test');
  console.log('2');
} catch (error) {
  console.log(error);
}

// throw

// finally
try {
  console.log('1');
  // help('test');
  console.log('2');
} catch (error) {
  console.log(error);
} finally {
  console.log('finally ran');
}

// error object
