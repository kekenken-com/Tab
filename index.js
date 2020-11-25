(function(){
    const $doc = document;
    const $tab = $doc.getElementById('js-nav');
    const $nav = $tab.querySelectorAll('[data-set]');
    const $content = $tab.querySelectorAll('[data-content]');
    
    

    const init = function(){
        $content[0].style.display = 'block';
    };
    init();

    
    const handleClicker = function(e){
        e.preventDefault();

        const $this = e.target;
        const targetVal = $this.dataset.set;
        console.log("handleClicker -> targetVal", targetVal);

        let index = 0;
        const navLength = $nav.length;

        while(index < navLength){
            $content[index].style.display = 'none';
            $nav[index].classList.remove('is-active');
            index++;
        };

        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add('is-active');
        
        
    };

    let index = 0;
    const navLength = $nav.length;
    while(index < navLength){
        $nav[index].addEventListener('click', function(e) {
            handleClicker(e);  
        });
        index++;
    };



})();