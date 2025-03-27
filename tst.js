function bake(degrees) {
    var messege;
    if (degrees > 500) {
        messege = "I'm not a nuclear reactor";
    } else if (degrees < 100){
        messege = "I'm not a refrigerator";
    } else {
        messege = "Thats a very comfortable temperature for me"
       //
       // setMode("bake");
        //setTemp(degrees);
    }
    return messege;
}

var status = bake(350);