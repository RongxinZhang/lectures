const fs = require('fs').promises;


// new Promise((resolve, reject) => {
  //   //stuff that takes time
  //   resolve(5);
  //   reject();
  // });
  
  // console.log('my promise,', myPromise);
  
  // promises
  // 1. Promises are going to avoid callback hell if we need to do 
  // many asynchronous things synchronously
  // 2. a single error handling with catch
  // 3. have to use callback bc of the function we are using
  // 4. more maintainable
  // 5. 
  
  // callbacks
  // 1. we have to declare less functions 
  // 2. simpler to understand* (for single async things)
  // 3. memory used is less
  
const lyrics = [];
const p1 = fs.readFile('./verse1.txt', /* inline */ 'utf8')//1
  .then((data) => {//2
    lyrics.push(data);
    const p2 = fs.readFile('./chorus.txt', 'utf8');//3
    return p2;
  })
  .then((data2) => {//4
    lyrics.push(data2);
    const p3 = fs.readFile('./verse2.txt', 'utf8');//5
    return p3;
  })
  .then((data3) => {//6
    lyrics.push(data3);
    const p4 = fs.readFile('./chorus2.txt', 'utf8');//7
    return p4;
  })
  .then((data4) => {//8
    lyrics.push(data4);
    console.log('all the lyrics', lyrics);
  })
  .catch((err) => {
    console.log('Was able to get this much lyrics,', lyrics);
    console.log('error', err);
  });

// console.log('res', p1);

// promising to return a result
// agreement/commitment to do or try something

