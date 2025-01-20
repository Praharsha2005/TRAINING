function x(){
    let a = 10;
    const b = 20;
    console.log(a,b)
    function y(){
        let p = "js";
        var q = "Reactjs";
        console.log(p,q);
        function z(){
            const username = "Harsha";
            console.log(username);
            console.log(a);
            console.log(q);
        }
        z();
    }
    y();
}
x();





