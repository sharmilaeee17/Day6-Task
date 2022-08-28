<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        class Uber{
            constructor(distance,waitingPeriod,rate){
                this.distance=distance;
                this.waitingPeriod=waitingPeriod;
                this.rate;
            }
setDistance(dist){
    this.distance=dist;
}
getRideDetail(){
   
    ('The distance of the ride is ${this.distance} with waitingPeriod of ${this.waitingPeriod} and the rate ${this.rate}')}
getRate(){
    let totalRate=(this.distance*this.rate)+(this.waitingPeriod*5)
    return totalRate;
}
        }
        let customer1=new Uber (80,50,100)
        console.log(customer1.getRate());
        customer1.setDistance(140);
        console.log(customer1.getRate());
        console.log(customer1.getRideDetails());
    </script>
</body>
</html>