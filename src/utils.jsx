import { Row, Col } from "react-bootstrap";

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

export const capitalizeFirstLetterOfWords = str => str.split(" ").map(capitalizeFirstLetter).join(" ")

export const changeStringSeparator = (str, oldSeparator, newSeparator) => str.split(oldSeparator).join(newSeparator)

export const getVideoComponent = video => {
    return (
        <Col lg={9}>
            <video className="img-fluid mx-auto d-block" controls>
                <source src={video} type="video/mp4"/>
            </video>
        </Col>
    )
}

export const getImageComponet = image => {
    return (
        <Col lg={9}>
            <img className="img-fluid mx-auto d-block" src={image} />
        </Col>
    )
}

export const getTextComponent = text => {
    return (
        <Col className="d-flex align-items-center">
            {text}
        </Col>
    )
}

export const interleaveArrays = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    result.push(arr1[i]);
    result.push(arr2[j]);
    i++;
    j++;
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
