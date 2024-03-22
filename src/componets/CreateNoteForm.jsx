import React, { useState } from 'react'
import axios from 'axios';
export default function CreateNoteForm() {


const [form, setForm] = useState({
        title: "",
        content:""
      
    });

const handleFormChanges = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:3000/api/note/create', form);
          alert("Success!");
          console.log(response.data);
      } catch (error) {
          alert("Error!");
          console.error(error);
      }
  }
  
  return (
    <>
        <form  onSubmit={handleSubmit}  class="max-w-sm mx-auto mt-5">
            <p className="text-3xl font-extrabold text-gray-900 dark:text-blue mb-3">Create Note</p>
            <div className="mb-5">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Note Title</label>
                <input type="text" onChange={handleFormChanges} name="title" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Add Title"/>
            </div>
            <div>
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Note Content</label>
                <textarea id="message" onChange={handleFormChanges} name="content" rows="4" className="mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add note content..."></textarea>
            </div>

            <div className='flex justify-center items-center   '>
              <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </form>
    </>
  )
}
