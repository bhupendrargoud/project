murl="http://localhost:8080/"
var train={no:"",na:"",so:"",de:"",fa:""};
pa ="<table align=center><tr><th>Sl no</th><th>NAME</th><th>Age</th><th>Gender</th><th>Fare</th></tr>";
var date;
var pacd;
var tt_fa=0;
var p_c=0;
var PNR="";
var count=100;
var ticketdata="";
var d_tp="\nSeat.no\t Name\t\t\t\t\tAge\tGender\tFare\n";
var d_tt="";   
 var ticket="*******************************************************************";  
   
  var clss="SL";

  varhttp://18.209.87.19:90"10.10.0.168:8080"

   
   
   

////////////////////////////////////////////////////////////////////////////////////////////////
 //users


        function sign_in(){
            console.log("sign in");

                userid=document.getElementById("uid").value.toUpperCase();
             //   userp=document.getElementById("pswd").value;

                if(verfy_mob(userid))
                {
                url=murl+"user/get_user_num/"+userid;
                gt(url);
         }
               else if(verfy_eml(userid))
                {
                    url=murl+"user/get_user_email/"+userid;
                    gt(url);
                }
                else{
                    url=murl+"user/get_user_by_uid/"+userid; 
                    gt(url);
                }



                function gt(url) {
                    
                
                let fr=fetch(url,{method: 'GET'})
                fr.then(function (response) {
                return response.json();
            })
            .then(data => {
                console.log("success")
                console.log(data.paswd);
                append(data);    
            })
            .catch(function (err) {
            console.log('error: ' + err);
            alert("invalid User ID");
            });

        }


            function append(data) 
                {
                    console.log(data.paswd);
                  //  if (userp==data.paswd) 
                    {
                        console.log("user login sucessfull");
                        alert("login sucessful")
                        window.location.replace("train_disp.html");
                    }
                 /* else 
                 {
                    alert("invalid password");
                    }*/
                
                
                }


        }

     //-----------------------------------------------------------------------------------


            function sign_up(){

                console.log("sign up");
                var us = document.getElementById("suid").value.toUpperCase();
                var dob = document.getElementById("sdob").value;
                var dobi=dob.toString();

                var nam = document.getElementById("sfn").value.toUpperCase();
                var mob= document.getElementById("smbn").value;
                var em= document.getElementById("sem").value.toUpperCase();
                var idp= document.getElementById("sid").value;
                var ps = document.getElementById("spswd").value;
               var con=false;
               var con1=false;
               if(verfy_mob(mob))
               {
                   con=true;
               }
               else
               {
                   alert("Enter a valid mobile number")
               }

               if(verfy_eml(em))
               {
                   con1=true;
               }
               else
               {
                   alert("Enter a valid Email ID")
               }

                

                var data = 
                    {
                        "usid":us,
                    "dob":dobi,
                    "name":nam,
                    "pnum":mob,
                    "email":em,
                    "idprof":idp,
                    "paswd":ps
                        
                    }
                
            


                let options = {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                }
            
                if (con && con1) {
                    
                
                let fres = fetch(murl+"user/save",options);
                fres.then(res => res.json()).then(d => {
                    console.log("success"+ d);
                   
                    alert("registered sucessfully");
                })

                }
               
                
            }



    //-------------------------------------------------------------------------------------------------

            function get_user() 
            {
                console.log("get user");

                let fres = fetch(murl+"user/get_all_user");
                fres.then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        appendData(data);
                    })
                    .catch(function (err) {
                        console.log('error: ' + err);
                    });

                    
                function appendData(data) {
                    
                    table="<table align=center><tr><th>User ID</th><th>NAME</th><th>DOB</th><th>MOBILE_NO</th><th>Email</th><th>ID_No</th></tr>";
                    for (var i = 0; i < data.length; i++) {
                        table+="<tr><td>"+data[i].usid+"</td><td>"+data[i].name+"</td><td>"+data[i].dob+"</td><td>"+data[i].pnum+"</td><td>"+data[i].email+"</td><td>"+data[i].idprof+"</td></tr>";

                    }
                    table+="</table>"
                
                    document.getElementById("userdata").innerHTML=table;
                    
                }      
            
            }


         //----------------------------------------------------------------------------------------------           

            function del_user()
            {


                console.log(" delete user");

                var tr=document.getElementById("u_dlt").value;
                let url=murl+"user/delete_id/"+tr;

                let fr= fetch(url,{method: 'DELETE'})
                .then(function (d) {
                    console.log("success"+ d)
                    alert("User deleted sucessfully");
                    
                    var url="showusers.html";
                window.location.replace(url);
                   
                })
                .catch(function (err) {
                    console.log('error: ' + err);
                    alert("invalid User ID");
                });

            }


