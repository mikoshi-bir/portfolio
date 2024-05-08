import Card from "~/components/card";
import email from "./assets/mail.png"

export default function ContactEmail () {
  return (
    <Card className="bg-[#c1aa7d] rounded-xl h-[301px] flex flex-col justify-center items-center basis-1/2 relative">
      <div className="bg-white absolute top-10 px-3 py-1 rounded-2xl text-center">
        <a href="mailto:alexbir.blackbox@gmail.com" target="_blank" rel="noopener noreferrer">alexbir.blackbox&shy;@gmail.com</a>
      </div>
      <div><img src={email} alt="Email" /></div>
    </Card>
  )
}