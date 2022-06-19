import { gql, useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { title } from "process";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Book, findManyBookCountArgs } from "../generated";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { pathname, push } = useRouter();

  const EXCHANGE_RATES = gql`
    query Query($take: Int) {
      findManyBook(take: $take) {
        title
        author {
          name
        }
        id
      }
    }
  `;

  const BOOK_COUNT = gql`
    query FindManyBook {
      findManyBookCount
    }
  `;
  // const FIRST_BOOKS = gql`
  //   query FindFirstBook {
  //     findFirstBook {
  //       title
  //     }
  //   }
  // `;

  // const { data } = useQuery<{ findManyBook: Book[] }>(EXCHANGE_RATES, {
  //   variables: { take: 1 },
  // });

  const { data } = useQuery<{ findManyBook: Book[] }>(EXCHANGE_RATES);

  type count = number;

  const {
    loading,
    error,
    data: BookCount,
  } = useQuery<{ findManyBookCount: count }>(BOOK_COUNT);

  if (loading)
    return (
      <div className=" h-screen text-center  align-middle">
        <p className="text-3xl font-semibold text-green-400">
          PERPUS<span className="text-gray-600 text-xl">kita</span>
        </p>
        <p className="text-gray-400 text-xl">Loading...</p>
      </div>
    );

  // if (error) return <p>Error</p>;

  // async function getServerSideProps() {
  //   const { data } = await client.useQuery<({
  //      Query($take: Int) {
  //           findManyBook(take: $take) {
  //             title
  //             author {
  //               name
  //             }
  //             id
  //           }
  //         }
  //   })>;

  //   return {
  //     props: {
  //       countries: data.countries.slice(0, 4),
  //     },
  //   };
  // }
  return (
    <div>
      <Navbar />
      <section>
        <div className="text-center flex flex-col gap-3 justify-center mt-11">
          <h3 className="font-bold text-6xl text-gray-700">
            Let&apos;s Increase Your <br />
            <span className="text-green-400">Knowledge</span>
          </h3>

          <p className="text-gray-400">
            Find Your Favorite Book and Start Increase Your Knowledge
          </p>

          <div className="flex gap-3 justify-center">
            <Link href="#">
              <Button color="red" px={20}>
                Get Started
              </Button>
            </Link>
            <Link href="#">
              <Button type="outlined" px={20}>
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* <div>
        {data?.findManyBook.map(({ id, title }) => (
          <div key={id}>
            <p>
              {id}: {title}
            </p>
          </div>
        ))}
      </div> */}
      <section>
        <div className="flex justify-center w-full h-full">
          <Image height={900} width={1600} src="/groups.png" alt="People" />
        </div>
      </section>

      <section className="flex flex-col justify-center text-center">
        <h3 className="font-medium text-3xl">
          Why Chose{" "}
          <span className="text-green-500 font-semibold">PERPUSKita</span>
        </h3>

        <div className="flex gap-3 lg:gap-9 justify-center mt-10">
          {[
            {
              name: "Book",
              image: "/books.png",
              contentTop: (
                <div className="text-white text-xl font-medium">
                  More than <br /> {BookCount?.findManyBookCount}{" "}
                  <span className=" font-bold text-yellow-300">
                    Book Collection
                  </span>
                </div>
              ),
              contentBottom: (
                <div className="opacity-80 font-normal text-white">
                  We are here with a total of
                  <br /> {BookCount?.findManyBookCount} book collections.
                </div>
              ),
              bg: "bg-blue-400",
            },
            {
              name: "World",
              image: "/worlds.png",
              contentTop: (
                <div className="text-white text-xl font-medium">
                  More than <br /> 500{" "}
                  <span className=" font-bold text-gray-800">Branches</span>
                </div>
              ),
              contentBottom: (
                <div className="opacity-80 font-normal text-white">
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
                <div className="text-white text-xl font-medium">
                  More than <br /> 1,500{" "}
                  <span className=" font-bold text-yellow-300">
                    Certified Librarians
                  </span>
                </div>
              ),
              contentBottom: (
                <div className="opacity-80 font-normal text-white">
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
        <h3 className="font-medium text-3xl">
          Login to <span className="text-green-600">Start</span>
        </h3>

        <small className="text-gray-400">
          Login to your account and start <br />
          to find your favorite book
        </small>

        <div className="flex gap-10 lg:gap-24 justify-center my-4 ">
          {[
            { name: "Login Student", route: "/login", image: "/siswa.png" },
            { name: "Login Admin", route: "/login", image: "/admin.png" },
          ].map((e) => (
            <div key={e.name} className="flex gap-3 flex-col">
              <Image src={e.image} height={430} width={280} />

              <Button>{e.name}</Button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
