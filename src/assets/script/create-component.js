const inquirer = require('inquirer');

const fs = require('fs');

const path = require('path');

const makeTsxString = (componentName) => {
  return `import './index.less'

interface PropsType {}
  
const ${componentName}: React.FC<PropsType> = props => {
  return <></>
}
  
export default ${componentName}`
}

const firstToUpper1 = (str) => {
  return str.trim().toLowerCase().replace(str[0], str[0].toUpperCase());
}

inquirer.prompt([{
  name: 'filename',
  type: 'input',
  message: '请输入你要创建组件名称(默认名称为: default-component): ',
  default: 'default-component'
}]).then((filenameInput) => {
  const dir = `${path.resolve(path.dirname(__dirname), `.././components/${filenameInput.filename}`)}`

  const splitStr = filenameInput.filename.split('-').map(item => firstToUpper1(item)).join('')

  fs.mkdir(dir, (dirError) => {
    if (dirError) {
      console.log(dirError);
      return
    }

    fs.writeFile(dir + '/index.less', '', (lessError) => {
      if (lessError) {
        console.log(lessError);
        return
      }
    })

    fs.writeFile(dir + '/index.tsx', makeTsxString(splitStr), (tsxError) => {
      if (dirError) {
        console.log(dirError);
        return
      }
      console.warn(`创建完毕!`);
      process.exit(0)
    })
  })
})