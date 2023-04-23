import Layout from "@/components/Layout";
import Home from "@/components/screens/Home/Home";

export default function IndexPage({ countries }: any) {
  return (
    <Layout>
      <Home countries={countries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
