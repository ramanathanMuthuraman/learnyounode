var temp= process.argv.splice(2);
var total = temp.reduce(function(a, b) {
    return parseInt(a) + parseInt(b);
});
console.log(total);