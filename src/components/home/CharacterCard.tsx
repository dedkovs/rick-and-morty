import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Character, CharacterStatus } from '../../entities/charactersTypes';
import Skeleton from '@mui/material/Skeleton';
import { setIsLoading } from '../../redux/slices/characterDetailsSlice';
import { useAppDispatch } from '../../redux/hooks';
import { setScrollY } from '../../redux/slices/uiSlice';

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
  minWidth: { xs: 275, sm: 336 },
  width: { xs: 275, sm: 336 },
  borderRadius: 2,
  boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
} as const;

const cardContentStyle = {
  display: 'flex',
  padding: { xs: 1, sm: 1.5 },
  ':last-child': { paddingBottom: 1 },
  height: '100%',
} as const;

const characterNameStyle = {
  typography: 'h5',
  fontSize: { xs: '1.3rem', sm: '1.5rem' },
  wordBreak: 'break-word',
} as const;

const characterSpeciesStyle = {
  display: 'inline',
  textTransform: 'capitalize',
} as const;

const characterGenderStyle = {
  display: 'inline',
  textTransform: 'capitalize',
} as const;

const characterCardImageStyle = {
  width: { xs: 100, sm: 150 },
  height: 'fit-content',
  borderRadius: 1,
  marginRight: 0,
  marginBottom: 1,
  position: 'relative',
} as const;

const imageSkeletonStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: { xs: 100, sm: 150 },
  height: { xs: 100, sm: 150 },
  borderRadius: 1,
} as const;

const greyText = {
  display: 'inline',
  color: 'rgba(0,0,0,0.5)',
} as const;

const textWithButtonContainer = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginLeft: 1.5,
} as const;

const cardActionsStyle = {
  padding: 0,
  marginTop: 2,
  justifyContent: 'flex-end',
  '& a': {
    textDecoration: 'none',
  },
} as const;

const learnMoreButtonStyle = {
  padding: 1,
  textDecoration: 'none',
} as const;

const CharacterCard: FC<Character> = (props) => {
  const dispatch = useAppDispatch();

  const [imageLoaded, setImageLoaded] = useState(false);

  const { id, gender, image, name, species, status, type } = props;

  const characterStatusStyle = {
    display: 'inline',
    color: characterStatusAndColor[status],
    textTransform: 'capitalize',
  } as const;

  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Box sx={{ position: 'relative' }}>
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

        <Box sx={textWithButtonContainer}>
          <Box>
            <Box sx={characterNameStyle}>{name}</Box>
            <Box sx={{ mb: 1.5 }} color="text.secondary">
              {type}
            </Box>
            <Box sx={{ typography: 'body2' }}>
              <Box>
                <Box sx={greyText}>species: </Box>
                <Box sx={characterSpeciesStyle}>{species}</Box>
              </Box>
              <Box>
                <Box sx={greyText}>gender: </Box>
                <Box sx={characterGenderStyle}>{gender}</Box>
              </Box>
              <Box>
                <Box sx={greyText}>status: </Box>
                <Box sx={characterStatusStyle}>{status}</Box>
              </Box>
            </Box>
          </Box>
          <CardActions sx={cardActionsStyle}>
            <Link to={`/character/${id}`}>
              <Button
                sx={learnMoreButtonStyle}
                size="small"
                onClick={() => {
                  dispatch(setScrollY(Math.round(window.scrollY)));
                  dispatch(setIsLoading(true));
                }}
              >
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
