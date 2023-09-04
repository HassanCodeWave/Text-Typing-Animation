
        const text = document.querySelector(".sec-text");
      
        const textLoad = () => {
      
          setTimeout(() => {
      
            text.textContent = "Fine Arts";
      
          }, 0);
      
          setTimeout(() => {
      
            text.textContent = "Antiques";
      
          }, 4000);
      
          setTimeout(() => {
      
            text.textContent = "Fashion";
      
          }, 8000);
    
          setTimeout(() => {
      
           text.textContent = "Gadgets";
    
          }, 12000);
    
          setTimeout(() => {
      
           text.textContent = "Watches";
    
          }, 16000);
    
          setTimeout(() => {
      
           text.textContent = "Jewelry";
    
          }, 20000);
          
          setTimeout(() => {
      
          text.textContent = "Vehicles";
    
          }, 24000);
          
          setTimeout(() => {
      
          text.textContent = "Add-ons";
    
          }, 28000);
    
        }
        textLoad();
        setInterval(textLoad, 32000);