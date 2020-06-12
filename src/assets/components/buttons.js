export default {
    data:[
    {
      color:"#f5f5dc",
      dark:true,
      preview:`<div class="button--simple"><button>Button</button></div>`,
      code:{
        html:
`<div class="button--simple">
    <button>Button</button>
</div>`,
        css:
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
.button--simple{
    --color: #FFF;
    --button-height: 4px;
    position: relative;
    z-index: 0;
}
.button--simple button{
    all:unset;
    position: relative;
    font-family: "Lato",sans-serif;
    background-color:#fcba03;
    padding: 20px 40px;
    color: var(--color);
    -webkit-text-fill-color: var(--color);
    font-size: 25px;
    border-radius: 100px;
    cursor: pointer;
    transition: top,bottom,background-color, 0.15s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 1;
}
.button--simple::after{
    content: "";
    background-color: #DDA300;
    position: absolute;
    top: var(--button-height);
    bottom: calc(-1 * var(--button-height));
    left: 0;
    right: 0;
    top: var(--button-height);
    border-radius: 500px;
    z-index: -1;
}
.button--simple:active{
    top: calc(2 * var(--button-height));
}
.button--simple:active::after{
    top:0;
    bottom: 0;
}`
      }
    },
    {
      color:"#21695D",
      preview:`<button class="button--profile">Button</button>`,
      code:{
        html:
`<button class="button--profile">Button</button>`,

        css:
`.button--profile {
    all: unset;
    --font-color: #fff;
    background-color: #21695D;
    color: var(--font-color);
    border-style: solid;
    border-width: 2px;
    border-color: #fff;
    width: 200px;
    height: 75px;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 28px;
    letter-spacing: 4px;
    z-index: 2;
    transition: color 0.2s ease-in-out;
    -webkit-text-fill-color: var(--font-color);
}
.button--profile:hover {
    cursor: pointer;
    color: #21695D;
    --font-color: #21695D;
    transition: background-color 0s ease-in-out 0.2s;
    background-color: #fff;
}
.button--profile::before {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    height: 0px;
    content: "";
    background-color: #fff;
    z-index: -1;
    transition: height 0.2s ease-in-out;
}
.button--profile:hover::before {
    height: 75px;
}`
        }
    },
    {
        color:"#7fffd4",
        dark:true,
        preview:`<div class="button--slide"><div class="button--slide__outer">   <div class="button--slide__switch on" id="button--slide__switch"></div></div></div>`,
        code:{
            html:
`<div class="button--slide">
    <div class="button--slide__outer">   
        <div class="button--slide__switch on" id="button--slide__switch"></div>
    </div>
</div>`,
            css:
`.button--slide{
    width: 110px;
    height: 190px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    z-index: 1;
    position: relative;
}
.button--slide::after{
    --button-height: 4px;
    content: "";
    position: absolute;
    top: var(--button-height);
    bottom: calc(-1 * var(--button-height));
    left: 0;
    right: 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    background-color: #Efefef;
    border-radius: 5px;
    z-index: 0;
}
/*Outer demarcation*/
.button--slide__outer{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #FFF;
    border-radius: 5px;
    z-index: 2;
}
/*Sliding area*/
.button--slide__switch{
    width: 40%;
    height: 53%;
    border-radius: 5px;
    position: relative;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.3), 0 0 5px rgba(0,0,0,0.1);
    cursor: pointer;
}
.button--slide__switch.on{
    background-color: #cbffcd;
}
.button--slide__switch:not(.on){
    background-color:#FFCBCB;
}
/*Inner demarcation*/
.button--slide__switch::after{
    content: "";
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(0,0,0,0.1);
}
/*Toggle bar*/
.button--slide__switch::before{
    content: "";
    position: absolute;
    height: 15%;
    left: 0;
    right: 0;
    border-radius: 5px;
    background-color: #fcfcfc;
    box-shadow: inset 0 0 2px rgba(0,0,0,0.1);
    transition: top 0.1s ease-in-out;
}
.button--slide__switch.on::before{
    top: 0;
}
.button--slide__switch:not(.on):before{
    top: 85%;
}`,
            js:
`const button = document.getElementById("button--slide__switch");
button.addEventListener("click",function(){
    button.classList.toggle("on");
})`
        }
    }]

}