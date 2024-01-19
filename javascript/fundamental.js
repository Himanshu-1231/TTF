/*Date- 16jan,2024
 * js intro
 link js to html
 js history
 statement
 js engine 
 run time env
 client - server architecture
 request response architecture
 comment
 semicolon
 case sensitivity
 native code of js


 * 
 * 
 * '
 * 
 */

    // console.log("hello world !")

//hello i am learning js  and its my first day

                        /**
                         * this is my first multiline
                         * comment
                         * hello
                         * world
                         * 
                         * 
                         */


                        /* 
                        console.log("hi");


                        console.log("hi");

                        console.log("hi");

                        console.log("hi");

                        console.log("hi");

                        console.log("hi");
                        */


/***
 * output
 * js native output, browser output
 * variables
 * consitionals
 * loops
 * 
 * 
 * 
 * 
 */


                    // js- variable -dynamically types- 
                    var name="vikas"
                    var age=27
                    var height=6.2
                    var weight=75.50
                    var grade='A'

                    console.log("my name is ",name)
                    console.log("my age is ",age);

                    console.log(`my name is ${name} and my age is ${age}`); //template string
                    var myintrostring=`my name is vikas
                    my age is 27
                    i am a full stack web developer
                    my tech stack is c+ .net mvc
                    `
                    console.log(myintrostring)
                    // document.write(myintrostring)


    //conditionals
    //if else else if switch ternary

//     var age=27
//    if(age<18){
//     console.log("you can vote ")

//    }else{
//     console.log("hello world")

//    }
//    console.log("outside if else") -->



                //   var age=25;

                //   if(age<18)
                //     {
                //      console.log("go to school");
                //    }else{
                //      if(age>18 && age<20){
                //          console.log("go to college");
                //      }else{
                //          if(age>20 && age<30){

                //          }
                //      }
                //   }


                  




var age = 35;
if(age<18){
    console.log("go to school")
}else if(age>18 && age<20){
    console.log("go to college")
}else if(age>20 && age<30){
    console.log("go to office")
}else if(age>30 && age<40){
    console.log("party")
}else if(age>40 && age<50){
    console.log("go to mandir")
}
else{
    console.log("stay at home")
}
