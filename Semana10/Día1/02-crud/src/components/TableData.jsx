
/**
 *
 * @param {headers:array, data:array}
 * @returns
 */
const TableData = ({ data, headers }) => { //recordemos que los props son un objeto
  // console.log("TableData", data)
  /*
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item.producto_nombre}</td>
            <td>{item.producto_descripcion}</td>
            <td>{item.producto_precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
  */
 return (
  <table>
    <thead>
      <tr>
        {headers.map((item, index) => (
          <th key={index}>
            {item.label}
          </th>
        ))}
      </tr>
    </thead>
  </table>
 )
}

export default TableData
