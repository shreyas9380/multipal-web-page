
$(document).ready(function() { 
    $("a").on('click', function(event) { 
        if (this.hash !== "") { 
            event.preventDefault(); 
            const hash = this.hash 
            $('html, body').animate({ 
                scrollTop: $(hash).offset().top 
            }, { 
                duration: 1000, 
                easing: "easeOutBounce", 
                complete: function() { 
                    window.location.hash = hash; 
                } 
            }); 
        } 
    }); 
});
