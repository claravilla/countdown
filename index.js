const cards =  [
    {
      text: "-28",
      url: './img/01.gif',
      day: 9,
      order: 1009,
    },
    {
      text: "-27",
      url: './img/02.gif',
      day:10,
      order: 1010,
    },
    {
      text: "-26",
      url: './img/03.gif',
      day:11,
      order: 1011,
    },
    {
      text: "-25",
      url: './img/04.gif',
      day:12,
      order: 1012,
    },
    {
      text: "-24",
      url: './img/05.gif',
      day:13,
      order: 1013,
    },
    {
      text: "-23",
      url: './img/06.gif',
      day:14,
      order: 1014,
    },
    {
      text: "-22",
      url: './img/07.gif',
      day: 15,
      order: 1015,
    },
    {
      text: "-21",
      url: './img/08.gif',
      day: 16,
      order: 1016,
    },
    {
      text: "-20",
      url: './img/09.gif',
      day: 17,
      order: 1017,
    },
    {
      text: "-19",
      url: './img/10.gif',
      day: 18,
      order: 1018,
    },
    {
      text: "-18",
      url: './img/11.gif',
      day: 19,
      order: 1019,
    },
    {
      text: "-17",
      url: './img/12.gif',
      day: 20,
      order: 1020,
    },
    {
      text: "-16",
      url: './img/13.gif',
      day: 21,
      order: 1021,
    },
    {
      text: "-15",
      url: './img/14.gif',
      day: 22,
      order: 1022,
    },
    {
      text: "-14",
      url: './img/15.gif',
      day: 23,
      order: 1023,
    },
    {
      text: "-13",
      url: './img/16.gif',
      day: 24,
      order: 1024,
    },
    {
      text: "-12",
      url: './img/17.gif',
      day: 25,
      order: 1025,
    },
    {
      text: "-11",
      url: './img/18.gif',
      day: 26,
      order: 1026,
    },
    {
      text: "-10",
      url: './img/19.gif',
      day: 27,
      order: 1027,
    },
    {
      text: "-9",
      url: './img/20.gif',
      day: 28,
      order: 1028,
    },
    {
      text: "-8",
      url: './img/21.gif',
      day: 29,
      order: 1029,
    },
    {
      text: "-7",
      url: './img/22.gif',
      day: 30,
      order: 1030,
    },
    {
      text: "-6",
      url: './img/23.gif',
      day: 31,
      order: 1031,
    },
    {
      text: "-5",
      url: './img/24.gif',
      day: 01,
      order: 1101,
    },
    {
      text: "-4",
      url: './img/25.gif',
      day: 02,
      order: 1102,
    },
    {
      text: "-3",
      url: './img/26.gif',
      day: 03,
      order: 1103,
    },
    {
      text: "-2",
      url: './img/30.gif',
      day: 04,
      order: 1104,
    },
    {
      text: "-1",
      url: './img/28.gif',
      day: 05,
      order: 1105,
    },
    {
      text: "0",
      url: './img/29.gif',
      day: 0,
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
    const today = 1020;

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
               <div class='card-back red' id=${eachCard.order}>
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

