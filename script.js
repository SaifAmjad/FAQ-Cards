const parentDiv=document.querySelector('.faq-container');
const btn=document.querySelectorAll('.faq-toggle');
const form=document.getElementById('form');
const submit=document.getElementById('Submit');

let flag=0;


submit.onclick=function(e){
    e.preventDefault();

    const ques=form.children[0].value;
    const ans=form.children[1].value;
 
    if(!ques || !ans){
        alert('ERROR!! Empty input fields');
        return;
    }

    form.children[0].value='';
    form.children[1].value='';

    const parent=document.createElement('div')
    parent.setAttribute('class','faq');

    const h3=document.createElement('h3');
    h3.setAttribute('class','faq-title');
    h3.innerText=ques;

    const p=document.createElement('p');
    p.setAttribute('class','faq-text');
    p.innerText=ans;

    const btn=document.createElement('button');
    btn.setAttribute('class','faq-toggle');

    const i1=document.createElement('i');
    i1.setAttribute('class','fas fa-chevron-down');

    const i2=document.createElement('i');
    i2.setAttribute('class','fas fa-times');

    btn.append(i1)
    btn.append(i2);

    parent.append(h3);
    parent.append(p);
    parent.append(btn);

    parentDiv.append(parent);

    i1.addEventListener('click',()=>{
        parent.setAttribute('class','faq active');

        i2.addEventListener('click',()=>{
            parent.remove();
        })

    })
    
}



for(let i=flag;i<=parentDiv.children.length;i++){
    
        parentDiv.children[i].children[2].children[0].addEventListener('click',(e)=>{
            
            console.log(e.target.parentElement.children[1])

            const tempP=e.target.parentElement.parentElement;
            tempP.setAttribute('class','faq active')

            const remove=e.target.parentElement.children[1];
           
            remove.addEventListener('click',()=>{
    
                const parent=remove.parentElement.parentElement;
                parent.remove();
                flag=0;
                
            })
    
            
        })
    
        
}
    
    

