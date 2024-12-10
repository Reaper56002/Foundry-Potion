
export const craftingStack = [];


export function pushTask(task) {
    craftingStack.push(task);
}


export function popTask() {
    return craftingStack.pop();
}


export function processTasks() {
    while (craftingStack.length > 0) {
        const task = popTask();
        console.log(`Processing task: ${task}`);
    }
}
