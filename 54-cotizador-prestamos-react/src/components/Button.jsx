// Componente Button

// Uso de Props, como es un objeto se puede usar destructuring
function Button( {operador, fn} ) {

    // console.log(props);

  return (
    <button
    type='button'
    className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover-ring-lime-500'
    onClick={ fn }
    >{operador}</button>
  )
}

export default Button
