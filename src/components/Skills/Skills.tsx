import iosimage from "../../assets/IOS.png";
import img1 from "../../assets/skills/1.png";
import img2 from "../../assets/skills/2.png";
import img3 from "../../assets/skills/3.png";
import img4 from "../../assets/skills/4.png";
const Skills = () => {
  return (
   <>
   <p className="mt-8 text-4xl poppins-bold text-newblue text-center">My Skills</p><br></br>
      {/* Skills Part */}
<div className="md:flex">      
<div className="">
<div className="md:w-72 h-82 m-8 rounded-2xl p-8 flex flex-col justify-center items-center bg-newblack">
    <img src={img1} alt="1"></img><br></br>
    <p>Product Management</p><br></br>
    <p>Having a great vision to forecast product growth, With strong understanding of business model creation, product architecture, product design, marketing, financial metrics, scalability, and continuous learning. My strong market validation with conversation with  10,000 like Top VCs, angels, HNIs, top executives, and professionals. </p>
</div>
<div className="md:w-72 h-82 m-8 rounded-2xl p-8 flex flex-col justify-center items-center bg-newblack">
    <img src={img2} alt="1"></img><br></br>
    <p>MARKETING & Brand Building </p><br></br>
    <p>With Strong Experience in Marketing & Stratergising have helped over 30+ brands. My deeper interest targeting on Affiliated marketing also creating in-app marketing element also using data analytics for post analytics to have higher engagement with TA. My passion for graphics and brand visualization fuels me to make brand with world class standards.. </p>
</div>
</div>
{/* IOS IMAGE */}


<div className="">
  <img src={iosimage} alt="Image" className="mt-9"></img>
</div>


<div className="">
<div className="md:w-72 h-82  m-8 rounded-2xl p-8 flex flex-col justify-center items-center bg-newblack">
    <img src={img1} alt="1"></img><br></br>
    <p>Product Management</p><br></br>
    <p>Having a great vision to forecast product growth, With strong understanding of business model creation, product architecture, product design, marketing, financial metrics, scalability, and continuous learning. My strong market validation with conversation with  10,000 like Top VCs, angels, HNIs, top executives, and professionals. </p>
</div>
    <div className="md:w-72 h-82  m-8 rounded-2xl p-8 flex flex-col justify-center items-center bg-newblack">
    <img src={img1} alt="1"></img><br></br>
    <p>Product Management</p><br></br>
    <p>Having a great vision to forecast product growth, With strong understanding of business model creation, product architecture, product design, marketing, financial metrics, scalability, and continuous learning. My strong market validation with conversation with  10,000 like Top VCs, angels, HNIs, top executives, and professionals. </p>
</div>
</div>
</div> 
   </>
  )
}

export default Skills