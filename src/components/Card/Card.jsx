import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, } from '@mui/material';
import OutdoorGrillOutlinedIcon from '@mui/icons-material/OutdoorGrillOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import styled from 'styled-components';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
const ContainerItem = styled.div`
display:flex;
padding:15px;
width:100%;
justify-content: space-between;
height:auto;`
const Contain = styled.div`
display:flex;
align-items:center;
`
const InfoContainer = styled.div`
display:flex;
align-items:center;
margin-top:5px;

`
export default function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://usmenuguide.com/wp-content/uploads/2022/06/yarsaNepaleseCuisinesanfrancisco404.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Yarsa Nepalese Cuisine
                    </Typography>
                    <Typography variant='body3' color='gray'>North Beach
                        San Francisco
                        California

                    </Typography>
                    <InfoContainer>
                        <CallOutlinedIcon fontSize='small' />
                        <Typography variant='body3' color='gray'>
                            984-456790

                        </Typography>
                    </InfoContainer>


                </CardContent>
                <ContainerItem>
                    <Contain>
                        <LocationOnOutlinedIcon />
                        <Typography variant='body3' color='gray'>1km</Typography>
                    </Contain>
                    <Contain>
                        <OutdoorGrillOutlinedIcon />
                        <Typography variant='body3' color='gray'>Nepali</Typography>
                    </Contain>
                    <Contain>
                        <LocalAtmOutlinedIcon />
                        <Typography variant='body3' color='gray'>100-200</Typography>
                    </Contain>
                </ContainerItem>
            </CardActionArea>
        </Card>
    );
}
