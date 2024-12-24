for (let i = 1; i <= 10; i++) {
    let bag = "";
    for (let j = 1; j <= i; j++) {
        if (j % 3 == 0) {
            continue;
        } else if (j % 7 == 0) {
            break;
        }
        bag += j + " ";         
    }
    console.log(bag.trim());
}

