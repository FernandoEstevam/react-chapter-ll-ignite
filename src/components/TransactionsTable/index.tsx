import { Container } from './styles'
export function TranssactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Desenvolvimento de website</td>
              <td className="deposit">R$ 12.000,00</td>
              <td>Desenvolvimento</td>
              <td>20/10/2021</td>
            </tr>
            <tr>
              <td>Aluguel</td>
              <td className="withdraw">-R$ 2.243,00</td>
              <td>Casa</td>
              <td>17/10/2021</td>
            </tr>
          </tbody>
      </table>
    </Container>
  )
}