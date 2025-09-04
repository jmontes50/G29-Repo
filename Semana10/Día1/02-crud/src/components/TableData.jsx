
const TableData = ({ data }) => { //recordemos que los props son un objeto
  console.log("TableData", data)
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
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableData
