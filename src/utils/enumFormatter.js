//util function to properly display strings
const enumFormatter = (enumWord='HO_OPERATION') => {
    try{
        let words = enumWord?.includes("_") ? enumWord?.toLowerCase()?.split("_") : enumWord?.toLowerCase()?.split(" ") //returns array
    for (let i = 0; i < words?.length; i++) {
        words[i] =  words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words?.join(" ")
    }catch(e){
        return enumWord
    }
}

export default enumFormatter