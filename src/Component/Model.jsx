import axios from "axios";
import Swal from "sweetalert2";

const Model = () => {

    const handelSubmit =async (e) =>{
        e.preventDefault()
        const from = e.target;
        const title = from.title.value;
        const description= from.description.value;
        const newTask = {
            title,
            description,
            category: "To-Do", 
            timestamp: new Date().toISOString(),
        };
        console.log(newTask);

         const postTask = await axios.post('https://to-do-list-server-site.onrender.comAdd-todoTask',newTask)
         console.log(postTask);
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task added Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button onClick={() => document.getElementById("my_modal_3").showModal()}>
        <h3 className="btn  font-bold btn-primary text-white">task add</h3>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div>
            <div className="card  w-full max-w-sm ">
              <form onSubmit={handelSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <textarea className="p-3  border-gray-300 rounded-2xl" name="description" id="" placeholder="Description" cols="30" rows="10"></textarea>

                <div className="form-control mt-6 flex justify-center">
                  <button className="btn btn-primary w-[200px]">Add Task</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Model;
