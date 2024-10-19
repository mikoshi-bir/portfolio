import type { MetaFunction } from "@remix-run/node";
import { AboutMe } from "~/blocks/about";
import ContactEmail from "~/blocks/contact-email";
import ContactTg from "~/blocks/contact-tg";
import ProjectShop from "~/blocks/project-shop";
import ProjectWord from "~/blocks/project-word";

export const meta: MetaFunction = () => {
  return [
    { title: "Портфолио" },
    { name: "description", content: "Моё портфолио!" },
  ];
};



export default function Index() {
  return (
    <div className="bg-[#f7f2f2] h-[100vh] font-sans p-3">
      <h1 className="text-4xl font-medium font-serif text-center p-3">Kate`s portfolio</h1>
      <div className="flex gap-5 mx-auto max-w-[1200px] max-sm:flex-col">
        <div className="flex-grow basis-1/2">
          <section >
            <AboutMe />
          </section>
          <section className="flex gap-5 justify-between mt-5 max-sm:hidden">
            <ContactTg />
            <ContactEmail />
          </section>
        </div>
        <section className="flex-grow basis-1/2 flex flex-col gap-5">
          <ProjectWord />
          <ProjectShop />
        </section>
        <section className="flex gap-5 justify-between hidden max-sm:flex">
            <ContactTg />
            <ContactEmail />
        </section>
      </div>
      
    </div>
  );
}
