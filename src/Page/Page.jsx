import Header from "../components/Header/Header";
import WeatherBoard from "../components/weather/WeatherBoard";
import WeatherProvider from "../provider/WeatherProvider";

const Page = () => {
  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section className="">
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
};

export default Page;
