export default function Team() {
  return (
    <section id="team" className="py-6 dark:bg-white dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold text-black leadi text-center sm:text-5xl">
          Our team
        </h1>
        <p className="max-w-2xl text-center dark:text-gray-400">
          Our bakery is the result of countless hours of passion, creativity,
          and hard work. Meet the talented individuals whose dedication to the
          art of baking brings joy and delight to your taste buds. From our
          master baker's innovative recipes to the warm welcome you receive
          in-store, every member of our team plays a pivotal role in delivering
          the exceptional treats and experiences you love.
        </p>
        <div className="flex flex-row flex-wrap-reverse justify-center">
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="/img/female.jpg"
            />
            <p className="text-xl font-semibold text-black leadi">
              Cynthia Awino
            </p>
            {/* <p className="dark:text-gray-400">Design Specialist</p> */}
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="/img/female.jpg"
            />
            <p className="text-xl font-semibold text-black leadi">
              Esther Awino
            </p>
            {/* <p className="dark:text-gray-400">Artisan Bread Specialist</p> */}
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="/img/male.jpg"
            />
            <p className="text-xl font-semibold text-black leadi">Aaron Ouma</p>
            {/* <p className="dark:text-gray-400">Sweet Creations</p> */}
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="/img/male.jpg"
            />
            <p className="text-xl font-semibold text-black leadi">
              Stephen Maloba
            </p>
            {/* <p className="dark:text-gray-400">Barista</p> */}
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="/img/male.jpg"
            />
            <p className="text-xl font-semibold text-black leadi">
              Lenard Ngwabe
            </p>
            {/* <p className="dark:text-gray-400">Master Baker & Pastry Chef</p> */}
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="/img/male.jpg"
            />
            <p className="text-xl font-semibold text-black leadi">
              Emmanuel Oduor
            </p>
            {/* <p className="dark:text-gray-400">Manager & Customer Relations</p> */}
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="/img/female.jpg"
            />
            <p className="text-xl font-semibold text-black leadi">
              Electine Nyongesa
            </p>
            {/* <p className="dark:text-gray-400">Manager & Customer Relations</p> */}
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="/img/female.jpg"
            />
            <p className="text-xl font-semibold text-black leadi">
              Roselyne Makokha
            </p>
            {/* <p className="dark:text-gray-400">Manager & Customer Relations</p> */}
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="/img/female.jpg"
            />
            <p className="text-xl font-semibold text-black leadi">
              Lilian Adhiambo
            </p>
            {/* <p className="dark:text-gray-400">Manager & Customer Relations</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
