import Model from "../Component/Model";

const HomePage = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div>
        <h2 className="text-center font-bold text-3xl">Task Board</h2>
      </div>
        <div><Model></Model></div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 pt-10">

        <div>
          <div className="card bg-base-100 w-96 shadow-2xl ">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div>
        <div className="card bg-base-100 w-96 shadow-2xl ">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div>
        <div className="card bg-base-100 w-96 shadow-2xl ">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
