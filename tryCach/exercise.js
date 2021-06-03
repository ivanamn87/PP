
try {
    console.log('Start of try runs');
    // no errors here 
    console.log('End of try runs');
} catch (err) {
    console.log('ignored, no errors');
}

console.log("... Execution continues");



try new Error ('OMG something went wrong');

// "Throw" Operator

throw {
    name: "MyError",
    message: "OMG! Something wrong happend"
}

// Error Object

var error = new Error(message);

var error = new Error("Things appen o_O");

console.log(error.name);
console.log(error.message);


// try... catch.. finally

try {
    // ...try to execute the code ...
} catch {
    // ...handle errors ...
} finally {
    // ...execute always ...
}


function func() {
        // start doing something that needs completion
    try {
        // ....
    } finally {
        // complete that thing even if all dies
    }
}

