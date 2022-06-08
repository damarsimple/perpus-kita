import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { pathname, push } = useRouter();

  return (
    <div>
      <nav className="flex gap-3 px-10 py-4">
        <h1 className="font-semibold text-2xl">
          <span className="text-green-400 font-extrabold ">PERPUS</span>
          <span className="text-gray-700">kita</span>
        </h1>

        <div className="flex w-full justify-between">
          <div className="flex gap-3">
            {[
              { name: "Home", route: "/" },
              { name: "Find Your Book", route: "/find" },
              { name: "About Us", route: "/about" },
            ].map((e) => (
              <Link key={e.name} href={e.route}>
                <a
                  className={
                    "mx-2 text-lg font-medium " +
                    (pathname == e.route ? "text-green-400" : "")
                  }
                >
                  {e.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            <Link href="/login">
              <a
                className={
                  "mx-2 cursor-pointer text-lg font-medium hover:bg-green-600 py-2 px-6 bg-green-400 text-white rounded-full"
                }
              >
                Login
              </a>
            </Link>
          </div>
        </div>
      </nav>

      <section>
        <div className="text-center flex flex-col gap-3 justify-center p-10">
          <h3 className="font-bold text-6xl">
            Let&apos;s Increase Your <br />
            <span className="text-green-400">Knowledge</span>
          </h3>

          <small className="text-gray-300">
            Find Your Favorite Book and Start Increase Your Knowledge
          </small>

          <div className="flex gap-3 justify-center">
            <button
              className={
                "mx-2 cursor-pointer text-lg font-medium hover:bg-green-600 py-2 px-6 bg-green-400 text-white rounded-full"
              }
            >
              Get Started
            </button>
            <button
              className={
                "mx-2 cursor-pointer text-lg font-medium py-2 px-6 rounded-full border-2 border-green-400 text-green-600 "
              }
            >
              About Us
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center w-full h-full">
          <Image height={900} width={1600} src="/groups.png" alt="People" />
        </div>
      </section>
      

      <section className="flex flex-col justify-center text-center">
        <h3 className="font-medium text-2xl">
          Why Chose <span className="text-green-600">PerpusKita</span>
        </h3>

        <div className="flex gap-10 lg:gap-24 justify-center mt-10">
          {[
            {
              name: "Book",
              image: "/books.png",
              contentTop: (
                <div className="text-white font-medium">
                  More than <br /> 5000{" "}
                  <span className=" font-bold text-yellow-300">
                    Book Collection
                  </span>
                </div>
              ),
              contentBottom: (
                <div className="opacity-70 font-thin text-white">
                  We are here with a total of
                  <br /> 5,285 book collections.
                </div>
              ),
              bg: "bg-blue-400",
            },
            {
              name: "World",
              image: "/worlds.png",
              contentTop: (
                <div className="text-white font-medium">
                  More than <br /> 500{" "}
                  <span className=" font-bold text-gray-800">Branches</span>
                </div>
              ),
              contentBottom: (
                <div className="opacity-80 font-thin text-white">
                  We are present with a total <br /> of 565 branches and spread
                  <br /> across 525 cities in Indonesia.
                </div>
              ),
              bg: "bg-yellow-400",
            },
            {
              name: "Book",
              image: "/books.png",
              contentTop: (
                <div className="text-white font-medium">
                  More than <br /> 1,500{" "}
                  <span className=" font-bold text-yellow-300">
                    Certified Librarians
                  </span>
                </div>
              ),
              contentBottom: (
                <div className="opacity-70 font-thin text-white">
                  We have 1620 librarians <br /> and all of them are certified
                </div>
              ),
              bg: "bg-purple-500",
            },
          ].map((e) => (
            <div className={`${e.bg} p-6 rounded-lg`} key={e.name}>
              <div>{e.contentTop}</div>
              <div>
                <Image src={e.image} height={140} width={140} alt={e.name} />
              </div>
              <div>{e.contentBottom}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center text-center my-24">
        <h3 className="font-medium text-2xl">
          Login to <span className="text-green-600">Start</span>
        </h3>

        <small className="text-gray-300">
          Login to your account and start <br />
          to find your favorite book
        </small>

        <div className="flex gap-10 lg:gap-24 justify-center gap-3 my-4">
          {[
            { name: "Login Student", route: "/login", image: "/siswa.png" },
            { name: "Login Admin", route: "/login", image: "/admin.png" },
          ].map((e) => (
            <div key={e.name} className="flex gap-3 flex-col">
              <Image src={e.image} height={430} width={280} />

              <button
                onClick={() => push(e.route)}
                className={
                  "mx-2 cursor-pointer text-lg font-medium hover:bg-green-600 py-2 px-6 bg-green-400 text-white rounded-full"
                }
              >
                {e.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="p-3 text-center bg-green-400 text-white my-24">
        Made with Love By Part of <span title="Damar dan Zainal">Kelompok 1</span> with  💕😘
      </section>
    </div>
  );
};

export default Home;
