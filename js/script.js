window.addEventListener('DOMContentLoaded',()=>{
    const tabsParent=document.querySelector('.tabheader__items'),
        tabs=document.querySelectorAll('.tabheader__item'),
        tabsContent=document.querySelectorAll('.tabcontent'),
        loader=document.querySelector('.loader')

    //Loader
    setTimeout(()=>{
        loader.style.opacity='0'
        setTimeout(()=>{
            loader.style.display='none'
        },1000)
    }, 2000);


    //Tab
    function hideTabContent(){
        tabsContent.forEach((item)=>{
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        });
        tabs.forEach((item)=>{
            item.classList.remove('tabheader__item_active')
        });
    }
    
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
      }

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event)=>{
        const target = event.target
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,index)=>{
                if(target == item){
                    hideTabContent()
                    showTabContent(index)
                }
            });
        }
    });

    //timer

    const deadline="2023-12-12"

    function getZero(num){
        if(num >= 0 && num <10){
            return `0${num}`
        }else{
            return num
        }
    }

    function getTimeRemainder(endtime){
        let days, hours,minutes,seconds;
        const timer=Date.parse(endtime)-Date.parse(new Date())
        if(timer<=0){
            days=0,
            hours=0,
            minutes=0,
            seconds=0
        }else{
            days=Math.floor(timer / (1000 * 60 * 60 * 24)),
        hours=Math.floor((timer / (1000 * 60 * 60))%24),
        minutes=Math.floor((timer / (1000* 60))%60),
        seconds=Math.floor((timer/1000) %60);
        }
        

        return{timer,days,hours,minutes,seconds,}

    }
    function setClock(selector, endtime){
        const timer=document.querySelector(selector),
        days=timer.querySelector('#days'),
        hours=timer.querySelector('#hours'),
        minutes=timer.querySelector('#minutes'),
        seconds=timer.querySelector('#seconds');

    
    
   
      function updateClock() {
    const t = getTimeRemainder(endtime);

    days.innerHTML = getZero (t.days)
    hours.innerHTML = getZero (t.hours)
    minutes.innerHTML = getZero (t.minutes)
    seconds.innerHTML = getZero (t.seconds)

    if (t.timer <= 0) {
      clearInterval(timeInterval);
    }
  }
    updateClock()
    const timeInterval = setInterval(updateClock, 1000);

}
    setClock(".timer", deadline);

//Modal

const modelTrigger= document.querySelectorAll('[data-modal]'),
      modal =document.querySelector('.modal'),
      modalCloseBtn=document.querySelector('[data-close]');

      function openModel(){
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow='hidden'
        clearInterval(modalTimeOut)
      }

      function closeModel(){
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow=''        
      }

    modelTrigger.forEach(trigger=>{
        trigger.addEventListener('click', openModel);
    });

    
    modalCloseBtn.addEventListener('click', closeModel);

      modal.addEventListener('click', (event)=>{
           if(event.target==modal){
           closeModel()
           }
      })

    document.addEventListener('keydown',(e)=>{
        if(e.code=='Escape' && modal.classList.contains('show')){
            closeModel()
        }

    })
    const modalTimeOut = setTimeout(openModel ,4000)
    

    function showModalByScroll(){
        
    }
});