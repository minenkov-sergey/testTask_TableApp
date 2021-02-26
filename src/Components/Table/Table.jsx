import MaterialTable from "material-table";
import { API } from './../../DAL/API';
import { useState, useEffect } from "react";


const Table = () => {

    const [rows, setRows] = useState()

    const columns = [
        { title: "id", field: "id" },
        { title: "Name", field: "name" },
        { title: "Type", field: "types" },
        { title: "Evolves from", field: "evolvesFrom" },
        { title: "Health", field: "hp" },
        { title: "Rarity", field: "rarity" },
        { title: "Artist", field: "artist" },
    ];

    useEffect(() => {
        const fetchData = async () => {
            const data = await API.getPokemons()
            setRows(data)
        }
        fetchData()
    }, [])

    return (
        <MaterialTable
            options={{
                search: true,
                sorting: true,
                pageSizeOptions: [5, 10, 25, 50],
                pageSize: 50
            }}
            columns={columns}
            data={rows}
            title="Pokemon Table"
        />
    );
}

export default Table;
