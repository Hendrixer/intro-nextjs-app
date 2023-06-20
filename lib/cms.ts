const delay = (time: number | undefined) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, time)
  })
}

export const getAllPosts = async () => {
  await delay(3000)
  
  return new Array(10).fill(1).map((_, i) => {
    return {
      title: `This is post ${i}`,
      slug: `this-is-post-${i}`,
      body:' tiruri tirura'
    }
  })
}