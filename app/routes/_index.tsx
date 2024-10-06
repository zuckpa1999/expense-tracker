import { useState } from "react";
//import DatePicker from "react-datepicker";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export default function Index() {

  //  const [date, setDate] = useState(new Date());
  const [date, setDate] = useState<Date | null>(new Date());


  const DatePicker = (ReactDatePicker as unknown as { default: typeof ReactDatePicker }).default ?? ReactDatePicker;

  return (
    <div className="flex flex-col  h-screen justify-center items-center">
      <h1 className="text-blue-600 text-3xl mb-5">Expense Tracker</h1>

      <div>
        <h1 className="font-bold mr-48 mb-2">Category</h1>
        <input
          id="category"
          name="category"
          type="text"
          placeholder="Food"
          className="block w-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1
         ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
          focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-1"
        />
      </div>

      <div>
        <h1 className="font-bold mr-48">Amount</h1>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">฿</span>
          </div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            className="block w-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1
         ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
          focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="mt-3">
        <h1 className="font-bold">Date</h1>
        <DatePicker className="mr-10" showIcon selected={date} onChange={(date) => setDate(date)} />
      </div>
      <div className="mt-5" onClick={() => alert("date" + date)}>
        <a className="px-6 py-2 min-w-[120px] text-center text-white bg-blue-600 border
         border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring"
        >
          Add Expense
        </a>
      </div>

    </div>
  );
}

