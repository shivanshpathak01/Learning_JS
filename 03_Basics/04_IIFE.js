(function hi (){
    console.log("DB Connected");
}) ();


( () =>{
    console.log("DB Connected twice");
}) ();    // Basically like next line of code is wrapped up to be written in brackets 


( (contact)=>{
    console.log(`DB Connected ${contact}`);
}) (`9451610211213`);
 