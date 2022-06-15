module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const password = req.query.password;

    const code = "letmein";
    const output = (password == code) ? "Access granted." : "Access denied.";
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: output
    };
}