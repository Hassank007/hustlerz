import React from "react";
import Navbar from "../components/Navbar";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdSupportAgent } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import Footer from "../components/Footer";
const page = () => {
    return (
        <><Navbar ncolor={'bg-white'}/>
        <div className="relative">
            <img src="./service.jpg" className="w-full h-[30rem] sm:h-[33rem] object-cover" />
            <div className="absolute inset-0 bg-secondary opacity-95"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center sm:pt-20">
                <h1 className="text-white text-3xl sm:text-6xl font-bold pheader text-center">
                "Service without quality is empty,<br/> and quality without service is unnoticed."
                    
                </h1>
                <p className="text-white sm:text-3xl font-bold pheader text-center pt-10">
                — James Bowman
                </p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center bg-white w-full h-[63rem] sm:h-[33rem]">
<div className="sm:pl-24 sm:pb-28 pb-4">
    <HiOutlineLightBulb className="sm:text-[16rem] text-[10rem]"/>
</div>
<div className="flex flex-col  w-full sm:w-[70rem] sm:px-20 px-5">
    <h1 className="text-2xl pheader font-bold sm:py-7 py-4">

    Design & Development
    </h1>
    <p className="text-sm ">In this digital age, if your business is not online, you don’t exist. So if you want to create a new website for your business or revamp an existing one, Olive Digital is at your service. Our web solutions and designs are search engine friendly, aesthetically appealing, interactive, and powerful enough to build a solid presence of your business in the online world. We have the expertise, skills and experience to design and deliver complex systems, custom web platforms, and mobile applications. What makes us different from others is our working methodology; we understand your needs, focus on your requirements, and deliver beyond your expectations. At present, we are offering following design and development services</p>
    <ul className="list-disc text-sm sm:px-4 sm:py-4 py-3 px-3 space-y-1">
        <li> Corporate ID</li>
        <li>Website design & development</li>
        <li>CMS & web dashboard development</li>
        <li>Responsive & mobile website development</li>
        <li>Responsive & mobile website development</li>
        <li>App Development</li>
        <li>Information Architecture</li>
        <li>Ad Creatives</li>

    </ul>
</div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center bg-[#231f20] w-full h-[63rem] sm:h-[33rem]">

<div className="flex flex-col  w-full sm:w-[70rem] sm:px-20 px-5">
    <h1 className="text-2xl pheader font-bold sm:py-7 py-4 text-white">

    Support
    </h1>
    <p className="text-sm  text-white">Don’t put your business on life-support when you can have the real one. If you wish to see your business flourish, then only rely on dedicated and professional support. Whether you want to update your website or need to fix some bugs, at Olive Digital we do it all. Our team of experts can effectively manage your web hosting as well as your social media accounts. Anyone can put your business on life-support, but only people with the right training, skills, and expertise can help you set it up and running. At Olive Digital, we don’t just make promises, we go above and beyond to live up to your expectations and deliver more than we commit! We have all the right means and resources to take your business to a whole new level. Olive Digital business support solutions include:</p>
    <ul className="list-disc text-sm sm:px-4 sm:py-4 py-3 px-3 text-white space-y-1">
        <li> Maintenance</li>
        <li>Tech support</li>
        <li>Social Media Support</li>
        <li>Customer Support</li>
        <li>Web hosting</li>
        

    </ul>
</div>
<div className="sm:pl-4 sm:pb-28 py-12">
    <MdSupportAgent className="sm:text-[14rem] text-[10rem] text-white"/>
</div>
        </div>




        <div className="flex flex-col sm:flex-row items-center justify-center bg-white w-full h-[86rem] sm:h-[40rem]">
<div className="sm:pl-24 sm:pb-28 pb-4">
    <GiNetworkBars className="sm:text-[16rem] text-[10rem]"/>
</div>
<div className="flex flex-col  w-full sm:w-[70rem] sm:px-20 px-5">
    <h1 className="text-2xl pheader font-bold sm:py-7 py-4">

    Digital Marketing & Strategy
    </h1>
    <p className="text-sm ">Whether you are an established business or a new start-up, you need to be visible online. In this digital age, business growth is tied to robust digital marketing strategies. At Olive Digital, we know that the digital world is volatile, unpredictable and impulsive. Our result-oriented digital marketing strategies focus not only on quick-win tactics, but are also designed to meet your long-term business needs. Olive Digital has a reputation of delivering great returns across all digital channels.
        <br/>
        <br/>
        We can build a community around your company with our effective community management and social media strategies. Our highly skilled team of SEO experts is equipped with the expertise to increase the ranking of your website and align it precisely with what your potential customers are searching for. Our custom-made digital marketing campaigns will help you increase your brand awareness, sales and customer base. Our creative and skilled team uses tailor-made campaign optimization techniques to help you achieve your goals. We do not put all eggs in one basket, instead we use various digital platforms to target your potential customers. Our experts know when to target customers through paid media, and when social media campaigns can strengthen your brand image. We offer following digital marketing and strategy solutions:

 
    </p>
    <ul className="list-disc text-sm sm:px-4 sm:py-4 py-3 px-3 space-y-1">
        <li> Campaign Strategy</li>
        <li>SMS marketing</li>
        <li>Email marketing</li>
        <li> Search Marketing</li>
        <li>Display Marketing</li>
        <li>Social media strategy</li>
        <li>Social Media & Community Management</li>
        <li>Analytics and Reporting</li>
        <li>SEO</li>
        
    </ul>
</div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center bg-[#231f20] w-full h-[68rem] sm:h-[33rem]">

<div className="flex flex-col  w-full sm:w-[70rem] sm:px-20 px-5">
    <h1 className="text-2xl pheader font-bold sm:py-7 py-4 text-white">

    ECommerce
    </h1>
    <p className="text-sm  text-white">At Olive Digital, our team of professionals is well equipped with the intricate knowledge of online shopping and has a vast experience of building efficient and integrated eCommerce platforms. Our all-in-one eCommerce platform with powerful digital sales strategy is what you need to kick-start your business. We can help you build a next generation e-commerce platform that will not only simplify online shopping for your customer, but will also add great value to your business. From a fully integrated e-store with the payment gateway of your choice, to web design, cart system, and marketing, we do it all. Our team of professional web developers can customize any content management system (CMS) and tailor it to your specific business needs. You can also expand your customer reach by using our digital franchising solution in your eCommerce platform. We design, develop, maintain, and host Magento, OpenCart, Shopify and any other ecommerce solutions for our clients. Olive Digital’s eCommerce solutions include:</p>
    <ul className="list-disc text-sm sm:px-4 sm:py-4 py-3 px-3 text-white space-y-1">
        <li> Digital franchising</li>
        <li>Data Entry & Content management</li>
        <li>Digital Sales Strategy</li>
       
        

    </ul>
</div>
<div className="sm:pl-4 sm:pb-16 py-10">
    <FaCartArrowDown     className="sm:text-[14rem] text-[10rem] text-white"/>
 
</div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center bg-white w-full h-[63rem] sm:h-[33rem]">
<div className="sm:pl-24 sm:pb-28 pb-4">
    <CiMobile3 className="sm:text-[16rem] text-[10rem]"/>
</div>
<div className="flex flex-col  w-full sm:w-[70rem] sm:px-20 px-5">
    <h1 className="text-2xl pheader font-bold sm:py-7 py-4">

    Content Generation
    </h1>
    <p className="text-sm ">Content is a way to persuade your customer, and persuasion doesn’t come easy. It is an art that requires free choice and careful attention to the audience and their needs. It makes people trust you, buy from you, and become loyal to your brand. Our creative content artists are gifted with the art of persuasion and are experts in weaving an identity for your brand that’s strong enough to last for ages to come. From creating engaging blogs, appealing videos, to producing compelling ad copies and inventing catchy taglines and slogan, our growing list of clients is the living proof of our mastery in the realm of content creation. We produce actionable content that not only appeals to your customers on a personal level, but also provides them a room to take action on their own. You can rely on Olive Digital for following content generation services:</p>
    <ul className="list-disc text-sm sm:px-4 sm:py-4 py-3 px-3 space-y-1">
        <li> Blogging</li>
        <li>Website Content</li>
        <li>Key Visuals</li>
        <li>Videos</li>
        <li>Copywriting</li>
        

    </ul>
</div>
        </div>
        <Footer/>
        </>
    )
}
export default page;