
function reverseString(str)
{
    var string = str;
    var reverse="";

    for(let i=string.length-1;i>=0;i--)
    {
        //console.log(string[i])
        reverse=reverse+string[i];
    }
    return reverse
}

console.log(reverseString("Hello"))