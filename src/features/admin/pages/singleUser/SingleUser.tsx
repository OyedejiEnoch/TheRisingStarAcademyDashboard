
const SingleUser = () => {
  return (
    <section  className='className="py-4 px-2 sm:p-8 w-full h-full flex flex-col gap-6 overflow-y-auto'>
        <h1>User</h1>
        <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 h-[400px] w-[450px]">
                <img src="https://images.pexels.com/photos/19993638/pexels-photo-19993638/free-photo-of-man-in-eyeglasses-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600"  alt="img"
                className="w-[300px] h-[350px] object-cover rounded-xl"/>
            </div>
            <div className="flex-1">
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-center gap-6">
                    <h2 className="text-[18px]">Name</h2>
                    <span className="text-[16px] text-gray-500">Enoch Oyedeji</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <h2 className="text-[18px]">Email</h2>
                    <span className="text-[16px] text-gray-500">oyedejienoch@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <h2 className="text-[18px]">Name</h2>
                    <span className="text-[16px] text-gray-500">Enoch Oyedeji</span>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleUser