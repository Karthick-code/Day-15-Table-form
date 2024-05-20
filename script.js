
function create_label(tagname,attriname,attrival,content){
    var label1=document.createElement(tagname);
    label1.setAttribute(attriname,attrival)
    label1.innerHTML=content;
    label1.setAttribute("style","display:block");
    return label1;
}
function create_input(tagname,attriname1,attrival1,attiname2,attrival2){
    var input1=document.createElement(tagname);    
    input1.setAttribute(attriname1,attrival1);
    input1.setAttribute(attiname2,attrival2);
    input1.setAttribute("placeholder",attrival2);
    return input1;
}
function create_input_type(tagname,attriname1,attrival1,attiname2,attrival2){
    var input1=document.createElement(tagname); 
    input1.className=attrival1;   
    input1.setAttribute(attriname1,attrival1);
    input1.setAttribute(attiname2,attrival2);
    input1.setAttribute("value",attrival2);
    return input1;
}

function create_checkbox(){
    var north_input=create_input_type("input","type","checkbox","id","NorthIndian");
    var northlabel=create_label("label","for","NorthIndian","North Indian");northlabel.setAttribute("style","display:inline-block");
    var south_input=create_input_type("input","type","checkbox","id","SouthIndian");
    var southlabel=create_label("label","for","SouthIndian","South Indian");southlabel.setAttribute("style","display:inline");
    var chinese_input=create_input_type("input","type","checkbox","id","Chinese");
    var chineselabel=create_label("label","for","Chinese","Chinese");chineselabel.setAttribute("style","display:inline");
    var japanese_input=create_input_type("input","type","checkbox","id","japanese");
    var japaneselabel=create_label("label","for","japanese","Japanese");japaneselabel.setAttribute("style","display:inline");
    var seafood_input=create_input_type("input","type","checkbox","id","Seafood");//seafood_input.setAttribute("style","display:inline-block");
    var seafoodlabel=create_label("label","for","Seafood","Seafood");seafoodlabel.setAttribute("style","display:inline");
    form1.append(north_input,northlabel,south_input,southlabel,chinese_input,chineselabel,
        japanese_input,japaneselabel,seafood_input,seafoodlabel);
}
var cont=document.createElement("div");
cont.className="container";
// cont.setAttribute("style","size:auto")

var r_ow=document.createElement("div");
r_ow.className="row";

//left side for form
var col_1=document.createElement("div");
col_1.className="col-4";


var form1=document.createElement("form");
var head=document.createElement("h3");
head.innerHTML="Form Submission:";

var firstlabel=create_label("label","for","FirstName","FirstName:");
var firstinput=create_input("input","type","text","id","FirstName");

var lastlabel=create_label("label","for","LastName","LastName:");
var lastinput=create_input("input","type","text","id","LastName");

var add1label=create_label("label","for","AddresLine1","Addres Line 1:");
var add1input=create_input("input","type","text","id","AddresLine1");

var add2label=create_label("label","for","AddresLine2","Addres Line 2:");
var add2input=create_input("input","type","text","id","AddresLine2");

var pinlabel=create_label("label","for","PIN","PIN:");
var pininput=create_input("input","type","text","id","PIN");

var genderlabel=create_label("label","for","Gender","Gender:");
var genderinput1=create_input_type("input","type","radio","id","male");
genderinput1.name="gender";
// genderinput1.value="Male";
var malelabel=create_label("label","for","male","Male");
malelabel.setAttribute("style","display:inline");
var genderinput2=create_input_type("input","type","radio","id","female");
genderinput2.name="gender";
//genderinput2.value="Female";
var femalelabel=create_label("label","for","male","Female");
femalelabel.setAttribute("style","display:inline");

var choiceoffood=create_label("label","for","coiceoffood","Choice of Food: <i>(must choose atleast 2 out of 5 options</i>");

var statelabel=create_label("label","for","State","State:");
var stateinput=create_input("input","type","text","id","State");

