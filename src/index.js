module.exports = function reverse (n) {
   let a = n.toString();
    let result = '';
    for (let i=a.length-1; i>=0;i--)
    {
        result += a[i];
    }
    console.log(result);
    return parseInt(result);
}