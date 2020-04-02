// Question 2

const resolvedPromise = () => {
    const p = new Promise(function (resolve) {
      setTimeout(() => {
          resolve({'message': "delayed success"});
      }, 500)
  })
    return p;
  }
  const rejectedPromise = () => {
    const p = new Promise(function (reject) {
      setTimeout(() => {
          reject({ 'error': "delayed exception!"});
      }, 500)
  })
    return p;
  }

  resolvedPromise().then(success => console.log(success));
  rejectedPromise().then(success => console.log(success)).catch((result) => console.log(result));