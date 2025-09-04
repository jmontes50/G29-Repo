
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
  // Cuando queramos utilizar class en React, utilizaremos className como reemplazo
  <table className="border-collapse border-t-2 w-full">
    <thead>
      <tr>
        {headers.map((item, index) => (
          <th key={index} className="px-4 py-2">
            {item.label}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {/* recorrer todos los productos/items 1 x 1 */}
      {data.map((item) => (
        <tr key={item.id}>
          {headers.map((head, index) => (
            <td key={index}>
              {item[head.name]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
 )
}

export default TableData
