const tool = {
  getPathLast(path) {
    const paths = path.split('/')
    return paths[paths.length - 1]
  }
}

export default tool
