import React from 'react'

function TableData({ name, index, description, updated_at }) {
  function separateValue(date) {
    let tanggal = date.split("T");
    return tanggal[0]
  }

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{name}</td>
      <td>{description}</td>
      <td>{separateValue(updated_at)}</td>
    </tr>
  )
}

export default TableData
