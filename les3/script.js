const giveMeNumber = (number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number);
      }, 200)
    });
  }
  
  giveMeNumber(5)
    .then((number) => { return number + 1; })
    .then((number) => { return number + 10; })
    .then((number) => { console.log(number) }); // В консоль выведется 16