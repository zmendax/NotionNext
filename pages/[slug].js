
/**
 * 根据notion的slug访问页面，针对类型为Page的页面
 * @param {*} props
 * @returns
 */
const Slug = props => {
  return <div>单页 - {props.slug}</div>
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: { slug },
    revalidate: 1
  }
}

export default Slug
