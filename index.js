const cards =  [
    {
      text: "-28",
      url: './img/01.gif',
      order: 1009,
    },
    {
      text: "-27",
      url: './img/02.gif',
      order: 1010,
    },
    {
      text: "-26",
      url: './img/03.gif',
      order: 1011,
    },
    {
      text: "-25",
      url: './img/04.gif',
      order: 1012,
    },
    {
      text: "-24",
      url: './img/05.gif',
      order: 1013,
    },
    {
      text: "-23",
      url: './img/06.gif',
      order: 1014,
    },
    {
      text: "-22",
      url: './img/07.gif',
      order: 1015,
    },
    {
      text: "-21",
      url: './img/08.gif',
      order: 1016,
    },
    {
      text: "-20",
      url: './img/09.gif',
      order: 1017,
    },
    {
      text: "-19",
      url: './img/10.gif',
      order: 1018,
    },
    {
      text: "-18",
      url: './img/11.gif',
      order: 1019,
    },
    {
      text: "-17",
      url: './img/12.gif',
      order: 1020,
    },
    {
      text: "-16",
      url: './img/13.gif',
      order: 1021,
    },
    {
      text: "-15",
      url: './img/14.gif',
      order: 1022,
    },
    {
      text: "-14",
      url: './img/15.gif',
      order: 1023,
    },
    {
      text: "-13",
      url: './img/16.gif',
      order: 1024,
    },
    {
      text: "-12",
      url: './img/17.gif',
      order: 1025,
    },
    {
      text: "-11",
      url: './img/18.gif',
      order: 1026,
    },
    {
      text: "-10",
      url: './img/19.gif',
      order: 1027,
    },
    {
      text: "-9",
      url: './img/20.gif',
      order: 1028,
    },
    {
      text: "-8",
      url: './img/21.gif',
      order: 1029,
    },
    {
      text: "-7",
      url: './img/22.gif',
      order: 1030,
    },
    {
      text: "-6",
      url: './img/23.gif',
      order: 1031,
    },
    {
      text: "-5",
      url: './img/24.gif',
      order: 1101,
    },
    {
      text: "-4",
      url: './img/25.gif',
      order: 1102,
    },
    {
      text: "-3",
      url: './img/26.gif',
      order: 1103,
    },
    {
      text: "-2",
      url: './img/27.gif',
      order: 1104,
    },
    {
      text: "-1",
      url: './img/28.gif',
      order: 1105,
    },
    {
      text: "0",
      url: './img/29.gif',
      order: 1106,
    },
  ];

window.addEventListener('load', (event) =>{

    const date = new Date();
    const month = date.getMonth()+1;
    let day;
    if (date.getDate()>=1 && date.getDate()<10) {
        day = `0${date.getDate()}`;
    } else {
        day = date.getDate();
    };

   // const today = +`${month}${day}`;

    const today = 100000
    let html ='';

    cards.forEach((eachCard)=>{
        if (eachCard.order>today) {
            html+=`
            <div class='card-container' >
              <div class='card'>
               <img src='${eachCard.url}'/>
              </div>
               <div class='card-back grey' id=${eachCard.order}>
                ${eachCard.text}
               </div>
            </div>`
        } else {
            html+=`
            <div class='card-container' >
              <div class='card'>
               <img src='${eachCard.url}'/>
              </div>
               <div class='card-back green' id=${eachCard.order}>
                ${eachCard.text}
               </div>
            </div>`
        }
     
    });
    
    document.querySelector('#grid').innerHTML = html;


    const cardComponentsBack = Array.from(document.querySelectorAll('.card-back',));
    cardComponentsBack.forEach((card)=>{
        card.addEventListener('click', revealCard);
    })

    function revealCard(event) {
        if (event.target.id > today) {
            alert('Come back later')
        } else {
         document.getElementById(event.target.id).classList.add('hidden')
        }
     }

    const cardComponentsFront = Array.from(document.querySelectorAll('.card',));
    cardComponentsFront.forEach((card)=>{
        card.addEventListener('click', coverCard);
    })

    function coverCard(event) {
        const card = event.target.parentElement
        const cardContainer = card.parentElement;
        cardContainer.querySelector('.card-back').classList.remove('hidden');
     }

});

