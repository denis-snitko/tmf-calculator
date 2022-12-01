const projectFolder = require('path').basename('docs')
const sourceFolder = '#src'

const smartGridOptions = {
  outputStyle: 'scss',
  filename: '_smart-grid',
  columns: 12, // number of grid columns
  offset: '40px', 
  mobileFirst: false,
  mixinNames: {
    container: 'container',
  },
  container: {
    maxWidth: '1280px',
    fields: '0', 
  },
  breakPoints: {
    xxs: {
      width: '375px', 
    },
    xs: {
      width: '414px', 
    },
    sm: {
      width: '576px', 
    },
    md: {
      width: '768px', 
    },
    lg: {
      width: '992px', 
    },
    xl: {
      width: '1200px',
    },
    xxl: {
      width: '1400px',
    },
  },
}

module.exports = {
  projectFolder,
  sourceFolder,
  smartGridOptions
}
