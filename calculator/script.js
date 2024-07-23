let buttons = document.querySelectorAll('button');
let output=document.getElementById("input");
let string="";
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
           string=eval(string);
           output.value=string;
        }
        else if(e.target.innerHTML=='AC')
        {
            string="";
            output.value=string;
        }
        else if(e.target.innerHTML=='del')
        {
            string=string.substring(0,string.length-1);
            output.value=string;
        }
        else{
        string=string+e.target.innerHTML;
        output.value=string;
    }}
    );
})