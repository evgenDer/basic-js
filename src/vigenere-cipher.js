
class VigenereCipheringMachine {
    constructor(type) {
        if(type==false)
        this.type = false;
        else this.type=true;
    }
  
    
    encrypt(message, key) {
        if (!message || !key)
        throw new Error();
                else {
        key = key.toUpperCase();
        let keys=[];
        let result = "";
        let counter=0;
        let ind;
        for (let j = 0; j < alphabet.length; j++) 
            for (let i = 0; i < key.length; i++)
                keys.push(alphabet.split('').indexOf(key[i], 0));
        //console.log(key);
        //console.log(keys);
        message=message.toUpperCase();
        //message=message.split('');
        //console.log(key);
        //console.log(message);
        for(let i=0;i<message.length;){
            
            if(counter>key.length-1)
                counter=0;
            while(counter!=key.length){
                if(alphabet.split('').indexOf(message[i], 0)==-1){
                    if(i==message.length)
                        break;
                    result+=message[i];
                    i++;
                    break;
                }
                else{
                ind=alphabet.split('').indexOf(message[i], 0)+keys[counter];
                //console.log(ind);
                if(alphabet.split('').indexOf(message[i], 0));
                //console.log(counter);
                if(ind>=26)
                    ind=ind-26;
                ////console.log(alphabet[ind]);
                result+=alphabet[ind];
                counter++;
                i++;}
            }
        }
       
        //console.log(result);
        if(result[result.length-1]=="undefined")
            {
                result=result.substring(0,result.length-1);
            }
        if (this.type === false) {
            return result.split("").reverse().join('');}
            else 
                return result;
        }       
        
    }
    decrypt(message, key) {
        if (!message || !key)
                throw new Error();
                else {
                    key = key.toUpperCase();
                    let keys=[];
                    let result = "";
                    let counter=0;
                    let ind;
                    //for (let j = 0; j < alphabet.length; j++) 
                        for (let i = 0; i < key.length; i++)
                            keys.push(alphabet.split('').indexOf(key[i], 0));
                    message=message.toUpperCase();
                    //message=message.split('');
                     for(let i=0;i<message.length;){
                        
                        if(counter>key.length-1)
                            counter=0;
                        while(counter!=key.length){
                            if(alphabet.split('').indexOf(message[i], 0)==-1){
                                if(i==message.length)
                                    break;
                                result+=message[i];
                                i++;
                                break;
                            }
                            else{
                            ind=alphabet.split('').indexOf(message[i], 0)-keys[counter];
                            ////console.log(ind);
                            if(alphabet.split('').indexOf(message[i], 0));
                            ////console.log(counter);
                            if(ind<0)
                                ind=ind+26;
                            ////console.log(alphabet[ind]);
                            result+=alphabet[ind];
                            counter++;
                            i++;}
                        }
                    }
                   
                    //console.log(result);   
        if (this.type === false) {
            return result.split("").reverse().join('');}
        else 
             return result;
                }               
                
    }
}
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = VigenereCipheringMachine;
