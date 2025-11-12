// Tulis function manageStack di sini
function manageStack(arr, operations) {
    const log = [];
    for (let op of operations) {
        if (op.startsWith("push:")) {
            let value = op.split(":")[1];
            if (!isNaN(value)) value = Number(value);
            arr.push(value);
            log.push(`Added ${value}`);
        } else if (op === "pop") {
            const removed = arr.pop();
            if (removed !== undefined) log.push(`Removed ${removed}`);
        }
    }


    return { result: arr, log };
}


console.log(manageStack([1, 2], ["push:3", "push:4", "pop"]));
console.log(manageStack([], ["push:a", "push:b", "pop", "push:c"]));