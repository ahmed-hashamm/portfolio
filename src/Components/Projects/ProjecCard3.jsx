import {
    Card,
    CardHeader,
    CardBody,
   
    Typography,
    
  } from "@material-tailwind/react";
  import { gym } from "../../assets";
  import {react,js,html,css,tailwind,framer,} from '../../assets/index'
   
  export function ProjectCard3() {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-around  mt-40">
  
      <Card className="w-72 flex justify-center bg-black items-center text-white  h-96 ring-2 ring-red-600 shadow-lg shadow-red-500">
        <CardHeader floated={false} className="h-52 w-full  ">
          <img src={gym} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2 underline carter-one-regular decoration-red-500">
            Gainzz
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
         Landing Page for Gainzz, a fitness app that offers personalized workout plans to users.A section to display the training staff and a contact form or booking.
          </Typography>
        </CardBody>
      </Card>
      <div className="tech mt-14 md:mt-0">
        <h2 className="text-[4vw] text-white text-center font-semibold carter-one-regular">Tech Used</h2>
        <div className="images flex flex-wrap max-w-80 justify-center  gap-4 mt-10">
          <div className="w-24 h-24 rounded-full ring-2 p-2 flex justify-center items-center">
            <img className="w-18 object-contain object-center" src={react} alt="" />
          </div>
          <div className="w-24 h-24 rounded-full ring-2 ring-red-500  flex justify-center items-center">
            <img  className="w-18 object-center"src={html} alt="" />
          </div>
          <div className="w-24 h-24 rounded-full ring-blue-600 ring-2 p-2 flex justify-center items-center">
            <img className="w-14 object-contain object-center" src={css} alt="" />
          </div>
          <div className="w-24 h-24 rounded-full ring-blue-500  ring-2 p-2 flex justify-center items-center">
            <img className="w-16 object-contain object-center" src={tailwind} alt="" />
          </div>
          <div className="w-24 h-24 rounded-full ring-2 ring-yellow-600  p-2 flex justify-center items-center">
            <img className="w-18 object-contain object-center" src={js} alt="" />
          </div>
          <div className="w-24 h-24 rounded-full ring-2 ring-violet-600  p-2 flex justify-center items-center">
            <img className="w-18 object-contain object-center" src={framer} alt="" />
          </div>
         
        </div>
      </div>
              </div>
    );
  }