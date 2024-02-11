import Header from "../components/Header/Header";
import WeatherBoard from "../components/weather/WeatherBoard";

const Page = () => {
  return (
    <div>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section className="">
            <WeatherBoard />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Page;
