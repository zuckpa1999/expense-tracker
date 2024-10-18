import { useState } from "react";
//import DatePicker from "react-datepicker";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import "./style.css"
import ExpenseList from "./ExpenseList";
import { ExpenseModel } from "./ExpenseList";

export default function Index() {
  const [date, setDate] = useState<Date>(new Date());
  const DatePicker = (ReactDatePicker as unknown as { default: typeof ReactDatePicker }).default ?? ReactDatePicker;

  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);


  const [expenseList, setExpenseList] = useState<ExpenseModel[]>([])


  function onExpenseAdded() {

    // if (category === '' || price === 0) {
    //   alert("Please filled in all the required information!")
    // } else {
    //   let expense: ExpenseModel = {
    //     category: category,
    //     date: (date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()).toString(),
    //     price: price
    //   }

    //   setExpenseList(prevExpense => [...prevExpense, expense])
    //   setDate(new Date())
    //   setCategory('')
    //   setPrice(0)

    // }


  }

  async function onSubmit(e: any) {
    e.preventDefault();


    console.log("category" + category);
    console.log("price" + price);

    if (!category.match(/^[A-Za-z]+$/)) {
      alert("Please enter a valid category")
      return;
    }
    if (!price.toString().match(/^[+-]?\d+(\.\d+)?$/) || price <= 0) {
      alert("Please enter a valid price")
      return
    }
    console.log("date" + date);
    console.log(date.getDate());
    console.log(date.getMonth());
    console.log(date.getFullYear());
    console.log("date.getUTCMonth" + date.getUTCMonth());

    let expense: ExpenseModel = {
      category: category,
      date: (date.getDate() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear()).toString(),
      price: price
    }

    setExpenseList(prevExpense => [...prevExpense, expense])
    setDate(new Date())
    setCategory('')
    setPrice(0)
    console.log("expenseList.length" + expenseList.length);

    expenseList.forEach(e => console.log("e.category" + e.category + "e.date" + e.date + "e.price" + e.price))
    e.target.reset();

  }

  // function onChangeCategory(e: any) {

  //   const regEx = /^[A-Za-z]+$/;
  //   console.log("e.target.value" + e.target.value);
  //   if (e.target.value === "" || regEx.test(e.target.value))
  //     setCategory(e.target.value);
  // }

  // function onChangePrice(e: any) {

  //   const regEx = /^[+-]?\d+(\.\d+)?$/;
  //   console.log("e.target.value" + e.target.value);
  //   console.log("price" + price);

  //   if (e.target.value === 0 || regEx.test(e.target.value))
  //     setPrice(parseFloat(e.target.value))
  // }




  return (
    <form className="flex flex-col   justify-center items-center  h-screen"
      onSubmit={onSubmit}>
      <h1 className="text-blue-600 text-3xl mb-5">Expense Tracker</h1>

      <div>
        <h1 className="font-bold mr-48 mb-2">Category</h1>
        <input
          id="category"
          name="category"
          type="text"
          placeholder="Food"
          value={category}
          className="block w-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1
         ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
          focus:ring-indigo-600  mb-1"
          onChange={(e) => setCategory(e.target.value)}
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
            placeholder="0.1"
            value={price}
            type='number'
            step="0.1"
            className="block w-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1
         ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
          focus:ring-indigo-600"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
      </div>

      <div className="mt-3 mr-8">
        <h1 className="font-bold">Date</h1>
        <DatePicker className="mr-10 ring-1 ring-inset ring-gray-300 rounded-md"
          showIcon selected={date} onChange={(date) => date && setDate(date)} />

      </div>

      <button className="mt-10 mb-10">
        <a className="px-6 py-2 min-w-[120px] text-center text-white bg-blue-600 border
         border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring"
        >
          Add Expense
        </a>
      </button>
      {expenseList.length > 0 &&
        <h1 className="font-bold text-lg">Recent expenses</h1>
      }
      {expenseList.length > 0 &&
        expenseList.map((ex, index) => (
          <ExpenseList key={index} expense={ex} />
        ))


      }
    </form>
  );
}

