import Card from "~/components/card";
import telegram from "./assets/telegram.png"

export default function ContactTg () {
  return (
    <Card className="bg-[#27a7e6] rounded-xl h-[301px] flex flex-col justify-center items-center basis-1/2 relative max-sm:h-[250px]">
      <div><img src={telegram} alt="Telegram" /></div>
      <div className="bg-white absolute bottom-10 px-3 py-1 rounded-2xl max-sm:bottom-3 max-sm:text-sm">
        <a href="http://t.me/mika_kate" target="_blank" rel="noopener noreferrer">@mika_kate</a>
      </div>
    </Card>
  )
}