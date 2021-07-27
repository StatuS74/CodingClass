var selector = document.getElementById('phone');
var im = new Inputmask("999-9999999");
im.mask(selector);



function show (param)
{
    var show_id_1 = document.getElementById("show_1").style;
    var show_id_2 = document.getElementById("show_2").style;
    if (param=="show_1")
    {
        show_id_1.visibility = "hidden";
        show_id_2.visibility = "visible";
    }
    else
    {
        show_id_2.visibility = "hidden";
        show_id_1.visibility = "visible";
    }
}
