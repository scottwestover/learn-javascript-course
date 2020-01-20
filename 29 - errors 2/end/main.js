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
try {
  throw new Error('custom error');
} catch (error) {
  console.log(error);
}

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
try {
  help('test');
  // throw new Error('custom error');
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
}