///////////////////////////////////////////////////////////////////////////////////////////////////.

//Admin user

           

            function sign_inA() {

                console.log("sign in admin");

                var ua=document.getElementById("uid").value ;
              var pa=document.getElementById("pswd").value ;
               
             //  var ua="admin";
             //  var pa="a@123";
            
                
                if(ua=="admin" && pa=="a@123")
                {
                    var url="admin.html";
                window.location.replace(url);
              
                console.log("admin login");
                }else
                {
                    alert("Invalid data XXX")
                }
            }

///////////////////////////////////////////////////////////////////////////////////////////////////.
    
//Trains

            function add_train(){

                console.log("add train");
                var t_no = document.getElementById("tr_no").value;
                var t_name= document.getElementById("tr_na").value;
                var t_source= document.getElementById("tr_so").value;
                var t_desti= document.getElementById("tr_de").value;
                var t_fare= document.getElementById("tr_fa").value;
            

                var data =
                    {

                        "trainNo": parseInt(t_no),
                        "trainName": t_name,
                        "source": t_source,
                        "destination": t_desti,
                        "fare": parseInt(t_fare)
                    
                    }

                let options = {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                }

                let fres = fetch(murl+"train/save_train",options);
                fres.then(res => res.json()).then(d => {
                    console.log("success"+ d);
                    alert("Train added sucessfully");

                    var url="showtrains.html";
                window.location.replace(url);
                    
                })
            }


    //-------------------------------------------------------------------------------------------------


            function show_trains(){

                console.log("Show trains");
                    let fres = fetch(murl+"train/get_all_trains");
                    fres.then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            appendData(data);
                        })
                        .catch(function (err) {
                            console.log('error: ' + err);
                        });

                        
                    function appendData(data) {
                        
                        table="<table align=center><tr><th>TRAIN_NO</th><th>TRAIN_NAME</th><th>SOURCE</th><th>DESTINATION</th><th>TICKET_PRICE</th><th>SEATS_AVAILABLE</th></tr>";
                        for (var i = 0; i < data.length; i++) {
                            table+="<tr><td>"+data[i].trainNo+"</td><td>"+data[i].trainName+"</td><td>"+data[i].source+"</td><td>"+data[i].destination+"</td><td>"+data[i].fare+"</td><td>"+Math.floor(gRN()/5000)+"</td></tr>";

                        }
                        table+="</table>"
                    
                        document.getElementById("traindata").innerHTML=table;
                        
                    }         
            }


    //-------------------------------------------------------------------------------------------------


            function delete_train(){

                console.log("delete train");
                var tr=document.getElementById("tr_dlt").value;
                let url=murl+"train/delete_trainNo/"+tr;

                let fr= fetch(url,{method: 'DELETE'})
                .then(function (d) {
                    console.log("success"+ d)
                    alert("Train deleted sucessfully");
                    var url="showtrains.html";
                window.location.replace(url);
                   
                })

            }

    
    //-------------------------------------------------------------------------------------------------

 
            function get_train()
            {
                console.log("get train");
                
                var tr=document.getElementById("tr_no").value;
                    date=document.getElementById("da_te").value;
                    console.log(date);
                    clss=document.getElementById("bt_cl").value;
                console.log(date);
                if (date=="") {
                    alert("Choose Travel date")
                } else if(tr=="")
                {
                    alert("Choose Train Number")
                }
                else{
            
                console.log(tr)
                
            
            
                
                let url=murl+"train/get_train_by_no/"+tr;
            
                    let fr=fetch(url,{method: 'GET'})
                    fr.then(function (response) {
                    return response.json();
                })
                .then(data => {
                    console.log("success")
                    append(data);    
                })


                }


                function append(data) {
                        

                    switch (clss) {
                        case "2S":train.fa=(data.fare)*70/100;
                            break;
                        case "CC":train.fa=(data.fare)*150/100;
                            break;
                        case "FC":train.fa=(data.fare)*200/100;
                            break;
                    
                        default:train.fa=(data.fare)
                            break;
                    }


                    train.no=data.trainNo;
                    train.na=data.trainName;
                    train.so=data.source;
                    train.de=data.destination;
                    
                
                    console.log(train);
                    
                            table="<table align=center><tr><th>TRAIN_NO</th><th>TRAIN_NAME</th><th>SOURCE</th><th>DESTINATION</th><th>CLASS</th><th>FARE</th></tr>";
                            
                                table+="<tr><td>"+data.trainNo+"</td><td>"+data.trainName+"</td><td>"+data.source+"</td><td>"+data.destination+"</td><td>"+clss+"</td><td>"+train.fa+"</td></tr>";
                            table+="</table>"
                          
                            document.getElementById("trdata").innerHTML=table;
            
                }  
                
            }
