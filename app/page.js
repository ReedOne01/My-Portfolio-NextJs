import Image from "next/image";
import pic from "../public/pic.jpeg";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import pic2 from "../public/pic2.jpeg";
import pic3 from "../public/pic3.jpeg";
import pic4 from "../public/pic4.jpeg";
import pic5 from "../public/pic5.jpeg";
import pic6 from "../public/pic6.svg";
import pic7 from "../public/pic7.jpeg";
import img1 from "../public/img1.jpeg";
import img2 from "../public/img2.jpeg";
import img3 from "../public/img3.PNg";
import img4 from "../public/img4.jpeg";
import img5 from "../public/img5.jpeg";
import img6 from "../public/img6.jpeg";
// import useState from "react";
// import Head from "next/head";

export default function Home() {
  // const { darkMode, setDarkMode } = useState(false);
  return (
    // <div className={darkMode ? "dark" : ""}>
    // <Head>
    //   <title>My Nextjs Portfolio</title>
    // </Head>
    <main className=" bg-white px-10 md:px-20 lg:px-40">
      <section className="">
        <nav className=" py-10 mb-10 flex justify-between">
          <h1 className=" text-sm font-burtons  ">DEVELOPEDBY</h1>
          <ul className=" flex items-center ">
            <li className=" text-2xl">
              <BsFillMoonStarsFill
                // onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer"
              />
            </li>
            <li>
              <a
                className=" cursor-pointer bg-gradient-to-br from-cyan-500 to-teal-500 text-white ml-4 px-6 py-2 rounded-md"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className=" text-center py-2 px-6">
          <h2 className=" text-5xl py-2 text-teal-500 font-medium md:text-6xl">
            ReadOne Bello
          </h2>
          <h3 className=" text-2xl text-medium py-2 md:text-3xl">
            Developer and Designer
          </h3>
          <p className=" text-gray-800 leading-8 md:text-xl max-w-lg mx-auto">
            Solution-oriented Computer Scientists with 4+ years of progressive
            experience working with computer hardware and software. Passionate
            about technology; adept at restoring computers to optimal
            performance. A full-stack web developer with numerous projects as
            evidence
          </p>
        </div>
        <div className=" text-5xl flex justify-center gap-16 mb-10 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>
        <div className="relative mx-auto mb-4 bg-gradient-to-b from-teal-500  p-10 rounded-full h-80 w-80 overflow-hidden md:h-96 md:w-96 md:mb-6">
          <Image src={pic} layout="fill" objectFit="cover" />
        </div>
      </section>
      <section>
        <h3 className=" text-3xl mx-auto py-1">Services I offer</h3>
        <p className=" text-medium leading-8 py-4 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          possimus reiciendis veniam laudantium. Officiis amet nulla non itaque
          sunt provident. Lorem{" "}
          <span className=" text-teal-500"> ipsum dolor</span> sit amet
          consectetur adipisicing elit. Sint temporibus quos nostrum cupiditate
          optio? Minima, commodi ducimus dolor dicta sed libero a{" "}
          <span className=" text-teal-500"> assumenda </span> eos perferendis.
        </p>
        <div className="py-8 md:flex flex-row gap-5 justify-center   md:flex-wrap">
          <div className="text-center shadow-lg p-10 rounded-xl my-10  basis-1/3 lg:basis-1/4 ">
            <div className="flex justify-center w-auto">
              {" "}
              <Image
                src={pic2}
                width={100}
                height={100}
                className=" align-middle"
              />
            </div>
            <h3 className="text-lg font-medium pt-4">Beautiful Designs</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              dolorem?
            </p>
            <h4 className=" text-teal-600 pt-4">Design tools I use </h4>
            <p className=" text-gray-600 py-2">Photoshop</p>
            <p className=" text-gray-600 py-2">Figma</p>
            <p className=" text-gray-600 py-2">CorelDraw</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 lg:basis-1/4">
            <div className="flex justify-center w-auto">
              {" "}
              <Image
                src={pic3}
                width={100}
                height={100}
                className=" align-middle"
              />
            </div>
            <h3 className="text-lg font-medium pt-4">Beautiful Designs</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              dolorem?
            </p>
            <h4 className=" text-teal-600 pt-4">Design tools I use </h4>
            <p className=" text-gray-600 py-2">Photoshop</p>
            <p className=" text-gray-600 py-2">Figma</p>
            <p className=" text-gray-600 py-2">CorelDraw</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 lg:basis-1/4 ">
            <div className="flex justify-center w-auto">
              {" "}
              <Image
                src={pic4}
                width={100}
                height={100}
                className=" align-middle"
              />
            </div>
            <h3 className="text-lg font-medium pt-4">Beautiful Designs</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              dolorem?
            </p>
            <h4 className=" text-teal-600 pt-4">Design tools I use </h4>
            <p className=" text-gray-600 py-2">Photoshop</p>
            <p className=" text-gray-600 py-2">Figma</p>
            <p className=" text-gray-600 py-2">CorelDraw</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 lg:basis-1/4 ">
            <div className="flex justify-center w-auto">
              {" "}
              <Image
                src={pic5}
                width={100}
                height={100}
                className=" align-middle"
              />
            </div>
            <h3 className="text-lg font-medium pt-4">Beautiful Designs</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              dolorem?
            </p>
            <h4 className=" text-teal-600 pt-4">Design tools I use </h4>
            <p className=" text-gray-600 py-2">Photoshop</p>
            <p className=" text-gray-600 py-2">Figma</p>
            <p className=" text-gray-600 py-2">CorelDraw</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 lg:basis-1/4">
            <div className="flex justify-center w-auto">
              {" "}
              <Image
                src={pic6}
                width={100}
                height={100}
                className=" align-middle"
              />
            </div>
            <h3 className="text-lg font-medium pt-4">Beautiful Designs</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              dolorem?
            </p>
            <h4 className=" text-teal-600 pt-4">Design tools I use </h4>
            <p className=" text-gray-600 py-2">Photoshop</p>
            <p className=" text-gray-600 py-2">Figma</p>
            <p className=" text-gray-600 py-2">CorelDraw</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 lg:basis-1/4 ">
            <div className="flex justify-center w-auto">
              <Image
                src={pic7}
                width={100}
                height={100}
                className=" align-middle"
              />
            </div>
            <h3 className="text-lg font-medium pt-4">Beautiful Designs</h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              dolorem?
            </p>
            <h4 className=" text-teal-600 pt-4">Design tools I use </h4>
            <p className=" text-gray-600 py-2">Photoshop</p>
            <p className=" text-gray-600 py-2">Figma</p>
            <p className=" text-gray-600 py-2">CorelDraw</p>
          </div>
        </div>
      </section>
      <section>
        <h3 className=" text-3xl py-1">Portfolio</h3>
        <p>
          Lorem ipsum, <span className="text-teal-500">dolor sit</span> amet
          consectetur adipisicing elit. Quasi, consequatur aut? Vel dignissimos
          ducimus consequaturdolor sit amet consectetur adipisicing elit. Quasi,
          consequatur aut? Vel dignissimos ducimus consequatur? Lorem ipsum,{" "}
          <span className="text-teal-500">dolor sit</span> amet consectetur
          adipisicing elit. Quasi, consequatur aut? Vel dignissimos ducimus
          consequatur?
        </p>
        <div className=" flex flex-col gap-8 justify-center align-middle p-10 md:flex-row flex-wrap">
          <div className=" mb-4  basis-1/3 flex-1 my-5 ">
            <Image
              src={img1}
              width={"100%"}
              height={"100%"}
              className=" object-cover"
              layout="responsive"
            />
          </div>
          <div className=" mb-5 basis-1/3 flex-1 my-5 ">
            <Image
              src={img2}
              width={"100%"}
              height={"100%"}
              className=" object-cover"
              layout="responsive"
            />
          </div>
          <div className=" basis-1/3 flex-1">
            <Image
              src={img3}
              width={"100%"}
              height={"100%"}
              className=" object-cover "
              layout="responsive"
            />
          </div>
          <div className=" basis-1/3 flex-1">
            <Image
              src={img4}
              width={"100%"}
              height={"100%"}
              className=" object-cover "
              layout="responsive"
            />
          </div>
          <div className=" basis-1/3 flex-1">
            <Image
              src={img5}
              width={"100%"}
              height={"100%"}
              className=" object-cover "
              layout="responsive"
            />
          </div>
          <div className=" basis-1/3 flex-1">
            <Image
              src={img6}
              width={"100%"}
              height={"100%"}
              className=" object-cover "
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </main>
    // </div>
  );
}
