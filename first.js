const colorButton = document.querySelectorAll(".box");
const body = document.querySelector("body");


colorButton.forEach(function(button){
    button.addEventListener('click', function(e) {  
        console.log(e);   
        console.log(e.target);

        if(e.target.id === 'orange'){          
            body.style.backgroundColor = 'orange';
        }else if(e.target.id === 'black'){          
             body.style.backgroundColor = e.target.id;
             
        }
        else if(e.target.id === 'red'){          
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow'){          
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'pink'){          
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'blue'){          
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'brown'){          
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'green'){          
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'violet'){          
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'purple'){          
            body.style.backgroundColor = e.target.id;
        }
    });
});

