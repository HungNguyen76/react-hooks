const SpreadOperator = () => {

    // Rest and destructuring Operator
    function logger(a, b, ...params) {
        console.log(params)
    }
    logger(1,2,3,4); //[3,4]
    
    function logger2({name, price, ...rest}) {
        console.log(name) // Javascript
        console.log(price) //1000
        console.log(rest) //{description: "Description content"}
    }
    logger2 ({
        name: 'Javascript',
        price: 1000,
        description: 'Description content'
    })
    
    function logger3 ([a, b, ...rest]) {
        console.log(a) //2
        console.log(b) //3
        console.log(rest) //[4,5,6]
    }
    logger3([2,3,4,5,6])
    
    //Spread Operator
    var array1 = ['Javascrip', 'Ruby' , 'PHP']
    var array2 = ['ReactJs', 'Dart']
    var array3 = [...array2, ...array1]
    console.log(array3) // ['ReactJs', 'Dart', 'Javascript', 'Ruby' , 'PHP']
    
    var object1 = {
        name: 'Golang'
    }
    var object2 = {
        price: 1000
    }
    var object3 = {
        ...object1,
        ...object2
    }
    console.log(object3) // {name: 'Golang', price: 1000}
    
    var defaultConfig = {
        api: 'https://domain-trang-khoa-hoc',
        apiVersion: 'v1',
        other: 'other'
    }
    var exerciseConfig = {
        ...defaultConfig,
        api: 'https://domain-trang-bai-tap'
    }
    console.log(exerciseConfig) //{api: "https://domain-trang-bai-tap", apiVersion: "v1", other:"other  "} 
    
    var array4 = ['Flutter', 'Angular', 'Python']
    function logger4(...rest){
        for (var i = 0; i < rest.length; i ++) {
            console.log(rest[i])
        }
    }
    logger4(...array4) 
    //Flutter 
    //Angular 
    //Python
    
    return <h2>Rest Spread Operator in ES6</h2>  
}
export default SpreadOperator;