function recursiva (max){
    if(max >= 5000 ) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(15);
