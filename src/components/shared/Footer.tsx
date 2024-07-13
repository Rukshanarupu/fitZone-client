import Logo from "./header/Logo";
import { FaEnvelopeOpenText, FaFacebookF, FaInstagram, FaPhone, FaRegMap, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";


const Footer = () => {
    return (
        <div className="pt-10 pl-2 md:pl-0">
        <div className="md:flex gap-5 border-b-[1px] border-b-gray-800 pb-5">
            <div className="md:w-1/3">
                <Logo/>
                <p className="my-5">Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudanti totam aperiam inventore veritatis congue tristique ultrices. Purus finibus dapibus nunc neque commodo tellusin dapi magna quam posuere.</p>
                <div className="mb-3 md:mb-0">
                    <h6 className="text-2xl font-bold mb-3">Social Media</h6>
                    <ul className="flex gap-2">
                        <a href="" className="hover:bg-baseColor hover:text-black"><li className="border p-3"><FaFacebookF /></li></a>
                        <a href="" className="hover:bg-baseColor hover:text-black"><li className="border p-3"><FaInstagram /></li></a>
                        <a href="" className="hover:bg-baseColor hover:text-black"><li className="border p-3"><FaWhatsapp /></li></a>
                        <a href="" className="hover:bg-baseColor hover:text-black"><li className="border p-3"><FaYoutube /></li></a>
                    </ul>
                </div>
            </div>
            <div className="md:w-2/3">
                <div className="grid md:grid-cols-3 border-b-[1px] border-slate-600 justify-center md:justify-between pb-3 mb-5">
                    <div className="mb-3 md:mb-0">
                        <h6 className="text-xl lg:text-2xl font-bold mb-3">Contact Us</h6>
                        <div className="flex gap-2 items-center">
                            <FaPhone className="text-baseColor text-2xl"/>
                            <div>
                                <h2 className="font-semibold text-lg">Phone</h2>
                                <p>(+62) 123-321-543</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 md:mb-0">
                        <h6 className="text-xl lg:text-2xl font-bold mb-3">Our Email</h6>
                        <div className="flex gap-2 items-center">
                            <FaEnvelopeOpenText className="text-baseColor text-2xl"/>
                            <div>
                                <h2 className="font-semibold text-lg">Email</h2>
                                <p>support@domain.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 md:mb-0">
                        <h6 className="text-xl lg:text-2xl font-bold mb-3">Store Location</h6>
                        <div className="flex gap-2 items-center">
                            <FaRegMap className="text-baseColor text-2xl"/>
                            <div>
                                <h2 className="font-semibold text-lg">Location</h2>
                                <p>support@domain.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 justify-center md:justify-between">
                    <div>
                        <h6 className="text-xl lg:text-2xl font-bold mb-3">Quick Links</h6>
                        <div className="mb-3 md:mb-0">
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">About</a></p>
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">Sitemap</a></p>
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">Blog</a></p>
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">Contact</a></p>
                        </div>
                    </div>
                    <div className="mb-3 md:mb-0">
                        <h6 className="text-xl lg:text-2xl font-bold mb-3">Customer Service</h6>
                        <div className="">
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">Privacy Policy</a></p>
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">Terms & Conditions</a></p>
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">Support</a></p>
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">Disclaimer</a></p>
                        </div>
                    </div>
                    <div className="mb-3 md:mb-0">
                        <h6 className="text-xl lg:text-2xl font-bold mb-3">Our Shop</h6>
                        <div className="">
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">Whey Protein</a></p>
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">Gym & Sport</a></p>
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">Equipment</a></p>
                            <p className="flex gap-1 items-center hover:text-baseColor"><span><IoIosArrowForward /></span><a href="">Booking Form</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:flex justify-between py-5">
            <p>Fitness equipment Store Template by Rupu.</p>
            <p>Copyright © 2024. All rights reserved.</p>
        </div>
        </div>
    );
};

export default Footer;