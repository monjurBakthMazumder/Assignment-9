
const WhyChooseUs = () => {
    return (
        <div className="px-[5%] my-10 lg:my-14">
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10">Why Choose Us</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <div className="flex-1">
                    <div className="collapse collapse-arrow border">
                        <input type="radio" name="my-accordion-2" checked="checked" /> 
                        <div className="collapse-title text-xl font-medium">
                            Experienced Event Planners
                        </div>
                        <div className="collapse-content"> 
                            <p>Our team of experienced event planners is dedicated to turning your dreams into reality. From the smallest details to grand gestures, we make sure your event is nothing short of spectacular.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                            Personalized Services 
                        </div>
                        <div className="collapse-content"> 
                            <p>We believe that every event is unique, just like you. Our personalized services ensure that your event reflects your personality and preferences. Whether you envision an intimate gathering or a lavish affair, we tailor our services to suit your needs.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                        End-to-End Solutions 
                        </div>
                        <div className="collapse-content"> 
                            <p>We offer comprehensive event management solutions, from concept development to execution. Sit back, relax, and let us handle everything from venue selection, décor, catering, entertainment, and more.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                        Vendor Partnerships 
                        </div>
                        <div className="collapse-content"> 
                            <p>Over the years, we have built strong relationships with top-notch vendors in the industry. This allows us to provide you with access to the best caterers, florists, photographers, and entertainers in the business.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                            Budget-Friendly Options 
                        </div>
                        <div className="collapse-content"> 
                            <p>We understand that budgets can vary, and we are committed to working within your financial constraints. Our experts can help you achieve a stunning event without breaking the bank.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="https://i.ibb.co/3yxMMc2/why.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;