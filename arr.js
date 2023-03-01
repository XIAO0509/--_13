var str=prompt("Введите последовательность целых чисел","Введите ',' между числами");//Type string
var arr=str.split(",");//Делить строки на массив
for(var i = 0 ; i < arr.length ; i++){
    for(var j = i+1 ; j < arr.length ; j++){
        //сравнить каждые числа
        if(arr[i] == arr[j]){
            arr.splice(j,1);//если одинаковые удалить повторное число
            j--;
        }        
    }
}
console.log(arr);