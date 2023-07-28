console.log("started...");

// let sequence be 3x+1
// x is the given natural number
// if x is even then x = x/2
// if x is odd then x = 3x + 1
// run the steps recursively
// This funcion will calculate no. of steps to terminate 3x+1 sequence 
function step_counter(){
    let x = parseFloat(document.getElementById('num').value);
    if(x%1!=0){
        alert("Error: Enter Valid Number");
        return 0;
    }
    else if(x<0){
        alert("Error: Enter Valid Number");
        return 0;
    }
    else if(x>9999){
        alert("Error: Enter a number less than five digits");
    }
    let counter = 0;
    let xValues = [0];
    let yValues = [x];
    let maximum = x;
    console.log(x);
    while(x!=1){
        if(x%2==0){
            x = x/2;
            xValues.push(counter+1);
            yValues.push(x);
            counter++;
        }
        else{
            x = 3*x + 1;
            xValues.push(counter+1);
            yValues.push(x);
            counter++;
        }
        if(x>maximum){
            maximum = x;
        }
    };
    document.getElementById('res').value = counter;
    console.log("Counter value is "+counter);
    console.log(xValues);
    console.log(yValues);
    let graph = document.getElementById("gr");
    graph.style.display = 'block';
    
    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
            }]
        },
        options: {
        legend: {display: false},
        scales: {
            yAxes: [{ticks: {min: 0, max:(maximum)}}],
        }
    }
    });
    xValues = [];
    yValues = [];
    console.log(xValues);
    console.log(yValues);
}