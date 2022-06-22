let ulTasks=$('#ulTasks');
let btnAdd=$('#btnAdd');
let btnClear=$('#btnClear');
let inpNewTask=$('#inpNewTask');

let btnReset=$('#btnClear');
let btnCleanup=$('#btnCleanup');

let btnSort=$('#btnSort');
console.log("hii");


//btnAdd.click(()=>{
  function addItem(){  
    // getting value from input box
       console.log(inpNewTask);
   console.log(inpNewTask.val()); 
      
      
      let value=inpNewTask.val().trim();
      console.log("value is ",value);
      
      console.log("value len is ",value.length);
      if(value.length>0){
          
      
    
    // creating new li element using jquery
    let listItem=$('<li>',{
        'class':'list-group-item',
        text:inpNewTask.val()
    });
    
    
    

    
    
    // appeding new li in ul
    
    ulTasks.append(listItem);
    
    
    
    // making list item to disabled 
    listItem.click(()=>{
       listItem.toggleClass('done'); 
    });
 

  }
      
      else{
          alert("Please add some task")
      }
      
  }
      
      
//});




// adding using enter key

inpNewTask.keypress((e)=>{
    if(e.which==13) addItem();
});


btnAdd.click(addItem)




// btnClear

btnClear.click(()=>{
   inpNewTask.val('') 
});



// cleanup  button 

function clearDone(){
    // it selects that ulTasks which have done clss
    $('#ulTasks .done').remove()
    console.log("hi")
}


btnCleanup.click(clearDone);



// sort button



function sortTasks(){
     $('#ulTasks .done').appendTo(ulTasks)
}

btnSort.click(sortTasks);



// function toggleRset

function toggleResetBtn(enabled){
    if(enabled) btnReset.prop('disabled',false);
    else btnReset.prop('disabled',true);
}

 








inpNewTask.on('input',()=>{
    if(inpNewTask.val==''){
        console.log("gi ininde ")
        toggleResetBtn(false)
    }
    else{
        toggleResetBtn(true)
    }
})





btnReset.click(()=>{
    inpNewTask.val('')
    toggleResetBtn(false)
});