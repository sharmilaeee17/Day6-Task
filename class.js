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
        class person{
            constructor(firstName,lastName,Age,Place){
                this.firstName=firstName;
                this.lastName=lastName;
                this.Age=Age;
                this.place=place;
            }
            getDetails(){
                return ('${this.firstNmae} ${this.lastName} with age of ${this.age} born at ${this.place}')
            }
getAllNames(){
    return('all the Names are ${this.firstName}')
}
        }
        let person1 =new person("Ratan","tata","86","Mumbai");
        let person2 =new person("gayathri","ganesh","23","Chennai");
        let person3 =new person("sachin","Tendulkar","49","Mumbai");
    </script>
</body>
</html>
