import React from 'react';

import axios from 'axios';
import { format } from 'date-fns';
import {
  Button,
  Modal,
} from 'flowbite-react';
import Swal from 'sweetalert2';

export default function NoteModel({ data, setOpenModal, openModal, fetchNotes }) {
    const navigate = useNavigate()

    // get formatted date
    const formatDate = (dateString) => {
        return format(new Date(dateString), 'MMMM dd, yyyy hh:mm a')
    }

    const apiUrl = import.meta.env.VITE_NOTE_API_URL

    // remove a note by id
    const remove = (e, id) => {
        // confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`${apiUrl}${id}`)
                    .then(() => {
                        // success
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success',
                        })
                        fetchNotes()
                    })
                    .catch((err) => {
                        // error
                        alert('Error!')
                    })
            }
        })
    }

    // navigate to edit screen
    const onClickUpdate = (e, id) => {
        navigate(`/edit/${id}`)
    }

    return (
        <>
            <Modal show={openModal} className="" onClose={() => setOpenModal(false)}>
                <Modal.Header className="bg-primary">
                    <p className="text-secondary">{data.title}</p>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-black">{data.content}</p>
                        <p className="text-base leading-relaxed  text-secondary">
                            Last updated : {formatDate(data.updatedAt)}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer className=" gap-3 flex justify-between">
                    <div className="flex items-center">
                        <svg
                            onClick={(e) => remove(e, data._id)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 text-error"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                        </svg>

                        <svg
                            onClick={(e) => onClickUpdate(e, data._id)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6  text-secondary  ml-3"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                        </svg>
                    </div>

                    <Button
                        onClick={() => setOpenModal(false)}
                        className="text-secondary bg-primary hover:bg-primary-hover"
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
