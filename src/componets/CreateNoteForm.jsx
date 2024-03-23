import React, { useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

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
          
          // Display success toast for note creation
          Swal.fire({
              icon: 'success',
              title: 'Note created Successfully',
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              toast: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              }
          });
  
          // Reset the form fields if needed
          e.target.reset();
  
          // You can also perform any additional actions here based on the success response
          console.log(response.data);
      } catch (error) {
          // Display error toast if note creation failed
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Failed to create note. Please try again later.',
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              }
          });
  
          console.error('Error creating note:', error.message);
      }
  };
  
  return (
    <>
        <form onSubmit={handleSubmit} className="bg-white w-full md:w-3/4 lg:w-1/3 max-w-lg mx-auto p-4 md:p-6 lg:p-8 rounded-lg shadow-xl flex flex-col justify-center items-center">
          <p className="text-3xl font-extrabold text-gray-900 dark:text-blue mb-3 w-full">Create Note</p>
          <div className="mb-5 w-full">
              <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Note Title</label>
              <input type="text" onChange={handleFormChanges} name="title" id="base-input" required className="  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-300 focus:border-gray-500 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-500 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500 " placeholder="Add Title" />
          </div>
          <div  className="mb-5 w-full">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Note Content</label>
              <textarea id="message" onChange={handleFormChanges} name="content" rows="4" required className="  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-300 focus:border-gray-500 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-500 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Add note content..."></textarea>
          </div>

          <div className='w-full'>
              <button type="submit" className="w-full text-secondary bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
          </div>
        </form>

    </>
  )
}
