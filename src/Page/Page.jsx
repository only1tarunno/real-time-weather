import Header from "../components/Header/Header";
import WeatherBoard from "../components/weather/WeatherBoard";
import FavouriteProvider from "../provider/FavoriteProvider";
import WeatherProvider from "../provider/WeatherProvider";

const Page = () => {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        {" "}
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section className="">
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
};

export default Page;
