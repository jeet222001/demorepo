const test = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(7 + 9), 2000);
    });
};

const test2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(7 - 9), 1000);
    });
};

Promise.race([test(), test2()]).then((data) => console.log(data));
Promise.all([test(), test2()]).then((data) => console.log(data));

const func1 = () => {
    console.log('hello function1');
    func2();
    console.log('function 1 over');
};
const func2 = () => {
    console.log('hello function2');
    setTimeout(() => {
        console.log('function2 over');
    }, 0);
    Promise.resolve().then(() => console.log('hello from promise'));
};

func1();

const getUser = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({ id: 1, username: 'Jhalak' });
        }, 2000);
    });
};

getUser().then((data) => console.log(data));
