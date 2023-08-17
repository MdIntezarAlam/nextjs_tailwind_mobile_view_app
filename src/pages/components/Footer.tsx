import React from 'react'

const Footer = () => {
    return (
        <div className="absolute  bottom-0  bg-black w-full h-[120px] flex items-center justify-between px-4 ">
            <div>
                <h2 className="uppercase text-[12px]     text-white">price</h2>
                <p className="text-[9px] my-2 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            </div>

            <div>
                <h2 className="uppercase text-[12px]     text-white">company</h2>
                <p className="text-[9px] my-2 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            </div>

            <div>
                <h2 className="uppercase text-[12px]     text-white">social</h2>
                <p className="text-[9px] my-2 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>

            </div>
        </div>
    )
}

export default Footer