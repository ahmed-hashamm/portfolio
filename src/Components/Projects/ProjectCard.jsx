import {
  Card,
  CardHeader,
  CardBody,
 
  Typography,
 
} from "@material-tailwind/react";
import { MdArrowOutward } from "react-icons/md";
import {react,js,html,css,tailwind,framer,firebase} from '../../assets/index'
 
export function ProjectCard({img,title,description,className,link}) {
  return (
    <div className={` flex flex-col md:flex-row justify-center items-center md:justify-between p-16 mt-32 ${className}`}>

    <Card className="w-72 flex justify-center bg-black items-center text-white h-96 ring-2 ring-violet-600 shadow-lg shadow-violet-500">
      <CardHeader floated={false} className="w-40 bg-black  ">
        <img className="object-contain object-center"  src={img} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2 underline carter-one-regular decoration-violet-500">
         {title}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
{description}        </Typography>
<a 
target="_blank"
className="hover:text-blue-500  font-bold cursor-pointer flex justify-center items-center gap-1" href={link}>Visit<MdArrowOutward /></a>
      </CardBody>
    </Card>
    <div className="tech mt-14 md:mt-0">
      <h2 className="text-[4vw] text-white text-center font-semibold carter-one-regular">Tech Used</h2>
      <div className="images flex flex-wrap max-w-[500px] justify-center  gap-4 mt-10">
        <div className="w-24 h-24 rounded-full ring-2 p-2 flex justify-center items-center">
          <img className="w-18 object-contain object-center" src={react} alt="react" />
        </div>
        <div className="w-24 h-24 rounded-full ring-2 ring-red-500  flex justify-center items-center">
          <img  className="w-18 object-center"src={html} alt="html" />
        </div>
        <div className="w-24 h-24 rounded-full ring-blue-600 ring-2 p-2 flex justify-center items-center">
          <img className="w-14 object-contain object-center" src={css} alt="css" />
        </div>
        <div className="w-24 h-24 rounded-full ring-blue-500  ring-2 p-2 flex justify-center items-center">
          <img className="w-16 object-contain object-center" src={tailwind} alt="tailwind" />
        </div>
        <div className="w-24 h-24 rounded-full ring-2 ring-yellow-600  p-2 flex justify-center items-center">
          <img className="w-18 object-contain object-center" src={js} alt="javascript" />
        </div>
        <div className="w-24 h-24 rounded-full ring-2 ring-violet-600  p-2 flex justify-center items-center">
          <img className="w-18 object-contain object-center" src={framer} alt="framerMotion" />
        </div>
        <div className="w-24 h-24 rounded-full ring-2 ring-orange-600  p-2 flex justify-center items-center">
          <img className="w-16 object-contain object-center" src={firebase} alt="framerMotion" />
        </div>
       
      </div>
    </div>
            </div>
  );
}