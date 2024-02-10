import Header from "../components/Header/Header";
import WeatherBoard from "../components/weather/WeatherBoard";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <section className="">
          <WeatherBoard />
        </section>
      </main>
    </>
  );
};

export default Page;
