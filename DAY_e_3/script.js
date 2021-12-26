function showDialog(){
    var dialog_container = document.getElementById("dialog_container");
    dialog_container.classList.remove("display_none");
    dialog_container.innerHTML = "";

    var dialog = createDialogBox(
        "Header Add Task",      // header
        "Enter Task Name dy",   // label1txt
        "Description dy",       // label2txt
        "Save dy",              // footerbtntxt
        function(){             // footerbtn_functionality
            alert("Saved Successfully");
        }
    );

    dialog_container.appendChild(dialog);
}


function showDialog1(){
    var dialog_container = document.getElementById("dialog_container");
    dialog_container.classList.remove("display_none");
    dialog_container.innerHTML = "";

    var dialog = createDialogBox(
        "Header Add Sub Task",      // header
        "Enter Sub Task Name dy",   // label1txt
        "Description dy",           // label2txt
        "Save Subtask dy",          // footerbtntxt
        function(){                 // footerbtn_functionality
            alert("Saved Sub Task Successfully");
        }
    );

    dialog_container.appendChild(dialog);
}
