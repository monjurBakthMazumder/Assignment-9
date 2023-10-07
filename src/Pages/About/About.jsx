import AboutCard from "../../Component/AboutCard/AboutCard";
import Banner from "../../Component/Banner/Banner";
import Team from "../../Component/Team/Team";
import useGetData from "../../Hock/useGetData";

const About = () => {
    const [allData] = useGetData();
    return (
        <div>
            <Banner/>
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mt-10 px-[5%]">About us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-[5%] my-10">
                <img src="https://i.ibb.co/vvqL5mh/about.jpg" alt="" />
                <div className="">
                    <p className="mb-2 text-justify">Welcome to Mazumder, your one-stop destination for creating unforgettable and seamless social gatherings. Our website is designed to cater to a wide range of occasions, including Farewell Parties, Graduation Parties, Birthday Parties, Anniversaries, Retirement Parties, Weddings, Engagement Parties, and Baby Showers.</p>
                    <p className="mb-2 text-justify">At Mazumder, we understand that every event is unique and deserves personalized attention. Here&apos;s what sets us apart:</p>
                    <p className="mb-2 text-justify"><b>Tailored Experiences: </b>We believe that your event should reflect your style and preferences. Our team of experienced event planners will work closely with you to understand your vision and bring it to life.</p>
                    <p className="mb-2 text-justify"><b>Expertise: </b>With years of experience in the industry, our event planners are skilled in orchestrating gatherings of all sizes and types. From intimate baby showers to grand weddings, we&apos;ve got you covered.</p>
                    <p className="mb-2 text-justify"><b>Vendor Network: </b>We have an extensive network of trusted vendors, including florists, caterers, photographers, and decorators. This allows us to offer you a wide range of choices and ensure the highest quality services.</p>
                    <p className="mb-2 text-justify"><b>Budget-Friendly Options: </b>We understand that budget constraints are a reality for many. Our team will work with you to create an event plan that aligns with your budget without compromising on quality or style.</p>
                    <p className="mb-2 text-justify"><b>Seamless Planning: </b>Our website offers a user-friendly interface that allows you to browse through various event packages, view real-time availability, and make secure bookings. You can also access our planning tools and resources to make the process smooth and stress-free.</p>
                    <p className="mb-2 text-justify"><b>Inspiration Gallery: </b>Explore our inspiration gallery to get ideas for themes, decorations, and more. We showcase past events we&apos;ve organized to spark your creativity.</p>
                    <p className="mb-2 text-justify"><b>Customer Reviews: </b>Read testimonials from our satisfied clients to gain insight into their experiences with us. We take pride in our track record of delivering exceptional events.</p>
                    <p className="mb-2 text-justify"><b>Event Blog: </b>Stay up-to-date with the latest trends, tips, and tricks in event planning through our regularly updated blog. Whether it&apos;s DIY decor ideas or etiquette advice, we&apos;ve got you covered.</p>
                    <p className="mb-2 text-justify"><b>24/7 Support: </b>Our customer support team is available round the clock to address your inquiries and provide assistance at any stage of your event planning journey.</p>
                    <p className="mb-2 text-justify">At Mazumder, our mission is to transform your vision into reality and create memorable moments that will be cherished for a lifetime. We are committed to making your Farewell Parties, Graduation Parties, Birthday Parties, Anniversaries, Retirement Parties, Weddings, Engagement Parties, and Baby Showers truly extraordinary. Start planning your event with us today and let the celebration begin!</p>
                </div>
            </div>
            <Team/>
            <div className="">
                <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mt-10 px-[5%]">Our Event </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 px-[5%]">
                {
                    allData?.map(data=> 
                        <AboutCard
                        key={data.id}
                        data={data}
                        />
                        )
                    }
            </div>
            </div>
        </div>
    );
};

export default About;