
export const craftingQueue = [];


export function enqueueRequest(request) {
    craftingQueue.push(request);
}


export function dequeueRequest() {
    return craftingQueue.shift();
}


export function processQueue() {
    while (craftingQueue.length > 0) {
        const request = dequeueRequest();
        console.log(`Processing request for potion: ${request.potionName}`);
    }
}
