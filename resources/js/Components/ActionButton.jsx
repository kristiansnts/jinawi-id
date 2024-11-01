const ActionButton = ({ name, variant = '#0e7c7b', color = 'bg-jinawi-secondary'}) => {
    return ( 
        <button className={`${color} px-8 py-5 text-white font-bold rounded-[16px]`}>{ name } <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke={variant} stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6"/></svg>
        </button>
     );
}
 
export default ActionButton;