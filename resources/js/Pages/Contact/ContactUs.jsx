import TopBannerPage from "@/Components/TopBannerPage";
import SocialGroup from "@/Components/SocialGroup";
import MainLayout from "@/Layouts/MainLayout";
import ActionButton from "@/Components/ActionButton";
import InputField from "@/Components/InputField";

const ContactUs = () => {
    return ( 
        <MainLayout>
             <TopBannerPage 
                imgSource={'/img/banner-project-detail.jpg'}
                bannerTitle={'Contact Us'}
                bannerSubTitle={'Contact'}
             />

            <section className="container max-w-[1240px] my-32 text-center">
                <h1 className="text-4xl max-w-[800px] mx-auto font-serif font-semibold tracking-wider">We love meeting new people and helping them.</h1>
                <div className="flex flex-col-reverse lg:flex-row mt-20 gap-20">
                    <div className="bg-jinawi-accent px-8 py-20 max-w-[360px] rounded-[40px]">
                        <ul className="flex flex-col gap-4">
                            <li className="flex justify-between items-center gap-6">
                                <img src="/mail.svg" alt="" className="w-10"/>
                                <p className="flex-1 text-left">Your Client Name</p>
                            </li>
                            <li className="flex justify-between items-center gap-6">
                                <img src="/phone.svg" alt="" className="w-10"/>
                                <p className="flex-1 text-left">+1 (378) 400-1234</p>
                            </li>
                            <li className="flex justify-between items-center gap-6">
                                <img src="/world.svg" alt="" className="w-10"/>
                                <p className="flex-1 text-left">www.yourdomain.com</p>
                            </li>
                            <li className="mt-10">
                                <SocialGroup variant="black"/>
                            </li>
                        </ul>
                    </div>
                    <div className="md:ml-10">
                        <form className="relative">
                            <div className="form-group">
                                <InputField type='text' placeholder="Name" />
                                <InputField type='email' placeholder="Email" variant="ml-0 lg:ml-20"/>
                            </div>
                            <div className="form-group mt-10">
                                <InputField type='text' placeholder="Subject" />
                                <InputField type='text' placeholder="Phone" variant="ml-0 lg:ml-20"/>
                            </div>
                            <div className="form-group mt-10">
                                <textarea placeholder="Hello I am Interested in.." className="w-full text-lg border-t-transparent border-x-transparent pl-0 max-w-[720px] focus:border-t-transparent focus:border-x-transparent focus:ring-0 focus:border-b-jinawi-primary"></textarea>
                            </div>
                            <div className="flex justify-end mt-14">
                                <ActionButton name="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="maps container max-w-[1230px] mb-20">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4609634776843!2d111.43613917548646!3d-7.414125473020074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79e7003cffd00b%3A0x21b2ea4694135e85!2sJinawi%20Indonesia!5e0!3m2!1sen!2sid!4v1729669108932!5m2!1sen!2sid" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-[340px] md:w-[540px] lg:w-[1200px] rounded-[32px]"></iframe>
            </section>
        </MainLayout>
     );
}
 
export default ContactUs;