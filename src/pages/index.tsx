import Layout from "@/components/main/layout/Layout";
import { gql } from "@apollo/client";
import * as React from "react";

import { client } from "../lib/apollo";
import Hero from "@/sections/homePage/Hero";
import Grid from "@/sections/homePage/Grid";

export default function Home({ films }: any) {
  console.log(films);
  return (
    <Layout>
      <Hero />
      <Grid films={films} />
    </Layout>
  );
}

export async function getStaticProps() {
  const GET_FILMS = gql`
    query ExampleQuery {
      allFilms {
        edges {
          node {
            title
            director
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: GET_FILMS,
  });

  return {
    props: {
      films: data.allFilms.edges,
    },
    revalidate: 1,
  };
}
