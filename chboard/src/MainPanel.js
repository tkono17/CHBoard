import { React, useState, useEffect } from 'react';
import styles from './MainPanel.module.css';
import ImagePanel from './ImagePanel.js';
import parse from 'html-react-parser';

function MainPanel(props) {
  const [fileName, setFileName] = useState('')
  const [contents, setContents] = useState('')
  
  const readSvgFile = (file) => {
    var reader = new FileReader();
    console.log('readSvgFile: ', file)
    reader.onload = (event) => {
      const data = parse(event.target.result)
      setContents(data)
    }
    reader.onerror = (event) => { PromiseRejectionEvent(event);} 
    reader.readAsText(file)
  }

  const ballsToSvg = (balls) => {
    const ballList = balls.map( (bdata) => {
      return (<circle cx={bdata[0]} cy="0" r="2" />)
    })
    return (<svg xmlns="http://www.w3c.org/2000/svg" viewBox="-100 -20 200 40" >
      {ballList}
    </svg>)
  }

  const readJsonFile = (file) => {
    var reader = new FileReader();
    console.log('readSvgFile: ', file)
    reader.onload = (event) => {
      const jdata = JSON.parse(event.target.result)
      console.log('jdata in onload: ', jdata)
      //const nBalls = jdata['numberOfBalls']
      const nSteps = jdata['numberOfSteps']
      var istep=0;
      const processTimeSteps = setInterval( () => {
        if (istep < nSteps) {
          const balls0 = jdata['data'][istep]['balls']
          const svgdata = ballsToSvg(balls0)
          setContents(svgdata)
          istep++;
        } else {
          clearInterval(processTimeSteps);
          console.log('Finish time step at ', istep)
        }

      }, 500);

    }
    reader.onerror = (event) => { PromiseRejectionEvent(event);} 
    reader.readAsText(file)

  }

  useEffect( () => {
    if (props.svgFile) {
      setFileName(props.svgFile.name)
      console.log('MainPanel.useEffect: ', props.svgFile.name)
      readSvgFile(props.svgFile)
    }
  }, [props.svgFile])

  useEffect( () => {
    if (props.jsonFile) {
      setFileName(props.jsonFile.name)
      console.log('MainPanel.useEffect: ', props.jsonFile.name)
      readJsonFile(props.jsonFile)

    }
  }, [props.jsonFile])

  console.log('MainPanel f=', fileName)
  console.log('  contents=', contents)

  return (<div className={styles.MainPanel}>
          <p>File: {fileName}</p> <br/>
          <ImagePanel data={contents}/>
          </div>)
  
};

export default MainPanel
