// import { sqrt } from 'mathjs'
const cal = document.getElementById('cal')


const display = document.createElement("div");
display.setAttribute('class', 'display')
cal.appendChild(display)
display.innerHTML = "0";

const screen = document.createElement("div");
screen.setAttribute('class', 'screen')
cal.appendChild(screen)
screen.innerHTML = "0";

var val=0;
var first_num=0;
var op='none';







for (var i = 1; i < 17; i++) {
    var btn = document.createElement('button')
    btn.setAttribute('class', 'btn')
    cal.appendChild(btn)
    btn.id = i
    btn.innerHTML = i

    if(i%4>0 && i<15){
        document.getElementById(i).onclick = function (){ number_Button(this)}
    }
    if(i==4)
        document.getElementById(i).onclick = () => sum(this)


    if(i==8)
        document.getElementById(i).onclick = () => sub(this)
    
    
    if(i==12)
        document.getElementById(i).onclick = () => mul(this)

    if(i==13)
        document.getElementById(i).onclick = () => clr(this)

    if(i==15)
        document.getElementById(i).onclick = () =>  ac(this)

    if(i==16)
        document.getElementById(i).onclick = () =>  equal_to(this)
        // document.getElementById(i).onclick = () =>  screen.innerHTML= math.eval(screen.innerHTML)

    
    
        if(i%4==0){
    var br = document.createElement('br')
    cal.appendChild(br)
    }
}  
document.getElementById(4).innerHTML = "+"
document.getElementById(5).innerHTML = "4"
document.getElementById(6).innerHTML = "5"
document.getElementById(7).innerHTML = "6"
document.getElementById(8).innerHTML = "-"
document.getElementById(9).innerHTML = "7"
document.getElementById(10).innerHTML = "8"
document.getElementById(11).innerHTML = "9"
document.getElementById(12).innerHTML = "X"
document.getElementById(13).innerHTML = "CLR"
document.getElementById(14).innerHTML = "0"
document.getElementById(15).innerHTML = "AC"
document.getElementById(16).innerHTML = "="

function number_Button(d){
    if(screen.innerHTML==0)
        screen.innerHTML = d.innerHTML;
    else
        screen.innerHTML += d.innerHTML;
    console.log(val);
}

function clr(d){
    
    a=screen.innerHTML ;
    if(a.length==1)
        screen.innerHTML='0'
    else
        screen.innerHTML = a.slice(0,-1);
}

function ac(d){
    screen.innerHTML='0'
    display.innerHTML='0'
    op='none'
    val=0
}

function sum(d){
    a=screen.innerHTML
    if(op == 'none'){
        op='+'
        val=Number(a)
    }else{
        switch(op){
            case '+':val=Number(val)+Number(a)
                break
            case '-':val=Number(val)-Number(a)
                break
            case '*':val=Number(val)*Number(a)
                break
            case '/':val=Number(val)/Number(a)
                break
            default:
            
        }
        op='+'
    }
    screen.innerHTML=''
    display.innerHTML=val
}

function sub(d){
    a=screen.innerHTML
    if(op == 'none'){
        op='-'
        val=Number(a)
    }else{
        switch(op){
            case '+':val=Number(val)+Number(a)
                break
            case '-':val=Number(val)-Number(a)
                break
            case '*':val=Number(val)*Number(a)
                break
            case '/':val=Number(val)/Number(a)
                break
            default:
            
        }
        op='-'
    }
    screen.innerHTML=''
    display.innerHTML=val
}

function mul(d){
    a=screen.innerHTML
    if(op == 'none'){
        op='*'
        val=Number(a)
    }else{
        switch(op){
            case '+':val=Number(val)+Number(a)
                break
            case '-':val=Number(val)-Number(a)
                break
            case '*':val=Number(val)*Number(a)
                break
            case '/':val=Number(val)/Number(a)
                break
            default:
            
        }
        op='*'
    }
    screen.innerHTML=''
    display.innerHTML=val
}

function div(d){
    a=screen.innerHTML
    if(op == 'none'){
        op='/'
        val=Number(a)
    }else{
        switch(op){
            case '+':val=Number(val)+Number(a)
            break
            case '-':val=Number(val)-Number(a)
            break
            case '*':val=Number(val)*Number(a)
            break
            case '/':val=Number(val)/Number(a)
            break
            default:
                
        }
        op='/'
    }
    screen.innerHTML=''
    display.innerHTML=val
}

function equal_to(d){
    a=screen.innerHTML
    if(op == 'none'){
        op='none'
        val=Number(a)
    }else{
        switch(op){
            case '+':val=Number(val)+Number(a)
            break
            case '-':val=Number(val)-Number(a)
            break
            case '*':val=Number(val)*Number(a)
            break
            case '/':val=Number(val)/Number(a)
            break
            default:
                
        }
        op='none'
    }
    screen.innerHTML=''
    display.innerHTML=val
}

