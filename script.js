document.addEventListener('DOMContentLoaded', () => {
 
    const codes = document.querySelectorAll('.code-container .code');


    if (codes.length > 0) {
        codes[0].focus();
    }

    codes.forEach((code, idx) => {
      
        code.addEventListener('input', (e) => {
           
            if (e.target.value.length > 1) {
                e.target.value = e.target.value.slice(0, 1);
            }
            
          
            if (e.target.value !== '' && idx < codes.length - 1) {
      
                codes[idx + 1].focus();
            }
        });

     
        code.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                
                if (idx > 0) {
             
                    e.preventDefault(); 
                    
   
                    if (e.target.value === '') {
                        codes[idx - 1].value = '';
                        codes[idx - 1].focus(); 
                    } else {

                        e.target.value = '';
                    }
                } 

            }
        });
    });
});