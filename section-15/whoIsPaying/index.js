function whosPaying(names) {
    
    if (names.length === 0) {
        return false;
    } else {
        let number = Math.random();
        let index = Math.floor(number * names.length);
        return console.log(names[index] + " is going to buy lunch today!");
    }   
    }