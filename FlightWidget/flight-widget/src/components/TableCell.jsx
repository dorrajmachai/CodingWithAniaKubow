import TableLetter from './TableLetter'

const TableCell = ({ word }) => {
    return (
        <td>
            {Array.from(word).map((letter, _index) => (
                <TableLetter key={_index} letter={letter} />
            ))} 
        </td>
    )
}

export default TableCell