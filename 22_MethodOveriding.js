//Overriding : Overriding is a feature that allows a subclass to provide a specific implementation of a method 
// that is already defined in its superclass. In the example below, class SBI inherits from class Bank, and 
// it can override the roi method if needed.

class Bank{
roi(){
    return 0;
}

}

class SBI extends Bank{
roi(){
    return 7.7;
}
}
class PNB extends Bank{
roi(){
    return 8.5;
}
}

sbiObj = new SBI();
console.log(sbiObj.roi());

pnbObj = new PNB();
console.log(pnbObj.roi());