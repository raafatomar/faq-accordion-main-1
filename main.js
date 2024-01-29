
const qs = document.querySelectorAll('.q');
    qs.forEach(element => {
        element.addEventListener('click',()=>{
            
            
            const btn = element.querySelector('.btn');
            if( btn.classList == 'active'){
                btn.classList.toggle('active')
            }else{
                btn.classList.toggle('active')  
            }
            
            const p = element.querySelector('.p');
                if( p.classList == 'active'){
                    p.classList.toggle('active')
                }else{
                    p.classList.toggle('active')
                }
                    
                const icon = element.querySelector('.fa-solid');
                if( icon.classList == 'fa-solid fa-plus'){
                    icon.classList.replace('fa-plus','fa-minus')
                }else{
                    icon.classList.replace('fa-minus','fa-plus')
                }
        })
    })
    


