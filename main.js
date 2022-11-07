const img_arr = document.getElementsByTagName("img");
var n = 0;

function load()
{
    img_arr[0].style.display = "block";
}

function next()
{
    img_arr[n].style.display = "none";
    if( n == img_arr.length - 1 ) n = 0; // jump to the start if at the end
    else n++;
    img_arr[n].style.display = "block";
}

function previous()
{
    img_arr[n].style.display = "none";
    if( n == 0 ) n = img_arr.length - 1; // jump to the end if at the start
    else n--;
    img_arr[n].style.display = "block";
}