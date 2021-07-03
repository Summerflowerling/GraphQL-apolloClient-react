import { useQuery, gql } from "@apollo/client";

const GET_COUNTRY = gql`
  query {
    countries{
      code
      name
      continent{
        name
      }
    }
}
`;

function GetCountry() {

    const { loading, error, data } = useQuery(GET_COUNTRY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;

    return data.countries.map((item) => (
        <div id={item.code}>
            <h3>{item.name}:{item.continent.name}</h3>
        </div>
    ));
}

export default GetCountry;