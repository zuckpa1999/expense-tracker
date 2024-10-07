import React from 'react'

export default function ExpenseList() {
    return (
        <div className="flex container  p-5 bg-white border border-gray-300 rounded-xl">

            <div className="flex flex-col">
                <h1 className="mb-2">Food</h1>
                <p className='font-light'>1/2/2024</p>
            </div>
            <div className="flex ml-auto">
                <div>
                    <h1 className="font-bold">123.34 Baht</h1>
                </div>
            </div>
        </div>
    )
}
