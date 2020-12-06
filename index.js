function calculate(n1,n2,options){
    if(options.operation=="sum"){
        return n1+n2;
    }
    if(options.operation=="difference"){
        return n1-n2;
    }
    if(options.operation=="product"){
        return n1*n2;
    }
    if(n2!==0){
        if(options.operation=="divide"){
            return n1/n2;
        }
        if(options.operation=="remainder"){
            return n1%n2;
        }
    }
    return "Invalid operation";
}

module.exports.calculate = calculate;