import fetch from './FakeFetch'

const getBlogPosts = async () => {
  const response = await fetch('blogPosts.json')
  const blogPosts = await response.json()

  return blogPosts
}

const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <p>This doesn't look much like anything. Yet!</p>
    </div>
  )
}

export default App
