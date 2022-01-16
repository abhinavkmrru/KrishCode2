function createDialogBox(headertxt, label1txt, label2txt, footerbtntxt, input_text, textarea_text ,footerbtn_click_fun){
    var dialogdiv = document.createElement("div");
    dialogdiv.classList.add("dialog");

        //################ Header Container Start ##############
        var header_containerdiv = document.createElement("div");
        header_containerdiv.classList.add("header_container");

            var dialog_headerh2 = document.createElement("h2");
            dialog_headerh2.classList.add("dialog_header");
            dialog_headerh2.innerText = headertxt;
            
            var dialog_close_btnbutton = document.createElement("button");
            dialog_close_btnbutton.classList.add("dialog_close_btn");
            dialog_close_btnbutton.innerText = "X";

        header_containerdiv.appendChild(dialog_headerh2);
        header_containerdiv.appendChild(dialog_close_btnbutton);
        //################ Header Container End ##############

        var hr1 = document.createElement("hr");

        //################ Body Container Start ##############
        var body_containerdiv = document.createElement("div");
        body_containerdiv.classList.add("body_container");

            var dialog_label1 = document.createElement("label");
            dialog_label1.classList.add("dialog_label");
            dialog_label1.innerText = label1txt;

            var dialog_label2 = document.createElement("label");
            dialog_label2.classList.add("dialog_label");
            dialog_label2.innerText = label2txt;

            var dialog_input = document.createElement("input");
            dialog_input.classList.add("dialog_input");
            dialog_input.type = "text";
            dialog_input.value = input_text;

            var dialog_textarea = document.createElement("textarea");
            dialog_textarea.classList.add("dialog_textarea");
            dialog_textarea.rows = "6";
            dialog_textarea.innerText = textarea_text;

        body_containerdiv.appendChild(dialog_label1);
        body_containerdiv.appendChild(dialog_input);
        body_containerdiv.appendChild(dialog_label2);
        body_containerdiv.appendChild(dialog_textarea);

        //################ Body Container End ##############

        //################ Footer Container Start ##############
        var footer_containerdiv = document.createElement("div");
        footer_containerdiv.classList.add("footer_container");

            var hr2 = document.createElement("hr"); 

            var dialog_footer_btn = document.createElement("button");
            dialog_footer_btn.classList.add("green_btn");
            dialog_footer_btn.innerText = footerbtntxt;

        footer_containerdiv.appendChild(hr2);
        footer_containerdiv.appendChild(dialog_footer_btn);    
        //################ Footer Container End ##############

    dialogdiv.appendChild(header_containerdiv);
    dialogdiv.appendChild(hr1);
    dialogdiv.appendChild(body_containerdiv);
    dialogdiv.appendChild(footer_containerdiv);

    // events 

    dialog_close_btnbutton.addEventListener("click", function(){
        var dialog_container = document.getElementById("dialog_container");
        dialog_container.classList.add("display_none");
        dialog_container.innerHTML = "";

    });

    dialog_footer_btn.addEventListener("click", footerbtn_click_fun)

    return dialogdiv;
}