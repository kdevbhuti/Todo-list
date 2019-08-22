let ol = document.getElementById('list');

let li = ol.children

//add element from text
let addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)


function addItem(){
    var input = document.getElementById('input')
    var item = input.value  //get the value in string form, that means we can print it inside the consol

    if(item === ''){
        console.log('enter a element')
    }else{
        
        
        //ol = document.getElementById('list') define aboup
        var textnode = document.createTextNode(item)  //textnode treat as clipbord which we have to past in side the <li> and we can't print this in consol
    
        //creating a new list item <li>
        let newli = document.createElement('li')
    
        //create a checkbox
        let newcheckbox = document.createElement('input') //define a input log 
        newcheckbox.type = 'checkbox'                   //define which input type
        newcheckbox.setAttribute('id', 'check')
    
    
        //create label
        let newlevel = document.createElement('label')
        newlevel.setAttribute('for', 'item')
    
        
            
        
        ol.appendChild(newlevel)
        newli.appendChild(newcheckbox) //insert checkbox to <li>
        newlevel.appendChild(textnode)  //insert textnort(string content) to level
        newli.appendChild(newlevel)     //insert level to <li>
        ol.insertBefore(newli, ol.childNodes[0])
        
        //visual effects
      setTimeout(() => {
        newli.className = 'visual';
      }, 3);
        
        input.value = '' //empty the text id = /input
    
    

    }
    
}


//remove checked  elements
let removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)



function removeItem(){
    for (let index = 0; index < li.length; index++) {  
        
        while (li[index] && li[index].children[0].checked) { //checking it self and its child for checked or unchecked
            ol.removeChild(li[index])
        }
        
    }
}



//For remove all todo
let removeAllButton = document.getElementById('removeall')
removeAllButton.addEventListener('click', removeAll)


function removeAll(){
    
    for (let index = 0; index < li.length; index++) {
        li[index].remove()
        
    }
}