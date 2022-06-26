//1. Let, const
//2. Template Literals
//3. Multi-line String
//4. Arrow function 
//5. Classes
//6. Enhanced object literals
//7. Default parameter values
//8. Destructuring
//9. Rest parameters
//10. Spread
//11. Tagged template literal
//12. Modules

//1. Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến

const EnhancedObjectLiterals = () => {
    var fieldName = 'new-name'
    var fieldPrice = 'price'

    const course = {
        name: 'Javascript',
        [fieldName]: 'Javascript',
        [fieldPrice]: 1000
    }
    console.log(course) //{name: 'Javascript', new-name: 'Javascript', price: 1000}
    
    return <h2>Enhanced object literals in  ES6</h2>

}
export default EnhancedObjectLiterals;