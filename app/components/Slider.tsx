import Image from "next/image";
import { Noticia } from "../types/Noticia";

type blogProps = {
  blogs: Noticia[];
};

export default function Slider({ blogs }: blogProps) {
  return (
    <div className="flex flex-col items-end overflow-x-hidden">
      <div className="w-full flex items-center gap-6 overflow-x-scroll scroll-smooth scrollbar-hide snap-mandatory snap-x">
        {blogs.map((blog) => (
          <article
            key={blog.attributes.slug}
            className="min-w-[380px] max-w-[370px] p-4 flex flex-col snap-start"
          >
            <div className="flex">
              <div className="flex-1 flex flex-col gap-2">
                <div className="w-full h-[230px] bg-gray-200 flex items-center justify-center">
                  <Image
                    width={1000}
                    height={250}
                    alt="plane"
                    src={`/images/${blog.attributes.imagenUrl}`}
                    className="object-cover max-w-full max-h-full rounded-md"
                  ></Image>
                </div>
                <div className="h-[2px] w-full mt-4 bg-gray-800"></div>
                <h2 className="font-bold text-2xl text-black">
                  {blog.attributes.titulo}
                </h2>
              </div>
            </div>
            <div className="flex flex-col sm:items-start gap-4">
              <p className=" text-gray-600 line-clamp-1">
                {blog.attributes.descripcion[0].children[0].text}
              </p>
              <a className=" text-blue-700 font-medium text-sm underline">
                Call to action
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="py-4 pr-40">
        <p>
          01
          <span className="text-blue-700 px-2">/</span>
          <span className="text-gray-500">0{blogs.length}</span>
        </p>
      </div>
    </div>
  );
}
