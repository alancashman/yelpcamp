// wrapper function that takes in a function //
module.exports = func => {
    // returns the req, res, and next from that function //
    return (req, res, next) => {
        // executes that function, but catches any errors and passes them to next //
        func(req, res, next).catch(next);
    }
}