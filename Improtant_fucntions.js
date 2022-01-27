/*Start of Improtant function*/

function navigate() {
   // alert("frame_navigate");
    var x = navigator.userAgent;
    if (x == "SLN")
        window.location = "inapp://LeadViewClick";
    else
        parent.DoneClick();

}

function navigateback() {
   // alert("frame_Back");
    var x = navigator.userAgent;
    if (x == "SLN")
        window.location = "inapp://cancel";
    else
        parent.FrameBackClick();
}

function navigatedone() {
   // alert("frame_Done");
    var x = navigator.userAgent;
    if (x == "SLN")
        window.location = "inapp://DoneClick";
    else
        parent.FrameDoneClick();
}

function navigatenext() {
  //  alert("frame_Next");
    var x = navigator.userAgent;
    if (x == "SLN")
        window.location = "inapp://save";
    else
        parent.FrameNextClick();
}


function GetControls() {  
    var choiceAnswer = "";
    for (var i = 1; i <= 20; i++) {
        choiceAnswer += GetChoiceValue("CH" + i.toString(), "Web") + " § ";
    }   
    if (choiceAnswer.trim().endsWith("§")) {
       
        choiceAnswer = choiceAnswer.trim().substr(0, choiceAnswer.length - 2);
    }  
    return choiceAnswer;
}

function GetChoiceValue(_choiceName, _platform) {
    var cntrls = document.getElementsByName(_choiceName);
    if (cntrls[0] == undefined) { return ""; };

    var controlvalue;
    for (var i = 0; i < cntrls.length; i++) {
        var control = cntrls[i];
       // alert(control.type);
        
        if (control.type == "text") {
            controlvalue = control.value;

        }
       
        if (control.type == "textarea") {
            var value = control.value;
            controlvalue = value.replace(/\n/g, "<br>");

        }
        if (control.type == "tel") {
            controlvalue = control.value;

        }
        if (control.type == "email") {
            controlvalue = control.value;

        }
        if (control.type == "checkbox") {
            if (control.checked) {
                controlvalue = control.value;
            } else {
                controlvalue = "";
            }
        }
        if (control.type == "radio") {           
            if (control.checked) {               
                controlvalue = control.value;
            } 
        }
        if (control.type == "select-one") {
            controlvalue = control.value;
            // alert("get ddl choice :" + control.value);
            /* var x = document.getElementById(_choiceName);
             var txt = "Dropdown options";
             var i;
             for (i = 0; i < x.length; i++) {
                 txt = txt + "" + x.options[i].value;
             }*/
        }
    }
   // controlvalue = controlvalue.replace(/'/g, "");
    /*if (_platform == "ANDROID")
        AndroidFunction.receiveValue(controlvalue);
    else
        return controlvalue;
        */
    return controlvalue;
}

function SetChoiceValue(_choiceName, _choiceValue) {
    
    var cntrls = document.getElementsByName(_choiceName);
    for (var i = 0; i < cntrls.length; i++) {
        var control = cntrls[i];
        if (control.type == "text") {
            control.value = _choiceValue;
        }
        if (control.type == "textarea") {
            var reverse1 = _choiceValue;
            control.value = reverse1.replace(/<br>/g, "\n");
        }
        if (control.type == "tel") {
            control.value = _choiceValue;
        }
        if (control.type == "email") {
            control.value = _choiceValue;
        }
        if (control.type == "checkbox") {
            if (control.value == _choiceValue) {
                control.checked = true;
            } else {
                control.checked = false;
            }
        }
        if (control.type == "radio") {           
            if (control.value == _choiceValue) {
                control.checked = true;
            } else {
                control.checked = false;
            }
        }
        if (control.type == "select-one") {

            if (_choiceValue != "") {
                if (_choiceValue == "Select")
                    control.selectedIndex = 0;
                else {
                    control.value = _choiceValue;
                }
            }
            else {

                control.selectedIndex = 0;
            }

            //else {
            //    document.getElementById(_choiceName).selectedIndex == 0;
            //}
            //if (_choiceName == "CH6")
            //{ Display_Other(); }

        }
    }

    return;
}

window.addEventListener('load', function () { // on page load

    document.body.addEventListener('touchstart', function (e) {
        document.activeElement.blur();
    }, false)

}, false);

function replaceValues(md) {
    /* var Obj = {
        Lenovo: "Dell",
        Honor: "OnePlus",
        Samsung: "Lenovo",
        "$V01": "Dell",
    };
    document.body.innerHTML = document.body.innerHTML.replace(/Lenovo|Honor|Samsung|/gi, function (matched) {
        return Obj[matched];
    });*/

    for (var propertyName in md) {
        switch (propertyName) {
            case "FirstName":
                if (md.FirstName == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V01", "");
                    else
                document.body.innerHTML = document.body.innerHTML.replace("$V01", md.FirstName);
                break;
            case "LastName":
                if (md.LastName == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V02", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V02", md.LastName);
                break;
            case "Title":
                if (md.Title == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V03", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V03", md.Title);
                break;
            case "Company":
                if (md.Company == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V04", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V04", md.Company);
                break;
            case "Phone":
                if (md.Phone == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V05", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V05", md.Phone);
                break;
            case "Email":
                if (md.Email == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V06", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V06", md.Email);
                break;
            case "Address1":
                if (md.Address1 == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V07", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V07", md.Address1);
                break;
            case "Address2":
                if (md.Address2 == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V08", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V08", md.Address2);
                break;
            case "City":
                if (md.City == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V09", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V09", md.City);
                break;
            case "State":
                if (md.State == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V10", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V10", md.State);
                break;
            case "Zip":
                if (md.Zip == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V21", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V21", md.Zip);
                break;
            case "Country":
                if (md.Country == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V11", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V11", md.Country);
                break;
            case "Other1":
                if (md.Other1 == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V12", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V12", md.Other1);
                break;
            case "Other2":
                if (md.Other2 == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V13", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V13", md.Other2);
                break;
            case "Other3":
                if (md.Other3 == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V14", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V14", md.Other3);
                break;
            case "Other4":
                if (md.Other4 == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V15", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V15", md.Other4);
                break;
            case "Other5":
                if (md.Other5 == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V16", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V16", md.Other5);
                break;
            case "Other6":
                if (md.Other6 == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V17", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V17", md.Other6);
                break;
            case "Other7":
                if (md.Other7 == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V18", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V18", md.Other7);
                break;
            case "Other8":
                if (md.Other8 == null)
                    document.body.innerHTML = document.body.innerHTML.replace("$V19", "");
                else
                document.body.innerHTML = document.body.innerHTML.replace("$V19", md.Other8);
                break;

            default:
                break;
        }
    }
}

function displayonclick(cntrl_main,cntrl_hidden) {
     var x = document.getElementById(cntrl_hidden);
              if(document.getElementById(cntrl_main).checked==true)
              {
                  x.style.display = "block";
              }
              else{
                  x.style.display = "none";
              }
}
/*End of Improtant function */

