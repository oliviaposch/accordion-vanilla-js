const accHD = document.getElementsByTagName('h2');
const ac = document.getElementsByClassName('ac');
const subACC = document.getElementsByClassName('sub-ac');
const subAccBody = document.getElementsByClassName('sub-ac-body');
const accSHD = document.getElementsByTagName('h3');

//eventListener accordion items
for (let index = 0; index < accHD.length; index++) {
    accHD[index].addEventListener('click', toggleItem, false);
}

//accordeon items
function toggleItem() {
    let itemClass = this.parentNode.className;
   
    for (i = 0; i < ac.length; i++) {
        ac[i].className = 'ac closed';
    }
    
    if (itemClass == 'ac closed' ){
        this.parentNode.className = 'ac';
    } 
   

    if (itemClass.className !== 'ac closed' ) {
        
        for (i = 0; i < subACC.length; i++) {
            subACC[i].classList.add('closed');
        }

        //sub-accordeon firstchild item open
        this.parentNode.children[1].className = 'sub-ac';

        //call function toggleSubItem for sub-accordion items
        for (let index = 0; index < accSHD.length; index++) {
            accSHD[index].addEventListener('click', toggleSubItem, false);
        }
        
    }  
}

//accordeon sub-accordeom items
function toggleSubItem() {
    let itemClass = this.parentNode.className; 
   
    for (i = 0; i < subACC.length; i++) {
        subACC[i].className = 'sub-ac closed';
    }
    if (itemClass == 'sub-ac closed') {
        this.parentNode.className = 'sub-ac';
    }
}


       

      
