import MainLayout from "@/Layouts/MainLayout";

const ProjectDetail = () => {
    return ( 
        <MainLayout>
            <section className="banner mt-4 ">
                <img src="/img/banner-project-detail.jpg" alt="banner image"/>
            </section>

            <section className="main mt-20 flex container max-w-[1240px] gap-12">
                <div className="bg-jinawi-accent p-20 w-[560px] rounded-[40px] flex-1">
                    <ul className="flex flex-col gap-4">
                       <li className="flex justify-between">
                            <h5 className="flex-1 text-left font-bold font-serif">Client</h5>
                            <p className="flex-1 text-left">Your Client Name</p>
                       </li>
                       <li className="flex justify-between">
                            <h5 className="flex-1 text-left font-bold font-serif">Category</h5>
                            <p className="flex-1 text-left">Interior</p>
                       </li>
                       <li className="flex justify-between">
                            <h5 className="flex-1 text-left font-bold font-serif">Tags</h5>
                            <p className="flex-1 text-left">interior, home</p>
                       </li>
                       <li className="flex justify-between">
                            <h5 className="flex-1 text-left font-bold font-serif">Date</h5>
                            <p className="flex-1 text-left">23 April 2024</p>
                       </li>
                       <li className="flex justify-between">
                            <h5 className="flex-1 text-left font-bold font-serif">Link</h5>
                            <p className="flex-1 text-left">https://example.com</p>
                       </li>
                    </ul>
                </div>
                <div className="max-w-[680px] project-details">
                    <h2 className="font-serif text-4xl font-bold mb-6">Minimal Look Bedrooms</h2>
                    <p className="mb-4 text-lg tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p>
                    <p className="mb-4 text-lg tracking-wider">In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>
                </div>
            </section>
            
            <section className="container my-20  max-w-[1230px] overflow-hidden relative">
                <img src="/img/details-project.jpg" alt="" className="w-full" />
                <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3.5 p-4 bg-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path fill="none" stroke="#0e7b7a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
                </div>
            </section>
        </MainLayout>
     );
}
 
export default ProjectDetail;