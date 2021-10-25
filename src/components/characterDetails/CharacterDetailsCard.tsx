import { FC, useEffect, useState } from 'react';
import { Character, CharacterStatus } from '../../entities/charactersTypes';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setSelectedCharacterId } from '../../redux/slices/charactersSlice';

interface CharacterDetailsCardProps {
  result: Character;
}

type CharacterStatusAndColor = {
  [key in CharacterStatus]: string;
};

const characterStatusAndColor: CharacterStatusAndColor = {
  [CharacterStatus.All]: 'initial',
  [CharacterStatus.Alive]: 'LimeGreen',
  [CharacterStatus.Dead]: 'OrangeRed',
  [CharacterStatus.Unknown]: 'rgba(0,0,0,0.5)',
};

const cardStyle = {
  minWidth: 320,
  width: { xs: '100%' },
  maxWidth: { xs: 340, sm: 600 },
  display: 'flex',
  flexWrap: 'wrap',
} as const;

const cardContentStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: { xs: 'column', sm: 'row' },
  flex: 'none',
  margin: '0 auto',
  gap: { xs: 1, sm: 3 },
  maxWidth: { xs: 300, sm: 650 },
  padding: 0,
  ':last-child': { paddingBottom: 0 },
} as const;

const characterNameStyle = {
  typography: 'h5',
  fontSize: '2rem',
  wordBreak: 'break-word',
} as const;

const characterDetailStyle = {
  display: 'inline',
  textTransform: 'capitalize',
  lineHeight: '1rem',
} as const;

const characterCardImageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: { xs: '100%', sm: 300 },
  borderRadius: 1,
  marginRight: 0,
  marginBottom: 0,
} as const;

const imageSkeletonStyle = {
  width: 300,
  height: 300,
  borderRadius: 1,
} as const;

const detailsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: 1,
  alignItems: 'center',
} as const;

const greyText = {
  display: 'flex',
  width: 80,
  color: 'rgba(0,0,0,0.5)',
} as const;

const textWithButtonContainer = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: { xs: '100%', sm: 250 },
} as const;

const cardActionsStyle = {
  padding: 0,
  marginTop: 3,
  justifyContent: 'flex-end',
  '& a': {
    textDecoration: 'none',
  },
} as const;

const goBackButtonStyle = {
  padding: 1,
  textDecoration: 'none',
} as const;

const CharacterDetailsCard: FC<CharacterDetailsCardProps> = ({ result }) => {
  const dispatch = useAppDispatch();

  const [imageLoaded, setImageLoaded] = useState(false);

  const {
    created,
    // episode,
    gender,
    id,
    image,
    location,
    name,
    origin,
    species,
    status,
    type,
    // url,
  } = result;

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const characterStatusStyle = {
    display: 'inline',
    color: characterStatusAndColor[status],
    textTransform: 'capitalize',
  } as const;

  useEffect(() => {
    dispatch(setSelectedCharacterId(id));
  }, [dispatch, id]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', minWidth: 320 }}>
      <Card sx={cardStyle} elevation={0}>
        <CardContent sx={cardContentStyle}>
          <Box
            sx={{
              position: 'relative',
              maxWidth: 340,
            }}
          >
            <Box sx={{ width: 300, height: 300 }}>
              {imageLoaded ? null : (
                <Skeleton
                  sx={imageSkeletonStyle}
                  animation="wave"
                  variant="rectangular"
                />
              )}
              <Box
                component="img"
                sx={characterCardImageStyle}
                alt={name}
                src={image}
                onLoad={() => setImageLoaded(true)}
              />
            </Box>
          </Box>

          <Box sx={textWithButtonContainer}>
            <Box>
              <Box sx={characterNameStyle}>{name}</Box>
              <Box sx={{ typography: 'h5' }} color="text.secondary">
                {type}
              </Box>
              <Box sx={{ typography: 'body1', mt: 1.5, lineHeight: '2rem' }}>
                <Box sx={detailsContainer}>
                  <Box sx={greyText}>species: </Box>
                  <Box sx={characterDetailStyle}>{species}</Box>
                </Box>
                <Box sx={detailsContainer}>
                  <Box sx={greyText}>gender: </Box>
                  <Box sx={characterDetailStyle}>{gender}</Box>
                </Box>
                <Box sx={detailsContainer}>
                  <Box sx={greyText}>status: </Box>
                  <Box sx={characterStatusStyle}>{status}</Box>
                </Box>
                <Box sx={detailsContainer}>
                  <Box sx={greyText}>origin: </Box>
                  <Box
                    sx={
                      origin.url.slice(41) === ''
                        ? {
                            pointerEvents: 'none',
                            '& a': {
                              textDecoration: 'none',
                              color: 'rgba(0,0,0,0.5)',
                            },
                          }
                        : { '& a': { color: 'rgba(0,0,0,1)' } }
                    }
                  >
                    <Link to={`/location/${origin.url.slice(41)}`}>
                      <Box sx={characterDetailStyle}>{origin.name}</Box>
                    </Link>
                  </Box>
                </Box>
                <Box sx={detailsContainer}>
                  <Box sx={greyText}>location: </Box>
                  <Box
                    sx={
                      location.url.slice(41) === ''
                        ? {
                            pointerEvents: 'none',
                            '& a': {
                              textDecoration: 'none',
                              color: 'rgba(0,0,0,0.5)',
                            },
                          }
                        : { '& a': { color: 'rgba(0,0,0,1)' } }
                    }
                  >
                    <Link to={`/location/${location.url.slice(41)}`}>
                      <Box sx={characterDetailStyle}>{location.name}</Box>
                    </Link>
                  </Box>
                </Box>
                <Box sx={detailsContainer}>
                  <Box sx={greyText}>created: </Box>
                  <Box sx={characterDetailStyle}>
                    {new Date(created).toUTCString()}
                  </Box>
                </Box>
              </Box>
            </Box>
            <CardActions sx={cardActionsStyle}>
              <Button sx={goBackButtonStyle} size="large" onClick={goBack}>
                Go back
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CharacterDetailsCard;
