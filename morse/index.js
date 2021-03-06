module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const morse = require("morse-code-converter");
    const plaintext = req.query.plaintext;

    let code;

    if (typeof(plaintext) === 'undefined' || plaintext === '') {
        code = "Please enter some text to convert!";
    } else {
        code = morse.textToMorse(plaintext);
    }



    context.res = {
        // status: 200, /* Defaults to 200 */
        body: code
    };
}