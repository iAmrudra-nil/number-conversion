alert("Please use integer and valid number!!");
 
function decToBinary(n)
{ 

	let binaryNum = new Array(100); 

	let i = 0,str=""; 
	while (n > 0) { 
		binaryNum[i] = n % 2; 
		n = Math.floor(n / 2); 
		i++; 
	}  
	for (let j = i - 1; j >= 0; j--) 
		str=str+binaryNum[j].toString(); 
    document.getElementById("op-1").value=str;
} 
function binToDecimal(n)
{
    let num = n;
    let dec_value = 0;
    let base = 1;
    let temp = num;
    while (temp) {
        let last_digit = temp % 10;
        temp = Math.floor(temp / 10);
        dec_value += last_digit * base;
        base = base * 2;
    }
    return dec_value;
    
}
function decToOctal(n){
    let octalNum = new Array(100);
    let i = 0,str="";
    while (n != 0) {
        octalNum[i] = n % 8;
        n = Math.floor(n / 8);
        i++;
    }
    for (let j = i - 1; j >= 0; j--)
        str=str+octalNum[j];
    document.getElementById("op-1").value=str;
}
function octalToDecimal(n)  
{  
    let num = n;  
    let dec_value = 0;  
    let base = 1;  
    let temp = num;  
    while (temp) {    
        let last_digit = temp % 10;  
        temp = Math.floor(temp / 10);    
        dec_value += last_digit * base;  
        base = base * 8;  
    }  
    return dec_value; 
}  
function decToHexa(n)
{    let hexaDeciNum = new Array(100);
    let i = 0;
    let str="";
    while (n != 0) {
        let temp = 0;
        temp = n % 16;
        if (temp < 10) {
            hexaDeciNum[i] = String.fromCharCode(temp + 48);
            i++;
        }
        else {
            hexaDeciNum[i] = String.fromCharCode(temp + 55);
            i++;
        }
        n = parseInt(n / 16);
    }
    for (j = i - 1; j >= 0; j--)
        str=str+hexaDeciNum[j];
    document.getElementById("op-1").value=str;
}

function hexToDec(hexVal) 
{ 
	let len = hexVal.length; 
	let base = 1; 
	let dec_val = 0; 
	for (let i = len - 1; i >= 0; i--) { 
		if (hexVal.charAt(i) >= '0'&& hexVal.charAt(i) <= '9') { 
			dec_val += (hexVal.charAt(i).charCodeAt(0) - 48) * base;  
			base = base * 16; 
		} 
		else if (hexVal.charAt(i) >= 'A'&& hexVal.charAt(i) <= 'F') { 
			dec_val += (hexVal.charAt(i).charCodeAt(0) - 55) * base; 
			base = base * 16; 
		} 
	} 
    return dec_val;
} 
function OctToBin(octnum)
{
    let i = 0;
   
    let binary = "";
      
    while (i<octnum.length) {
          
        let c=octnum[i];
        switch (c) {
        case '0':
            binary += "000";
            break;
        case '1':
            binary += "001";
            break;
        case '2':
            binary += "010";
            break;
        case '3':
            binary += "011";
            break;
        case '4':
            binary += "100";
            break;
        case '5':
            binary += "101";
            break;
        case '6':
            binary += "110";
            break;
        case '7':
            binary += "111";
            break;
        default:
            document.write( "<br>Invalid Octal Digit "+ octnum[i]);
            break;
        }
        i++;
    }
   
    document.getElementById("op-1").value= binary;
} 
function HexToBin(hexdec)
{
    let i = 0;
    let bin=""
    while (i<hexdec.length) {
        
        switch (hexdec[i]) {
        case '0':
            bin+="0000";
            break;
        case '1':
            bin+="0001";
            break;
        case '2':
            bin+="0010";
            break;
        case '3':
            bin+="0011";
            break;
        case '4':
           bin+="0100";
            break;
        case '5':
            bin+="0101";
            break;
        case '6':
            bin+="0110";
            break;
        case '7':
            dbin+="0111";
            break;
        case '8':
            bin+="1000";
            break;
        case '9':
            bin+="1001";
            break;
        case 'A':
        case 'a':
            bin+="1010";
            break;
        case 'B':
        case 'b':
            bin+="1011";
            break;
        case 'C':
        case 'c':
            bin+="1100";
            break;
        case 'D':
        case 'd':
            bin+="1101";
            break;
        case 'E':
        case 'e':
            bin+="1110";
            break;
        case 'F':
        case 'f':
            bin+="1111";
            break;
        case '.': 
            bin+=".";
           break;
        default:
            document.getElementById("op-1").style.backgroundColor="red";
        }
        i++;
    }
    document.getElementById("op-1").value=bin;
}
function main(){
    let a=document.getElementById("ty-1").value;
    let c=document.getElementById("ty-2").value;
    let b=document.getElementById("ip-1").value;
    let n=parseInt(b);
    if(a=="dec" && c=="bin"){
        decToBinary(n); 
    }
    else if(a=="bin"&&c=="dec"){
        let dec_value=binToDecimal(n);
        document.getElementById("op-1").value=dec_value;
    }
    else if(a=="dec"&& c=="oc"){
        decToOctal(n);
    }
    else if(a=="oc"&&c=="dec"){
       let val= octalToDecimal(n);
       document.getElementById("op-1").value=val;
    }
    else if(a=="dec"&&c=="hex"){
        decToHexa(n);
    }
    else if(a=="hex"&& c=="dec"){
             let val=hexToDec(b);
             document.getElementById("op-1").value=val;
    }
    else if(a=="bin"&&c=="oc"){
            let val=binToDecimal(n);
            decToOctal(val);
    }
    else if(a=="oc"&&c=="bin"){
            OctToBin(b);
    }
    else if(a=="bin"&c=="hex"){
        let val=binToDecimal(n);
        decToHexa(val);
    }
    else if(a=="hex"&& c=="bin"){
            HexToBin(b);
    }
    else if(a=="oc"&&c=="hex"){
            let val= octalToDecimal(n);
            decToHexa(val);
    }
    else if(a=="hex"&&c=="oc"){
            let val=hexToDec(b);
            decToOctal(val);
        }
    else{
        document.getElementById("op-1").value=b;
    }
    document.getElementById("op-1").style.backgroundColor="#f0fff2";
}
//on reset
function reset(){
    document.getElementById("ip-1").value="";
    document.getElementById("op-1").value="";
    document.getElementById("ip-1").style.backgroundColor="white";
    document.getElementById("op-1").style.backgroundColor="white";
}