//===========================--------------------------------------------------------------------


            function trainsd()
            {
                console.log("get bysource");
                var sr=document.getElementById("bt_sr").value;
                var de=document.getElementById("bt_de").value;
                var srdata=[];
               
                    
                if(sr=="" || de=="")
                {
                    alert("enter sorce and destination")
                }
                else
                {
                
                let url=murl+"train/get_train_by_source/"+sr;
            
                    let fr=fetch(url,{method: 'GET'})
                    fr.then(function (response) {
                    return response.json();
                })
                .then(data => {
                    console.log("success")
                    append1(data);  
                    console.log(data)  ;
                })





                let url1=murl+"train/get_train_by_de/"+de;
            
                    let fr1=fetch(url1,{method: 'GET'})
                    fr1.then(function (response) {
                    return response.json();
                })
                .then(data => {
                    console.log("success")
                    append(data);  
                    console.log(data)  ;  
                })


                }







                function append(data) {
                        
                    table="<table align=center><tr><th>TRAIN_NO</th><th>TRAIN_NAME</th><th>SOURCE</th><th>DESTINATION</th><th>TICKET_PRICE</th></tr>";
                    for (var i = 0; i < data.length; i++) {
                        for (let j = 0; j < srdata.length; j++) {
                           if(data[i].trainNo==srdata[j])
                            {
                                table+="<tr><td>"+data[i].trainNo+"</td><td>"+data[i].trainName+"</td><td>"+data[i].source+"</td><td>"+data[i].destination+"</td><td>"+data[i].fare+"</td></tr>";

                            } 
                        
                        }
                        
                    }
                    table+="</table>"
                
                    document.getElementById("trdatasd").innerHTML=table;
                    
                } 







               function append1(data){
                for (var i = 0; i < data.length; i++) {
                   srdata[i]=data[i].trainNo;
                }
               } 
            }




                

