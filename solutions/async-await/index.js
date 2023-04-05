const fetchPosts = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        `${user}: post1`,
        `${user}: post2`,
        `${user}: post3`,
        `${user}: post4`,
        `${user}: post5`
      ])
    }, 1000)
  })
}

const users = [
  'user1',
  'user2',
  'user3',
  'user4',
  'user5'
]

const displayAllPosts = async () => {
  for (const user of users) {
    const posts = await fetchPosts(user)
    for (const post of posts) {
      console.log(post)
    }
  }
}

const displayAllPostsWithPromiseAll = async () => {
  const posts = (await Promise.all(users.map(user => fetchPosts(user)))).flat()
  for (const post of posts) {
    console.log(post)
  }
}

const main = async () => {
  console.time('displayAllPosts')
  await displayAllPosts()
  console.timeEnd('displayAllPosts')

  console.log('==============================================')

  console.time('displayAllPostsWithPromiseAll')
  await displayAllPostsWithPromiseAll()
  console.timeEnd('displayAllPostsWithPromiseAll')
}

main()
