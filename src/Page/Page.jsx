import Header from "../components/Header/Header";
import WeatherBoard from "../components/weather/WeatherBoard";
import FavouriteProvider from "../provider/FavoriteProvider";
import LocationProvider from "../provider/LocationProvider";
import WeatherProvider from "../provider/WeatherProvider";

const Page = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
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
    </LocationProvider>
  );
};

export default Page;