///////////////////////////////////////////////////////////////////////////////////////////////////.



    
    
    //-------------------------------------------------------------------------------------------------

                var pd_tt="seat.no &ensp; &ensp; Name &emsp;&emsp; &emsp;&emsp; Age &emsp; Gender &emsp; Fare"
                var cc=clss+"/"+Math.floor(gRN()/100000)+"/"
                var cn=Math.floor(gRN()/100000);
                var ss=["SL","SU","LB","MB","UB"];
                var sse="";

                function add_pa() 
                {
                    console.log("add passenger");

                  if (train.no=="") {
                        alert("Choose Train");
                    }
                    else
                    { 
                        tab="<table align=center id='pa_t'><tr><th>Sl no</th><th>NAME</th><th>Age</th><th>Gender</th><th>Fare</th></tr>";
                            var pac=document.getElementById("pa_no").value;
                            var p_fa=train.fa;
                            pacd=parseInt(pac);
                            if (pacd>p_c) {
                                p_c++;
                                p_na=document.getElementById("pa_na").value.toUpperCase();
                                var p_nas=p_na;
                                var l=p_na.length;
                                console.log(l);
                                
                                for (let index = 0; index < 8-l; index++) {
                                p_nas+="&nbsp;";   
                                }
                                p_ag=parseInt(document.getElementById("pa_ag").value);
                                p_gn=((document.getElementById("pa_gn").value).toUpperCase()).charAt(0);
                                
                                if (p_ag<=12) {
                                    p_fa=p_fa*50/100; 
                                }else if (p_ag>60) {
                                    p_fa=p_fa*60/100;
                                }

                                if (p_gn=='F') {
                                    p_fa=p_fa*75/100;
                                    
                                }
                                sse=cc+""+seat_no(p_c);
                                d_tp+= sse +"\t"+p_na+"\t\t\t\t\t"+p_ag+"\t"+p_gn+"\t"+p_fa+"\n";
                                tt_fa +=p_fa;
                                tab+="<tr> <td>"+ p_c +"</td><<td>"+p_na+"</td><td>"+p_ag +"</td><td>"+p_gn+"</td> <td>"+p_fa+"</td></tr>";
                                pa+="<tr> <td>"+ p_c +"</td><<td>"+p_na+"</td><td>"+p_ag +"</td><td>"+p_gn+"</td> <td>"+p_fa+"</td></tr>";
                                tab+="</table>"
                                pd_tt+="<br>"+sse+" &emsp; &emsp;"+p_nas+" &emsp; &emsp; "+p_ag+" &emsp; &emsp;"+p_gn+" &emsp; &ensp; &emsp;"+p_fa;
                                   
                                if (p_c==pacd) {
                                  
                                    show_pa();
                                    }
                                    else{
                                    document.getElementById("padata").innerHTML=tab;
                                    }


                                

                                    
                            }
                            else{
                                alert(pacd +" passengers added sucessfully");
                                
                            }
                    }

                    function seat_no(mn) {
                        console.log("seat");
                        var se;
                          mn=mn-1;
                          if(mn>5)
                          {
                              mn=mn-5
                          }
                          se=ss[mn]+"/"+(cn+p_c)
                        
                        return se
                    }
                }

    
    
    //-------------------------------------------------------------------------------------------------


                function show_pa() {
                    console.log("show passenger");
                    tab+="</table>"
                    ttf();
                                document.getElementById("padata").innerHTML=pa;
                }

    

                function ttf() {
                    book_ticket();
                    document.getElementById("tf").innerHTML=tt_fa;
                }
    
    //-------------------------------------------------------------------------------------------------



                function book_ticket() 
                {
                   
                            PNR=get_pnr();
                           

                       

                
                }
                function add_data_tt() {
                   
                    d_tt+="Train Number\t\t:"+train.no+"\n";
                    d_tt+="Train Name\t\t:"+train.na+"\n";
                    d_tt+="From\t\t\t:"+train.so+"\n";
                    d_tt+="To\t\t\t:"+train.de+"\n";
                    d_tt+="\n"+d_tp+"\n";
                    d_tt+="\n\tTotal Fare : "+tt_fa+"\n";

                }
    
    
    //-------------------------------------------------------------------------------------------------



                function get_pnr() 
                {
                    var m=189;
                    console.log("Get pnr");
                    var pnr=train.so.charAt(0);
                    pnr+=train.de.charAt(0);
                    pnr+=date;
                   
                    pnr+=m;

                        ticket="<br>PNR : "+pnr+"<br>"
                        ticket+="Tran Number : "+train.no+"<br>Train Name : "+train.na+"<br>From : "+train.so+"<br>To : "+train.de+"<br>Date : "+date;
                        ticket+="<br>"+pd_tt;
                        ticket+="<br> <br> Total Fare = "+tt_fa;
                           
                            add_data_tt();
                       

                           
                            PNR=pnr;
                            console.log(PNR);
                         
                            return pnr;



                           
                `   `}

            
    
    
    //-------------------------------------------------------------------------------------------------


                function download_ticket()
                { 
                    console.log("download ticket");
                   PNR= localStorage.getItem('PNR');
                   var text=localStorage.getItem('tcdw');
                   
                            
                            dwn(text);

                    
                }


    
    
    //-------------------------------------------------------------------------------------------------


                function download(filename, text) {
                    console.log("download");

                    var element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                    element.setAttribute('download', filename+".txt");
                
                    element.style.display = 'none';
                    document.body.appendChild(element);
                
                    element.click();
                
                    document.body.removeChild(element);
                }

                function dwn(data){

      
                    console.log(data)
                   var example = html2pdf().from(data,"element") 
                   console.log(example)
                   example.save()
                }
    
    //-------------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////


                function pym()
                {
                    
                  
                      
                    alert("Payement successful")
                    ticket=localStorage.getItem('tcsh')
                    console.log(ticket)
                    dwn(ticket);
                    document.getElementById("tcdata").innerHTML=ticket;
                    

                }
//-------------------------------------------------------------------------------------------------
                
/////////////////////////////////////////////////////////////////////////////////////////////////////////


                    function gRN()
                    {
                        console.log("random number")
                        var rand = Math.floor(Math.random() * 1000000) + 1;
                    return rand;
                    }

//----------------------------------------------------------------------------------

                    function verfy_mob(a) 
                    {


                        console.log("verfy mob")
                        if(a=="") {

                            return false;
                        }
                        if(isNaN(a)){
                        
                            return false;
                        }
                        if(a.length<10){
                        
                            return false;
                        }
                        if(a.length>10){
                        
                            return false;
                        }
                        if((a.charAt(0)!=9) && (a.charAt(0)!=8) && (a.charAt(0)!=7)){
                        
                            return false;
                        }
                        else{
                        return true;
                        }
                    }

//-----------------------------------------------------------------------------------------------------------------

 
                        function verfy_eml(input)
                        {
                            console.log("verfy email");
                        var validRegex = 
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                        if (input.match(validRegex)) {


                        console.log("Valid email address!");
                        
                        return true


                        } else {


                        console.log("InValid email address!");
                        
                        return false;


                        }
                            

                        }


//-----------------------------------------------------------------------------------------------------------------

                       

                       

//-----------------------------------------------------------------------------------------------------------------
