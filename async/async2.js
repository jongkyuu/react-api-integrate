function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return "멍멍이";
};

const getRabbit = async () => {
    await sleep(500);
    return "토끼";
};
const getTurtle = async () => {
    await sleep(3000);
    return "거북이";
};

// async function process() {
//     const startTime = performance.now();
//     const dog = await getDog();
//     console.log(dog);
//     const rabbit = await getRabbit();
//     console.log(rabbit);
//     const turtle = await getTurtle();
//     console.log(turtle);
//     const endTime = performance.now();
//     const totalTime = (endTime - startTime) / 1000;
//     console.log(`걸린시간 : ${totalTime}`);
// }

async function process() {
    const startTime = performance.now();
    const [dog, rabbit, turtle] = await Promise.all([
        getDog(),
        getRabbit(),
        getTurtle(),
    ]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
    const endTime = performance.now();
    const totalTime = (endTime - startTime) / 1000;
    console.log(`걸린시간 : ${totalTime}`);
}

process();
