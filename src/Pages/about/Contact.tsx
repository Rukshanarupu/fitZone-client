
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register } = useForm();
    return (
        <>
          <div className=" md:w-3/4 md:mx-auto mb-8 p-4">
            <div className="w-full h-full shadow-sm shadow-white">
              <div className="bg-slate-200 text-black p-2 ">
              <h1 className="text-3xl font-bold ">Contact Us</h1>
              <p>Have questions or feedback? We'd love to hear from you!</p>
              </div>
              <form  className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-3 py-2 border rounded bg-black"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 justify-between gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Email</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full px-3 py-2 border rounded bg-black"
                    placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Subject</span>
                    </label>
                    <input
                      type="text"
                      {...register("subject")}
                      className="w-full px-3 py-2 border rounded bg-black"
                    placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Description</span>
                  </label>
                  <textarea
                    {...register("description")}
                    className="w-full px-3 py-2 border rounded bg-black"
                    placeholder="Write your message"
                    required
                  />
                </div>
                <div className="form-control mt-6 w-1/4">
                  <button className="btn my-btn">Submit</button>
                </div>
              </form>
            </div>
            <div className="card-body">
                <p className="mt-2">Email: contact@company.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Fitness Ave, Gym City, Country</p>
            </div>
          </div>
        </>
    );
};

export default Contact;