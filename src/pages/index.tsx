import HeroCard from "../components/HeroCard";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { useGetHeroesQuery } from "../redux/services/heroesApi";

const Home = () => {
  const { data: heroesData, isFetching } = useGetHeroesQuery();

  return (
    <Layout>
      <>
        {isFetching ? (
          <div className="p-4 flex flex-col items-center">
            <Loader />
            <p>Loading</p>
          </div>
        ) : null}

        <div className="p-4 grid gap-4 mx-auto max-w-4xl grid-cols-2 sm:grid-cols-4">
          {heroesData?.data.results.map((hero) => {
            const imgUrl = hero.thumbnail.path + "." + hero.thumbnail.extension;
            const url = hero.urls.find((link) => link.type === "detail");

            return (
              <HeroCard
                key={hero.id}
                name={hero.name}
                description={hero.description}
                imgUrl={imgUrl}
                url={url.url || ""}
              />
            );
          })}
        </div>
      </>
    </Layout>
  );
};

export default Home;
