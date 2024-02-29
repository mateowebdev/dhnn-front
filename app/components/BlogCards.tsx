import Slider from "./Slider";
import { Noticia } from "../types/Noticia";

type blogProps = {
  blogs: Noticia[];
};

export default function BlogCards({ blogs }: blogProps) {
  return (
    <div className="bg-gray-50 sm:pl-20 py-20 flex flex-col sm:flex-row items-end gap-10">
      <div className="min-w-[360px] max-w-full sm:max-w-[360px] p-4 py-8 flex flex-col">
        <div className="flex">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-gray-500 uppercase font-medium text-sm">
              Lorem ipsum
            </h3>
            <h2 className="font-bold text-5xl text-black">
              Lorem ipsum dolor sit amet
            </h2>
          </div>
        </div>
        <div className="flex flex-col sm:items-start gap-4">
          <div className="h-[1px] w-32 mt-4 bg-blue-700"></div>
          <p className="text-gray-600  line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            nihil unde officiis a eos minima optio facilis sed iste quo.
          </p>
          <button className="border-2 border-blue-700 text-blue-700 p-4 font-medium text-sm rounded">
            Call to action
          </button>
        </div>
      </div>

      <Slider blogs={blogs} />
    </div>
  );
}
