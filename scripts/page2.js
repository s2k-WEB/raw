$(document).ready(function(){
    function mode(array, iter) {
        let modes = [];
        let arr = [];
        let dim = [array.length,array[0].length];
        for (let k = 0; k < dim[0]; k++) {
            for (let v = (array[k].length - 5 ); v < array[k].length; v++) {
                arr.push(array[k][v]);
            }
        }
        for( var a = 0; a < iter; a++){
            var maxValue = 0;
            var maxCount = 0;
            var n = arr.length;
            for(b=0; b<n; b++) {
                var count = 0;
                for(c=0;c<n; c++)
                    if(arr[c] == arr[b])
                        count++;
                if(count>maxCount){
                    maxCount = count;
                    maxValue = arr[b];
                }
            }
            modes.push(maxValue, maxCount);
            for( var d = 0; d < arr.length; d++){ 
                if ( arr[d] === maxValue) { 
                    arr.splice(d, 1); 
                }
            }
            
        }
        return modes;
    }
    let result = mode(CSVarray,3);
    $('#mode-ball1').html(`${result[0]}`);
    $('#mode-number1').html(`${result[1]} db.`);
    $('#mode-ball2').html(`${result[2]}`);
    $('#mode-number2').html(`${result[3]} db.`);
    $('#mode-ball3').html(`${result[4]}`);
    $('#mode-number3').html(`${result[5]} db.`);
});

