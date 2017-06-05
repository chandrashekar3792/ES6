//A Promise in short:

//"Imagine you are a kid. Your mom promises you that she'll get you a new phone next week."

//You don't know if you will get that phone until next week. Your mom can either really buy you a brand new phone, or stand you up and withhold the phone if she is not happy :(.

//That is a promise. A promise has 3 states. They are:

//1 -> Promise is pending: You don't know if you will get that phone until next week.
//2 -> Promise is resolved: Your mom really buy you a brand new phone.
//3 -> Promise is rejected: You don't get a new phone because your mom is not happy.
var isMomHappy=false;

var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

willIGetNewPhone.then(data => console.log('data',JSON.stringify(data)))
                .catch(err => console.log('err',err));
