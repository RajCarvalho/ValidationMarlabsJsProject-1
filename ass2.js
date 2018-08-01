
var user=[];
if(localStorage.a_users)
{
user=JSON.parse(localStorage.a_users)
}
 
var a=document.getElementById("uname")
var b=document.getElementById("pass")
var c=document.getElementById("fname")
var d=document.getElementById("lname")
var e=document.getElementById("email")
var f=document.getElementById("gender")
var g=document.getElementById("location")



var a1=1; var a2=1;var a3=1;var a4=1;var a5=1;var a6=1;var a7=1;
document.getElementById("save").addEventListener("click",function()

{


 
 
    if (a.value === "" &&  a1==1) 
    {
    
       a.insertAdjacentHTML("afterend", " <p style=color:red> please fill the username</p> ");
       
       a1++;
       
     

    }

      

       
    


    
  if (b.value === "" &&  a2==1) 
    {
        b.insertAdjacentHTML("afterend","<p style=color:red>password must be filled</p>")
        a2++;
    } 

       if (c.value ==="" &&  a3==1) 
    {
        c.insertAdjacentHTML("afterend","<p style=color:red>FirstName must be filled</p>")
        a3++;
    }
      if (d.value ==="" &&  a4==1) 
    {
        d.insertAdjacentHTML("afterend","<p style=color:red>LastName must be filled</p>")
        a4++;
    }
       if (e.value ==="" &&  a5==1) 
    {
        e.insertAdjacentHTML("afterend","<p style=color:red>email must be filled</p>")
        a5++;
    }



   

        
       
    
    if (f.value ==="" &&  a6==1) 
    {
        f.insertAdjacentHTML("afterend","<p style=color:red>Gender must be filled</p>")
        a6++;
    }




    
       if (g.value ==="" &&  a7==1) 
    {
        g.insertAdjacentHTML("afterend","<p style=color:red>location must be filled</p>")
        a7++;
        
    }


        var radios = document.getElementsByName('genderS');


    
  
if(a.value!=="" && b.value!=="" && c.value!=="" && d.value!=="" && e.value!=="" && f.value!=="" && g.value!=="")

{





    var users={

        uname:a.value,
        pass:b.value,
        fname:c.value,
        lname:d.value,
        email:e.value,
        gender:f.value,
        location:g.value
    
    }
    
    user.push(users);
    localStorage.a_users=JSON.stringify(user);


var tbl=document.getElementById("mytable");

var x=tbl.rows.length;
while(--x)
tbl.deleteRow(x);

for(var i=0;i<user.length;i++)
{
    var r=tbl.insertRow();
    var cell1=r.insertCell();
    var cell2=r.insertCell();
    var cell3=r.insertCell();
    var cell4=r.insertCell();
    var cell5=r.insertCell();
    var cell6=r.insertCell();
    var cell7=r.insertCell();
    
    cell1.innerHTML=user[i].uname;
    cell2.innerHTML=user[i].pass;
    cell3.innerHTML=user[i].fname;
    cell4.innerHTML=user[i].lname;
    cell5.innerHTML=user[i].email;
    cell6.innerHTML=user[i].gender;
    cell7.innerHTML=user[i].location;
}
}

}
)