let number =1
while (number<=12){
    console.log(number)
    number+=2
}
let n = 1
let ni = ""
let np = ""
while(n<=12){
    if(n%2==0){
        np += n+","
    }
    else{
        ni+=n+","
    }
    n=n+1
}
console.log(ni,np)