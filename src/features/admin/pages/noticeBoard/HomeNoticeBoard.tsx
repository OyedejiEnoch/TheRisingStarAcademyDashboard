

const NoticeBoard =()=>{
    return (
        <section className="w-full p-4 overflow-y-auto">
            <div className="w-full flex flex-col gap-4">
                <h2 className="font-semibold text-[#7579E7]">Notice Board</h2>

                <div className="flex flex-col gap-2 ">
                    <div className="border-1 border-gray-100 bg-white shadow rounded px-2 py-4 flex-wrap">
                        <h2 className="text-[14px] font-semibold">Virtual Class now starts at noon</h2>
                        <p className="text-[12px] text-gray-400">Wed, feb 24, 2024, 12:00pm-1:00pm</p>
                    </div>
                    <div className="border-1 border-gray-100 bg-white shadow rounded px-2 py-4">
                        <h2 className="text-[14px] font-semibold">Virtual Class now starts at noon</h2>
                        <p className="text-[14px] text-gray-400">Wed, feb 24, 2024, 12:00pm-1:00pm</p>
                    </div>
                    <div className="border-1 border-gray-100 bg-white shadow rounded px-2 py-4">
                        <h2 className="text-[14px] font-semibold">Virtual Class now starts at noon</h2>
                        <p className="text-[14px] text-gray-400">Wed, feb 24, 2024, 12:00pm-1:00pm</p>
                    </div>
                    <div className="border-1 border-gray-100 bg-white shadow rounded px-2 py-4">
                        <h2 className="text-[14px] font-semibold">Virtual Class now starts at noon</h2>
                        <p className="text-[14px] text-gray-400">Wed, feb 24, 2024, 12:00pm-1:00pm</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default NoticeBoard