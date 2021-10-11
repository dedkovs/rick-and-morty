import { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Character, characterStatuses } from '../../entities/charactersTypes';

type CharacterStatusAndColor = {
  [key in characterStatuses]: string;
};

const characterStatusAndColor: CharacterStatusAndColor = {
  [characterStatuses.All]: '',
  [characterStatuses.Alive]: 'LimeGreen',
  [characterStatuses.Dead]: 'OrangeRed',
  [characterStatuses.unknown]: 'rgba(0,0,0,0.5)',
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
  ':last-child': { paddingBottom: { xs: 1, sm: 2 } },
  height: '100%',
};

const characterNameStyle = {
  typography: 'h5',
  fontSize: { xs: '1.3rem', sm: '1.5rem' },
};

const characterCardImageStyle = {
  width: { xs: 100, sm: 150 },
  height: 'fit-content',
  borderRadius: 1,
  marginRight: 1.5,
  marginBottom: 1,
};

const greyText = {
  display: 'inline',
  color: 'rgba(0,0,0,0.5)',
};

const cardActionsStyle = {
  padding: 0,
  marginTop: 2,
} as const;

const containerForPositioningLearnMoreButtonToBottom = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
} as const;

const learnMoreButtonStyle = {
  padding: 0,
  ':hover': { backgroundColor: 'transparent' },
};

const CharacterCard: FC<Character> = (props) => {
  const { gender, image, name, species, status, type } = props;

  const characterStatusStyle = {
    display: 'inline',
    color: characterStatusAndColor[status],
  };

  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Box
          component="img"
          sx={characterCardImageStyle}
          alt={name}
          src={image}
        />
        <Box sx={containerForPositioningLearnMoreButtonToBottom}>
          <Box>
            <Box sx={characterNameStyle}>{name}</Box>
            <Box sx={{ mb: 1.5 }} color="text.secondary">
              {type}
            </Box>
            <Box sx={{ typography: 'body2' }}>
              <Box>
                <Box sx={greyText}>species: </Box>
                {species}
              </Box>
              <Box>
                <Box sx={greyText}>gender: </Box>
                {gender}
              </Box>
              <Box>
                <Box sx={greyText}>status: </Box>
                <Box sx={characterStatusStyle}>{status}</Box>
              </Box>
            </Box>
          </Box>
          <CardActions sx={cardActionsStyle}>
            <Button sx={learnMoreButtonStyle} size="small">
              Learn More
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
