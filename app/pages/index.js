import gql from "graphql-tag";
import Link from "next/link";

import App from "../components/App";
import InfoBox from "../components/InfoBox";
import { withApollo, initApolloClient } from "../lib/apollo";

// activeSeason: allSeasons(where: { status_not: FINISHED }, first: 1) {
//   id
// }

// getStaticProps is only called server-side
export async function unstable_getStaticProps() {
  const apolloClient = initApolloClient();
  const { data, error } = await apolloClient.query({
    query: gql`
      query {
        allSeasons {
          id
          name
          status
          _eventsMeta {
            count
          }
        }
      }
    `
  });

  if (!data.allSeasons || !data.allSeasons.length) {
    return { seasons: [], error };
  }

  return { props: { seasons: data.allSeasons } };
}

const IndexPage = ({ seasons }) => (
  <App>
    <InfoBox>ℹ️ Please select a season.</InfoBox>
    <ul>
      {seasons.map(season => (
        <li>
          <Link href="/seasons/[slug]" as={`/seasons/${season.name}`}>
            <a>{season.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </App>
);

export default withApollo(IndexPage, { ssr: false });
