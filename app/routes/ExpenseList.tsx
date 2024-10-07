import React from 'react'

export type ExpenseModel = {
    category: string,
    date: string,
    price: number
}

export interface ExpenseProps {
    expense: ExpenseModel
}

export default function ExpenseList(props: ExpenseProps) {
    const expense = props.expense
    return (
        <div className="flex container  p-5 bg-white border border-gray-300 rounded-xl">

            <div className="flex flex-col">
                <h1 className="mb-2">{expense.category}</h1>
                <p className='font-light'>{expense.date}</p>
            </div>
            <div className="flex ml-auto">
                <div>
                    <h1 className="font-bold">{expense.price}</h1>
                </div>
            </div>
        </div>
    )
}
