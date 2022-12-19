
const delay = (time) => new Promise((resolve) => {
  setTimeout(() => resolve(1), time)
})

const getData = async (slug) => {
  const post = await delay(5000)
  return {slug}
}

export default async function BlogPost({params}) {
  const {slug} = params
  const post = await getData(slug)

  throw new Error('hello')
  return <div>{post.slug}</div>
}




