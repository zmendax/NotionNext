
const Index = props => {
  return <div>
    首页
  </div>
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 5
  }
}

export default Index