var countrylabel=create_label("label","for","Country","Country:");
var countryinput=create_input("input","type","text","id","Country");

form1.append(head,firstlabel,firstinput,lastlabel,lastinput,add1label,add1input,
    add2label,add2input,pinlabel,pininput,genderlabel,genderinput1,malelabel,genderinput2,femalelabel,
    choiceoffood
);
create_checkbox();
form1.append(statelabel,stateinput,countrylabel,countryinput);
var but=document.createElement("button");
but.setAttribute("type","button");
but.id="but1";
but.innerHTML="Submit";
but.setAttribute("style","display:block");
but.addEventListener("click",(element)=>{
    element.onclick=data_2_table()});// function to be added

form1.append(but);

col_1.append(form1);


//right side for table
var col_2=document.createElement("div");
col_2.className="col-8";
col_2.setAttribute("style","padding-left:200px;"); // column 2 for table

var head2=document.createElement("h3");
head2.innerHTML="Temporary Database:";


var table = document.createElement("table");
table.className = "table table-striped";

var thead = document.createElement("thead");
thead.className = "thead-dark";
var thead_tr = create_tr();
var th1 = create_th("th","scope","col","FirstName");
var th2 = create_th("th","scope","col","LastName");
var th3 = create_th("th","scope","col","Addres Line 1");
var th4 = create_th("th","scope","col","Addres Line 2");
var th5 = create_th("th","scope","col","PIN");
var th6 = create_th("th","scope","col","Gender");
var th7 = create_th("th","scope","col","Choice of Food");
var th8 = create_th("th","scope","col","State");
var th9 = create_th("th","scope","col","Country");

thead_tr.append(th1,th2,th3,th4,th5,th6,th7,th8,th9);
thead.append(thead_tr);

var tbody =  document.createElement("tbody");

var parent_div=document.createElement("div");
parent_div.className="main";


table.append(thead,tbody);
parent_div.append(head2,table);
col_2.append(parent_div);


r_ow.append(col_1,col_2);
cont.append(r_ow);
document.body.append(cont);




function create_tr(){
    var tr_ele = document.createElement("tr");
    return tr_ele;
}

function create_th(tagname,classname,value,content){
var th_ele = document.createElement(tagname);
th_ele.setAttribute(classname,value);
th_ele.innerHTML = content;
return th_ele; 
}


function create_td(tagname,content){
    var td_ele = document.createElement(tagname);
    td_ele.innerHTML = content;
    return td_ele; 
}
function data_2_table(){
    var tbody_tr=create_tr();
    var firstname=document.getElementById("FirstName").value;
    
    var lastname=document.getElementById("LastName").value;
    var add1=document.getElementById("AddresLine1").value;
    var add2=document.getElementById("AddresLine2").value;
    var pin=document.getElementById("PIN").value;
    var form=document.querySelector("form");
    const data = new FormData(form);//gender value retiving
    let gen_val = "";
    for (const entry of data) {
        gen_val = `${gen_val}${entry[1]}`;
    }
    var gender=gen_val;
    //console.log(gender)

    var choice_val="";
    var choice=document.querySelectorAll(".checkbox:checked");
    for(var ch of choice){
        if(choice_val.length!=0){
            choice_val+=","
        }
        choice_val=`${choice_val}${ch.value}`;
    }
    //console.log(choice_val);

    var state=document.getElementById("State").value;
    var country=document.getElementById("Country").value;
    
    var td1 = create_td("td",firstname);
    var td2 = create_td("td",lastname);
    var td3 = create_td("td",add1);
    var td4 = create_td("td",add2);
    var td5 = create_td("td",pin);
    var td6 = create_td("td",gender);
    var td7 = create_td("td",choice_val);
    var td8 = create_td("td",state);
    var td9 = create_td("td",country);
    tbody_tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    tbody.append(tbody_tr); 
}
