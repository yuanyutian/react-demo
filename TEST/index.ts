//执行命令运行 ts-node index.ts

// console.log(123)

function sum(num: number, num2: number, num3: number): number {
    return num + num2 + num3
}
// console.log(sum(1, 2, 3));

function oddSum(num: number): number {
    if (num <= 0) {
        return 0;
    }
    let sum = 0;
    for(let i=0; i < num; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log(sum)
    return sum;
}
// oddSum(0);
// oddSum(100); 

// 异步




