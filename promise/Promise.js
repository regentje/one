const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomResult = Math.random();
        if (randomResult < .8) {
            resolve('Все прошло отлично!');
        } else {
            reject(new Error('Что-то пошло не так'));
        }
    }, 100);
});


promise.then((data) => {
    console.log(data);
},
    (error) => {
        console.log(error);
    }
);