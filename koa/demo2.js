async function demo(){
    await getData();
    console.log('123')
}

function getData(){
    sum  = 0
    for (var i = 0 ; i <10000000; i++) {
        sum+=i;
    };
    console.log(sum)
}
demo()