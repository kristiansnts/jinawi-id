const InputField = ({ type, placeholder, variant = '' }) => {
    return ( 
        <input type={ type } placeholder={ placeholder } className={`${variant} text-lg border-t-transparent border-x-transparent pl-0 w-full md:w-80 focus:border-t-transparent focus:border-x-transparent focus:ring-0 focus:border-b-jinawi-primary`}/>
     );
}
 
export default InputField;