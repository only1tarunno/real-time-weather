import Page from "./Page/Page";
import FavouriteProvider from "./provider/FavoriteProvider";
import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavouriteProvider>
            <Page />
          </FavouriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
