const object = {
    name: 'Steven',
    subjects: {
        math: 1,
        science: 2,
        english: {
            firstSem: true,
            secondSem: false
        }
    }
};

const path1 = 'subjects.english.firstSem';
const path2 = 'age';
const path3 = 'subjects.humanities';
const path4 = 'subjects.math.firstSem';
const path5 = 'subjects';

function propertyExisting (object, propertyPath) {
    let currentLevel = {...object};
    let exists = false;
    const propertyLevel = propertyPath.split('.');

    for (let i = 0; i < propertyLevel.length; i++) {
        const property = propertyLevel[i];
        if (currentLevel.hasOwnProperty(property)) {
            currentLevel = currentLevel[property];
            exists = true;
        } else {
            exists = false;
            break;
        }
    }        
    
    return exists;
}


console.log(propertyExisting(object, path1)); // Output: true
console.log(propertyExisting(object, path2)); // Output: false
console.log(propertyExisting(object, path3)); // Output: false 
console.log(propertyExisting(object, path4)); // Output: false
console.log(propertyExisting(object, path5)); // Output: true