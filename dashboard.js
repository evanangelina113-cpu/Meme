export default function Dashboard() {
  return (
    <main style={{padding:'40px'}}>
      <h1>Dashboard</h1>

      <div style={{marginTop:'20px'}}>
        <h2>Account Balance</h2>
        <p>$24,500.00</p>
      </div>

      <div style={{marginTop:'20px'}}>
        <h2>Recent Transactions</h2>
        <ul>
          <li>Deposit - $1,000</li>
          <li>Transfer - $250</li>
        </ul>
      </div>
    </main>
  )
}