const TopBannerPage = ({ imgSource, bannerTitle, bannerSubTitle }) => {
    return ( 
        <section className="banner mt-4 relative h-24 lg:h-full">
                <img src={ imgSource } alt="banner image"/>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 py-1 lg:py-10 px-10 lg:px-36 rounded-t-[32px] bg-white text-center">
                    <h1 className="text-md lg:text-4xl font-serif font-semibold">{ bannerTitle }</h1>
                    <p className="my-4 text-sm lg:text-md">Home / { bannerSubTitle }</p>
                </div>
            </section>
     );
}
 
export default TopBannerPage;