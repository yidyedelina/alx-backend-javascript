function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Success');
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
