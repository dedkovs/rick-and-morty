import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {
  Character,
  characterStatuses,
} from '../../../redux/slices/characters.types';

type CharacterStatusAndColor = {
  [key in characterStatuses]: string;
};

const characterStatusAndColor: CharacterStatusAndColor = {
  [characterStatuses.Alive]: 'LimeGreen',
  [characterStatuses.Dead]: 'OrangeRed',
  [characterStatuses.unknown]: 'rgba(0,0,0,0.5)',
};

const cardStyle = {
  minWidth: 275,
  maxWidth: { xs: 340, sm: 380 },
  margin: 2,
  position: 'relative',
  borderRadius: 2,
  boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
} as const;

const cardContentStyle = {
  display: 'flex',
  padding: { xs: 1, sm: 1.5 },
  ':last-child': { paddingBottom: 1 },
};

const characterCardImageStyle = {
  width: { xs: 100, sm: 150 },
  height: '100%',
  borderRadius: 1,
  marginRight: 1.5,
  marginBottom: 1,
};

const greyText = {
  display: 'inline',
  color: 'rgba(0,0,0,0.5)',
};

const cardActionsStyle = {
  alignItems: 'baseline',
  padding: 0,
  marginTop: 2,
};

const buttonStyle = {
  padding: 0,
  ':hover': { backgroundColor: 'transparent' },
};

const CharacterCard: React.FC<Character> = (props) => {
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
        <Box>
          <Box sx={{ typography: 'h5' }}>{name}</Box>
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
          <CardActions sx={cardActionsStyle}>
            <Button sx={buttonStyle} size="small">
              Learn More
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
