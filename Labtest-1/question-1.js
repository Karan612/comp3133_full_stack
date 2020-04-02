// Question 1

const lowerCaseWords = mixedmixedArray => {

    final = new Promise((resolve, reject) => {
        if (mixedArray.filter( value=> typeof value === 'string').length > 0){
            resolve(mixedArray.filter( value=> typeof value === 'string').map(value => value.toLowerCase()));
        }
        else{
            reject('No string values in the Inputs!');
        }        
    })
    return final;
    }
    
    const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

    lowerCaseWords(mixedArray)
        .then(answer => console.log(answer))
        .catch(error => console.log(error))