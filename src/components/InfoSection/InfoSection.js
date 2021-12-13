import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Button } from '../../globalStyles';
import { InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading,Subtitle,ImgWrapper,Img} from './InfoSection.elements';
export const InfoSection = ({primary,lightBg,imgStart,lightTopLine,lightTextDesc,buttonLabel,description,headline,lightText,topLine,start,img,alt}) => {
    return (
        <>
          <InfoSec lightBg={lightBg}>
              <Container>
                  <InfoRow imgStart={imgStart}>
                      <InfoColumn>
                          <TextWrapper>
                              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                              <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                              <Link to="/">
                                  <Button big fontBig primary={primary}>{buttonLabel}</Button>
                              </Link>
                          </TextWrapper>
                      </InfoColumn>
                      <InfoColumn>
                          <ImgWrapper start={start}>
                              <Img src={img} alt={alt} />
                          </ImgWrapper>
                      </InfoColumn>
                  </InfoRow>
              </Container>
          </InfoSec>  
        </>
    )
}

export default InfoSection;