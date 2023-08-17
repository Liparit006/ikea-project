 function BasketPage(data) {
    return (
      <div className='p-4 w-[350px] flex flex-col items-center shadow-xl bg-gray-100'>
        <div className='mt-3'>
          <img src={data.img} className='object-cover w-[200px] h-[200px]' alt={data.description} />
        </div>
        <div className='mt-3'>
          <p className='text-blue-600 text-xl font-semibold'>{`${data.description} - ${data.basketCount} pcs`}</p>
        </div>
        <div className='mt-4 text-green-600 font-bold bg-yellow-300 rounded p-2'>
          <p>{`Price: $${data.price} * ${data.basketCount} = $${data.price * data.basketCount}`}</p>
        </div>
        <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md focus:outline-none'>
          Add to Cart
        </button>
      </div>
    );
  }

export default BasketPage;
  
