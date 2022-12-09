function display_mess()
{

    var name = document.getElementById("id_name").value;
    var email = document.getElementById("id_email").value;
    var subject = document.getElementById("id_subject").value;
    var Comment = document.getElementById("id_comment").value;
    var result = document.getElementById("text_click");
    var result_box = document.getElementById("box_result");


    result_box.style.display ="flex";
    result.innerHTML = "Bạn đã gửi thành công : <br> Name : "+
    name +"<br> Email : " + email +"<br> Subject : " + subject +"<br> Comment : " + Comment  ;
    // result_box.style.color = "red";

    result.style.paddingLeft = "20px";
    result.style.paddingTop = "20px";
    // result_box.style.border = "solid 1px blue";


} 

function display_none()
{
    var result_box = document.getElementById("box_result");
    result_box.style.display ="none";
    
    
    
}





function display_signIn()
{   
    var dis_sign_in = document.getElementById("id_modalBody");
    var dis_body = document.getElementById("id_body");

    var id_modal_body_max = document.getElementById("id_modal_body_max");
    // dis_sign_in.style.display = "block";
    id_modal_body_max.style.display = "flex";
    

}


function come_out ()
{

    var id_modal_body_max = document.getElementById("id_modal_body_max");
    id_modal_body_max.style.display = "None"

}


function come_out_sign_in ()
{

    var id_modal_body_max = document.getElementById("id_modal_body_max_1");
    id_modal_body_max.style.display = "None"
    var id_modal_body_max = document.getElementById("id_modal_body_max");
    id_modal_body_max.style.display = "None"

}

function comeback_sign_up ()
{

    var id_modal_body_max = document.getElementById("id_modal_body_max_1");
    id_modal_body_max.style.display = "None"


}







function display_signin_in_sign_up()
{   

    alert("Bạn đã đăng ký thành công, Vui lòng đăng nhập tại đây !!!");
    var id_modal_body_max = document.getElementById("id_modal_body_max_1");
    // dis_sign_in.style.display = "block";
    id_modal_body_max.style.display = "flex";
    

}






