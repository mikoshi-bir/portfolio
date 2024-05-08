import Card from "~/components/card";
import myPhoto from "./assets/photo.jpg"
import ears from "./assets/ears.svg"
import gitLogo from "./assets/git.png"

export function AboutMe () {
  return (
    <Card className="bg-white min-h-[376px] p-8 flex flex-col gap-2.5 rounded-xl">
      <div className="relative">
        <img src={ears} alt="Кошачьи ушки" className="h-[27px] absolute left-[21px] top-[-6px]" />
        <img src={myPhoto} alt="Моё фото" className="h-[150px]"/>
      </div>
      <div>
        Привет, меня зовут Екатерина и я начинающий frontend разработчик.
        Работаю с HTML, CSS, JS, React. Каждый проект для меня это шанс
        сотворить произведение искусства
      </div>
      <div>Мне интересны HTML, CSS, JavaScript, React, Next.js</div>
      <div className="flex">
        <a className="flex items-center gap-1 border-b border-black" href="http://github.com/mikoshi-bir" target="_blank" rel="noopener noreferrer" ><img src={gitLogo} alt="Git" />мой гитхаб</a>
      </div>
    </Card>
  )
}