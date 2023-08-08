const sql = require('mssql');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_NAME,
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}



/*
    //Use Azure VM Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        port: process.env["db_port"],
        database: process.env["db_database"],
        authentication: {
            type: 'azure-active-directory-msi-vm'
        },
        options: {
            encrypt: true
        }
    }

    //Use Azure App Service Managed Identity to connect to the SQL database
    const config = {
        server: process.env["db_server"],
        port: process.env["db_port"],
        database: process.env["db_database"],
        authentication: {
            type: 'azure-active-directory-msi-app-service'
        },
        options: {
            encrypt: true
        }
    }
*/




async function connectAndQuery() {
    try {
        var poolConnection = await sql.connect(config);

        console.log("Reading rows from the Trending Table...");
        var resultSet = await poolConnection.request().query(
            `SELECT * FROM Trending`);
        
        // output column headers
        // var columns = "";
        // for (var column in resultSet.recordset.columns) {
        //     columns += column + ", ";
        // }
        // console.log("%s\t", columns.substring(0, columns.length - 2));

        // 
        const response = {results: []}

        resultSet.recordset.forEach(row => {
            console.log("%s\t%s", row.TmdbID, row);
            response.results.push({
                tmdbID: row.TmdbID,
                name: row.Name,
                posterPath: row.PosterPath,
                backdropPath: row.BackdropPath,
                mediaType: row.MediaType,
                overview: row.Overview
            })
        });
        
        // close connection only when we're certain the application is finished
        poolConnection.close();

        return response

    } catch (err) {
        console.log(err.message);
    }
}



module.exports = {
    connectAndQuery
}