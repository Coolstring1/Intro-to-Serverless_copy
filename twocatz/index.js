module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const fetch = require('node-fetch');

    let names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"];

    for (let i = names.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [names[i], names[j]] = [names[j], names[i]];
    }

    const name1 = names[0];
    const name2 = names[1];

    const kittyName1 = await fetch("https://bit-cat.azurewebsites.net/cat/says/"+name1, {
        method: 'GET'
    });

    const dataKitty1 = await kittyName1.arrayBuffer();
    // we need to receive it as a buffer since this is an image we are receiving from the API
    // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob

    const base64dataKitty1 = Buffer.from(dataKitty1).toString('base64');

    const kittyName2 = await fetch("https://bit-cat.azurewebsites.net/cat/says/"+name2, {
        method: 'GET'
    });

    const dataKitty2 = await kittyName2.arrayBuffer();
    // we need to receive it as a buffer since this is an image we are receiving from the API
    // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob

    const base64dataKitty2 = Buffer.from(dataKitty2).toString('base64');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { 
            cat1: base64dataKitty1,
            cat2: base64dataKitty2,
            names: [name1, name2]
         }
    };
}