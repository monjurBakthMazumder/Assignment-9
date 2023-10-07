import swal from 'sweetalert';
const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
        swal("Thank you!", "We will contact with you as soon as possible", "success");
    }
    return (
        <div className="px-[5%] max-w-screen-lg mx-auto my-10">
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold my-10">Contact us</h1>
            <form onSubmit={handleSubmit}> 
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <label htmlFor="name" className="w-full text-lg font-medium">Name:
                        <input type="text" id="name" placeholder="Your name" className="input input-bordered w-full mt-2" required/>
                    </label>
                    <label htmlFor="subject" className="w-full text-lg font-medium">Service:
                    <select className="select select-bordered w-full">
                        <option selected>Farewell Parties</option>
                        <option>Graduation Parties</option>
                        <option>Birthday Parties</option>
                        <option>Anniversaries</option>
                        <option>Retirement Parties</option>
                        <option>Weddings</option>
                        <option>Engagement Parties</option>
                        <option>Baby Showers</option>
                    </select>
                    </label>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <label htmlFor="email" className="w-full text-lg font-medium">Email:
                        <input type="email" id="email" placeholder="Email" className="input input-bordered w-full mt-2" required/>
                    </label>
                    <label htmlFor="number" className="w-full text-lg font-medium">Phone Number:
                        <input type="number" id="number" placeholder="Phone number" className="input input-bordered w-full mt-2" required/>
                    </label>
                </div>
                <div className="w-full my-5">
                    <label htmlFor="message"><span className="text-lg font-medium">Message:</span>
                        <textarea className="textarea textarea-bordered w-full mt-2 resize-none" id="message" placeholder="Message" cols="30" rows="10" required></textarea>
                    </label>
                </div>
                <div className="flex justify-center items-center my-5">
                    <button className="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;