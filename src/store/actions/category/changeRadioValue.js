export default function(name, value){
    return{
        type: "CHANGE_VALUE",
        name,
        value
    }
}