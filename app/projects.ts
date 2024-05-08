import card from './blocks/assets/word-card.png'
import shop from './blocks/assets/shop.png'

console.log(card)
export const projects = {
  "card" : {
    "name": "Изучение слов",
    "description": "Проект который помогает изучать иностранную слова на желаемую тему и генерирует слова для изучения при помощи GPT-4",
    "tools": ["React", "Next.JS", "Tailwind", "Typescript", "ChatGPT"],
    "background": card,
    "githubLink": "https://github.com/mikoshi-bir/practice/tree/main/words-flip/words-flip",
    "projectLink": "https://practice-ekaterinas-projects-fb718386.vercel.app/"
  },
  "shop" : {
    "name": "Интернет-магазин",
    "description": "Групповой проект магазина украшений. Сделала карточки товаров, корзину и ее функционал",
    "tools": ["HTML", "CSS", "Tailwind", "Typescript"],
    "background": shop,
    "githubLink": "https://github.com/anastasiadergaeva/online-store-project",
    "projectLink": "https://willowy-dasik-1783f6.netlify.app/catalog/"
  }
}