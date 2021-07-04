import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../GetContinents";

function GetAfrica() {
    const { loading, error, data } = useQuery(GET_CONTINENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;

    const children = data.continents.map(item => (item))
    const country = children[0].countries.map(item => {
        const lan = item.languages.map(item => (item.name))
        return (
            <tr key={item.code}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.native}</td>
                <td>{item.capital}</td>
                <td>{item.currency}</td>
                <td>{lan}</td>
            </tr>
        )
    }
    )

    return (
        <div >
            <table id="africa" className="table-width">
                <colgroup span="6"></colgroup>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Native</th>
                    <th>Capital</th>
                    <th>Currency</th>
                    <th>Languages</th>
                </tr>
                {country}
            </table>
        </div>
    );
}

export default GetAfrica;