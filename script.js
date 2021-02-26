const qts = [
    {name: 'Nelson Mandela ', qoute:'The greatest glory in living lies not in never falling, but in rising every time we fall.'},
   
    {name: 'Walt Disney', qoute:'The way to get started is to quit talking and begin doing'},

    {name: 'Steve Job', qoute:'Your time is limited, so do not waste it living someone elses life. Don not be trapped by dogma – which is living with the results of other peoples thinking'},

    {name: 'Eleanor Roosevelt', qoute:'If life were predictable it would cease to be life, and be without flavor.'},

    {name: 'Oprah Winfrey', qoute:'If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.'},

    {name: 'James Cameron', qoute:'If you set your goals ridiculously high and it is a failure, you will fail above everyone elses success.'}
];

const dQoutes = document.querySelector('#qoutes');

const personNum = document.querySelector('#pNum');

const btn = document.querySelector('#btn');


btn.addEventListener('click', ()=>{

let ran = Math.floor(Math.random()*qts.length);


    dQoutes.innerHTML = qts[ran].qoute;

    // console.log();

    personNum.innerHTML = 'Qoute by '+ qts[ran].name;


});


