import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateHelper, editHelper } from "../../store/actions/helper-action";

function HelperModalEditForm({ id = null }) {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    setForm(currentData);
  }, [currentData]);

  const editData = (id) => {
    dispatch(editHelper(id)).then((res) => {
      setCurrentData(res);
    });
    setShowModal(true);
  };

  const onInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateHelper(form.id, form));
    setShowModal(false);
  };

  return (
    <>
      <svg
        type="button"
        onClick={() => editData(id)}
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-blue-400 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-2xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Helper</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="mt-5 md:mt-0 md:col-span-4">
                  <div className="grid grid-cols-9 gap-9 px-4 py-4">
                    <div className="col-span-9 sm:col-span-3">
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-medium uppercase text-gray-500"
                      >
                        Fullname<span className="text-red-600">*</span>
                      </label>
                      <input
                        onChange={onInputChange}
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={form?.fullName || ""}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-9 sm:col-span-3">
                      <label
                        htmlFor="contact"
                        className="block text-xs font-medium uppercase text-gray-500"
                      >
                        Contact
                      </label>
                      <input
                        onChange={onInputChange}
                        type="text"
                        name="contact"
                        id="contact"
                        value={form?.contact || ""}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-9 sm:col-span-3">
                      <label
                        htmlFor="location"
                        className="block text-xs font-medium uppercase text-gray-500"
                      >
                        Location
                      </label>
                      <input
                        onChange={onInputChange}
                        type="text"
                        name="location"
                        id="location"
                        value={form?.location || ""}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Tutup
                  </button>
                  <button
                    className="bg-indigo-600 text-white active:bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => onSubmit(e)}
                  >
                    Update Helper
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}

export default HelperModalEditForm;
