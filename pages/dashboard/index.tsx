import withAuth from "hoc/withAuth";

const Dashboard = () => {
  return <div style={{color: 'red'}}>Dashboard</div>
}

export default withAuth(Dashboard);