function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
    console.log("Hi");
    await sleep(1000);
    console.log("반가워요");
}

async function makeError() {
    console.log("Error 발생 예정");
    await sleep(1000);
    const error = new Error("makeError에서 발생한 에러");
    throw error;
}
// process();

//process()는 async를 사용했으므로 Promise를 반환한다
process()
    .then(() => {
        console.log("process이 끝났어요");
        return makeError();
    })
    .then(() => {
        console.log("makeError이 끝났어요");
    })
    .catch((e) => {
        console.log("에러가 발생했어요");
        console.error(e);
    });
