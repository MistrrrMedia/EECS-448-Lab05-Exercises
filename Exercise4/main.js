function commit()
{
    // border properties
    border_r = document.getElementById("border_r").value;
    border_g = document.getElementById("border_g").value;
    border_b = document.getElementById("border_b").value;
    border_w = document.getElementById("border_w").value;

    background_r = document.getElementById("background_r").value;
    background_g = document.getElementById("background_g").value;
    background_b = document.getElementById("background_b").value;

    // if in range, change properties
    if( border_r >= 0 && border_r <= 255 && border_g >= 0 && border_g <= 255 && border_b >= 0 && border_b <= 255 && border_w >= 0 && background_r >= 0 && background_r <= 255 && background_g >= 0 && background_g <= 255 && background_b >= 0 && background_b <= 255 )
    {
        document.getElementById("lyrics_container").style.backgroundColor = `rgb(${background_r},${background_g},${background_b}`;
        document.getElementById("lyrics_container").style.borderColor = `rgb(${border_r},${border_g},${border_b}`;
        document.getElementById("lyrics_container").style.borderWidth = `${border_w}px`;
        console.log("fuck");
    }

    // error prompt
    else
    {
        alert("One of the values is not within range.");
    }
}