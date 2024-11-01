import SocialGroup from "@/Components/SocialGroup";

const MainLayout = ({ children }) => {
    return ( 
        <div className="flex flex-col min-h-screen bg-pattern bg-no-repeat bg-auto bg-center">
            <header>
                <nav className="container max-w-[1200px] my-2 px-8 py-4 bg-jinawi-primary rounded-xl flex justify-between">
                    <img src="/Logo.png" alt="jinawi logo" className="w-12" />
                    <ul className="menu hidden md:flex items-center gap-8 text-md text-white">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li>Project</li>
                        <li>Blog</li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <svg className="cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="white" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"/></g></svg>
                </nav>
            </header>
            <main>{children}</main>
            <footer className="w-full bg-jinawi-primary p-10 rounded-t-lg">
                <div className="container max-w-[1200px] flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-0">
                    <div className="flex flex-col items-center lg:items-start">
                        <img src="/Logo.png" alt="jinawi logo" className="w-24"/>
                        <p className="text-white text-center max-w-sm mt-4 text-md lg:text-left">It is a long established fact that a reader will be distracted lookings.</p>
                        <div className="mt-4">
                            <SocialGroup />
                        </div>
                    </div>
                    <div className="text-center text-white lg:text-left">
                        <h4 className="h4">Pages</h4>
                        <ul className="text-white text-md">
                           <li className="mt-4"><a href="#">About</a></li> 
                           <li className="mt-2"><a href="#">Project</a></li> 
                           <li className="mt-2"><a href="#">Blog</a></li> 
                           <li className="mt-2"><a href='/contact'>Contact</a></li> 
                        </ul>
                    </div>
                    <div className="text-white text-center lg:text-left">
                        <h4 className="h4">Contact</h4>
                        <p className="mt-4 w-60">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                        <p className="mt-4">contact@interno.com</p>
                        <p className="mt-4">(123) 456 - 7890</p>
                    </div>
                </div>
            </footer>
        </div>
     );
}
 
export default MainLayout;