let obj = {
    property1 : {
        property2: "Apple",
        property3: "Orange",
        property4: {
            property5: "Banana",
            property6: "Kiwi"
        }
    }
}

let path = "property1.property4.property5"


const lookup = (obj, path) => {

    try {

        let value = path.split('.').reduce((value, key) => value[key], obj);

        if (!value) return "There is no such a property!";
        
        return value;

    } catch (err) {

        return `${err.name}, there is no such a property!`

    }

    // obj is initial value
    // 1. loop: obj, "property1" -> result: obj["property1"]
    // 2. loop: obj["property1"], "property2" -> result: obj["property1"]["property2"]
    // 3. loop: obj["property1"]["property2"], "property4" -> result: obj["property1"]["property2"]["property4"]

    

}

console.log(lookup(obj, path))

