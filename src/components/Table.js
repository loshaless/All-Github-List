import React from 'react'
import TableData from '../components/TableData'

function Table({ data }) {
  console.log(data);

  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">updated_at</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => {
            return (
              <TableData
                key={e.id}
                index={index + 1}
                name={e.name}
                description={e.description}
                updated_at={e.updated_at}
              />)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
